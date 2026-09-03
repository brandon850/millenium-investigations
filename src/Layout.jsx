import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/assets/Asset 4.png";
import LogoWhite from "@/assets/Asset 3.png";

const navigation = [
  { name: "Home", page: "Home" },
  {
    name: "Services",
    page: "Services",
    submenu: [
      { name: "Information Services", page: "InformationServices" },
      { name: "Process Service", page: "ProcessService" },
      { name: "Surveillance", page: "Surveillance" },
      { name: "Field Investigation", page: "FieldInvestigation" },
    ],
  },
  { name: "About", page: "About" },
];

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      {/* Top bar */}
      <div className="hidden md:block bg-slate-950 text-slate-300 py-3 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a
              href="mailto:INFO@MILLENNIUMINV.COM"
              className="flex items-center gap-2 hover:text-amber-500 transition-colors"
            >
              <Mail className="w-4 h-4 text-red-700" />
              INFO@MILLENNIUMINV.COM
            </a>
            <a
              href="tel:7704897017"
              className="flex items-center gap-2 hover:text-amber-500 transition-colors"
            >
              <Phone className="w-4 h-4 text-red-700" />
              (770) 489-7017
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-slate-900/5"
          : "bg-white"
          }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to={createPageUrl("Home")}
              className="flex items-center gap-3"
            >
              <img src={Logo} alt="Logo" className="w-48" />
            </Link>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() =>
                    item.submenu && setActiveDropdown(item.name)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={createPageUrl(item.page)}
                    className="flex items-center gap-1 px-4 py-2 text-slate-600 hover:text-slate-900 font-medium transition-colors"
                  >
                    {item.name}
                    {item.submenu && <ChevronDown className="w-4 h-4" />}
                  </Link>

                  {item.submenu && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 pt-2"
                    >
                      <div className="w-56 bg-white rounded-xl shadow-xl shadow-slate-900/10 border border-slate-100 overflow-hidden">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={createPageUrl(subItem.page)}
                            className="block px-4 py-3 text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                to={createPageUrl("Contact")}
                className="px-8 py-3 bg-red-700 hover:bg-red-500 text-white font-bold rounded-md transition-colors uppercase tracking-wide text-sm"
              >
                Contact
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-slate-100 bg-white"
            >
              <div className="px-6 py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={createPageUrl(item.page)}
                      className="block py-3 text-slate-900 font-medium"
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="pl-4 space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={createPageUrl(subItem.page)}
                            className="block py-2 text-slate-600"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-slate-100">
                  <Link
                    to={createPageUrl("Contact")}
                    className="block w-full py-3 bg-red-700 text-white text-center font-bold rounded-md uppercase"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img src={LogoWhite} alt="Logo" className="w-64" />
              </div>
              <p className="text-slate-400 max-w-md mb-6">
                A professional private investigations firm licensed and insured
                in the state of Georgia. Serving legal and insurance
                professionals throughout Georgia and neighboring states with
                unparalleled personal service and reliability.
              </p>
              <div className="space-y-2 text-slate-400">
                <p>P.O. Box 5787</p>
                <p>Douglasville, GA 30154-0014</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-3 text-slate-400">
                <li>
                  <Link
                    to={createPageUrl("InformationServices")}
                    className="hover:text-white transition-colors"
                  >
                    Information Services
                  </Link>
                </li>
                <li>
                  <Link
                    to={createPageUrl("ProcessService")}
                    className="hover:text-white transition-colors"
                  >
                    Process Service
                  </Link>
                </li>
                <li>
                  <Link
                    to={createPageUrl("Surveillance")}
                    className="hover:text-white transition-colors"
                  >
                    Surveillance
                  </Link>
                </li>
                <li>
                  <Link
                    to={createPageUrl("FieldInvestigation")}
                    className="hover:text-white transition-colors"
                  >
                    Field Investigation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-3 text-slate-400">
                <li>
                  <a
                    href="tel:7704897017"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    (770) 489-7017
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:INFO@MILLENNIUMINV.COM"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    INFO@MILLENNIUMINV.COM
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Millennium Investigations, Inc. All
              rights reserved.
            </p>
            <div className="flex gap-6 text-slate-500 text-sm">
              <Link
                to={createPageUrl("About")}
                className="hover:text-white transition-colors"
              >
                About Us
              </Link>
              <Link
                to={createPageUrl("Contact")}
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
