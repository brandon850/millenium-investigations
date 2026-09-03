import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { pagesConfig } from "./pages.config";
import PageNotFound from "./lib/PageNotFound";

const { Pages, Layout, mainPage } = pagesConfig;
const mainPageKey = mainPage ?? Object.keys(Pages)[0];
const MainPage = mainPageKey ? Pages[mainPageKey] : <></>;
const toSlug = (key) =>
  key
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();

/* React Router preserves scroll position across navigations, which made every
   internal link look like it was loading halfway down the page. */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const LayoutWrapper = ({ children, currentPageName }) =>
  Layout ? (
    <Layout currentPageName={currentPageName}>{children}</Layout>
  ) : (
    <>{children}</>
  );

export default function App() {
  return (
    <Router basename={import.meta.env.VITE_BASE || "/millennium"}>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <LayoutWrapper currentPageName={mainPageKey}>
              <MainPage />
            </LayoutWrapper>
          }
        />
        {Object.entries(Pages).map(([key, Page]) => {
          const routePath = key === mainPageKey ? "/" : `/${toSlug(key)}`;
          if (routePath === "/") return null;

          return (
            <Route
              key={key}
              path={routePath}
              element={
                <LayoutWrapper currentPageName={key}>
                  <Page />
                </LayoutWrapper>
              }
            />
          );
        })}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}
