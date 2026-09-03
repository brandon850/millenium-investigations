# Millennium Investigations — Client Change List

Source: `website change suggestions_1.pdf` (client round 1)
Status legend: **CODE** = straightforward code edit · **ASSET** = needs a new image/video · **ASK** = needs a decision before I build it

### Progress

**Applied 2026-08-11** — every item marked CODE below is done, verified in a browser, and the production build passes. Still outstanding: the 3 ASSET photo items, the video re-cut, and the 6 client questions at the bottom.

Also done in the same pass:
- **Lato** wired up via Google Fonts (`index.html`) and set as the default `sans` stack in `tailwind.config.js`, replacing the browser-default UI font. Weights 300/400/700/900 + 400 italic.
- `brand-navy: #1B2A4A` and `brand-red: #C42A2A` registered as Tailwind tokens.

### Decisions made (2026-08-11)

- **Hero hierarchy** — MILLENNIUM INVESTIGATIONS, INC. largest (7xl), tagline beneath it (2xl), INTELLIGENCE → EVIDENCE → RESOLUTION as a smaller accent line (lg) above the paragraph. Left-aligned, as now.
- **Years stat** — "NEARLY 3" / "Decades in Business" (the word NEARLY renders smaller than the numeral to fit the tile).
- **Testimonial** — leave the existing placeholder quote visible until the client supplies real ones. ⚠️ Must not ship to production as-is.
- **Navy** — `#1B2A4A`, registered as `brand-navy` in `tailwind.config.js`. The logo contains no navy (red `#c42a2a` + white/black only), so this is a new brand token. Icons keep blue-600/red-600 to match the Services page the client praised; navy is used for borders.
- **Tagline** — "A New Era In Investigative Services" (plural) everywhere, including the home CTA and the About heading where the PDF wrote it singular.
- **Florida** — included everywhere; FL gets added to the About Coverage Areas list so all five neighboring states are consistent site-wide.

---

## Global / site-wide

| # | Change | File | Status |
|---|--------|------|--------|
| G1 | Scroll-to-top on navigation. Every internal link currently keeps the previous scroll position, which is why "Explore", "Get Started", and all other links appear to "load at the bottom of the page" (home pg #11, #17, #18). One `ScrollToTop` component in the router fixes all of them at once. | `src/App.jsx` | CODE |
| G2 | Footer paragraph rewrite (requested on Services, Info Svcs, Process Svc, Surveillance, Field Inv, About — it's the same shared footer, so one edit covers all six):<br>→ "A professional private investigations firm licensed and insured in the state of Georgia. Serving legal and insurance professionals throughout Georgia and neighboring states with unparalleled personal service and reliability." | `src/Layout.jsx:207` | CODE |
| G3 | Navy blue borders + blue/red colored icons "throughout the website" instead of light-gray icon tiles. Adds `brand-navy: #1B2A4A` to the Tailwind theme so every border references one token. | `tailwind.config.js`, all card components | CODE |
| G4 | Blue check marks (currently slate gray) on Info Svcs, Process Svc, Surveillance, Field Inv. | 4 service pages | CODE |
| G5 | Remove the gray/red "Single Service" eyebrow badge from all four Learn More pages. | 4 service pages | CODE |
| G6 | Font (home pg #1). No font is configured anywhere — no `fontFamily` in the Tailwind theme, no `@font-face`, no Google Fonts link. The site inherits the browser's default UI sans-serif. See open question 1. | `tailwind.config.js`, `index.html` | ASK |

---

## HOME PAGE

### Header / navigation — `src/Layout.jsx`

| # | Change | Status |
|---|--------|--------|
| 3 | Remove the red **APPOINTMENT** button; the red box becomes **CONTACT**. Text nav across the top becomes Home · Services · About (Contact now lives only in the red button). Same change in the mobile menu. | CODE |

### Hero — `src/components/home/HeroSection.jsx`

| # | Change | Status |
|---|--------|--------|
| 2a | Lighten the video. The darkness is a gradient overlay (`from-slate-900/95 via-slate-900/80 to-slate-900/60`) sitting on top of the embed — I can dial this back substantially while keeping the headline readable. | CODE |
| 2b | Re-cut the video content: drop the flashlight / garbage-rummaging shots, use more of the investigator filming from the car and opening the envelope. The hero pulls a YouTube embed (`1WCLmPiY40U`) — the footage itself has to be re-edited and re-uploaded; I can't trim shots from code. | ASSET |
| 4 | **MILLENNIUM INVESTIGATIONS, INC.** becomes the largest element on the page — all caps, bold, white (7xl). Tagline "A New Era In Investigative Services" directly below it (2xl). Logo stays in the header as-is. | CODE |
| 5 | "YOUR EVIDENCE AND INTELLIGENCE IS OUR PRIORITY" → **INTELLIGENCE → EVIDENCE → RESOLUTION** | CODE |
| 6 | Subhead → "Specialized investigations tailored for law firms and insurance professionals in Georgia and its neighboring states (AL, TN, NC, SC, FL). Licensed, insured, and dedicated to your success." | CODE |

### Stats bar — `src/components/home/StatsSection.jsx`

| # | Change | Status |
|---|--------|--------|
| 7 | "20+ / Years Experience" → **"NEARLY 3" / "Decades in Business"** (Jan 2028 = 30 years). | CODE |

### Services overview — `src/components/home/ServicesOverview.jsx`

| # | Change | Status |
|---|--------|--------|
| 8 | Remove the small gray box with red lettering ("Our Services") and retitle the heading "Services We Provide" → **Our Services**. | CODE |
| 9a | Navy blue borders on the four service cards (currently `border-slate-200`). | CODE |
| 9b | Colored icons — blue/red tinted like the Services page, replacing the light-gray icon tiles. | CODE |
| 10 | Field Investigation description → "…including witness **development** and interviews, scene documentation, and evidence gathering." | CODE |
| 11 | "Explore" jumps to mid-page → fixed by G1. | CODE |

### Why Choose Us — `src/components/home/WhyChooseUs.jsx`

| # | Change | Status |
|---|--------|--------|
| 12a | Make "WHY CHOOSE US?" bigger; delete the "We Are Qualified & Professional" heading. | CODE |
| 12b | Replace the body paragraph with two labeled blocks:<br>**EXPERIENCE** — "For nearly three decades Millennium Investigations has been the go-to resource for Law Firms and Insurance Professionals across the country for Information Services, and Special Field investigation, Surveillance and Process Service needs in Georgia and its neighboring states (AL, SC, FL, NC and TN). Our commitment to accuracy, discretion, and timely results has earned us lasting partnerships with leading law firms and insurance carriers."<br>**PROFESSIONALS** — "Our team consists of male and female licensed investigators and certified process servers from diverse backgrounds, including Bilingual Investigators to support communication in Spanish and translation needs." | CODE |
| 12c | Testimonial quotes — client is still sourcing them. Leaving the existing placeholder quote ("Attorney Client / Metro Atlanta Law Firm") visible for now. ⚠️ **This is invented copy — it must be replaced or removed before the site goes live.** | HOLD |
| 13a | Navy blue borders on the six reason boxes (Legal Industry Focus, Complete Confidentiality, etc.). | CODE |
| 13b | Colored blue/red icons instead of light-gray tiles. | CODE |
| 14 | "Rapid Turnaround" → **Timely Turnaround**, description → "Most information services requests are completed within 3 to 5 business days. Rush Services available for time-sensitive matters and Extended Locates are implemented for elusive targets." | CODE |

### Get Started / CTA — `src/components/home/CTASection.jsx`

| # | Change | Status |
|---|--------|--------|
| 15a | Delete the badge "We Ready 24 Hours For You" and the heading "Our Protection Is Always There 24 Hours". | CODE |
| 15b | Heading becomes the tagline: "A New Era In Investigative Services" (plural, per the site-wide decision). | CODE |
| 15c | Body → "Contact us today for a free consultation. We will evaluate your situation, define goals, strategize and provide an estimate of what it will take to obtain the information you seek." *(PDF reads "fee consultation" — treating as a typo for "free".)* | CODE |
| 16 | Lighten the background photo (currently `opacity-10` over near-black). | CODE |
| 17 | "Get Started" jumps to page bottom → fixed by G1. | CODE |
| 18 | Enlarge + brighten the phone and email; make the email a `mailto:` link and the phone a `tel:` link so mobile dials. Right now both are plain text. | CODE |

---

## SERVICES PAGE — `src/pages/Services.jsx`

| # | Change | Status |
|---|--------|--------|
| S1 | Stop alternating the layout — all four service headers on the left, "Key Services Include" panel on the right, every row. (Currently rows 2 and 4 flip sides.) Blue check marks and colored icons already correct here. | CODE |
| S2 | Process Service key services: "Skip Service" → **Skip Trace Service** | CODE |
| S3 | Field Investigation description: "including witness interviews" → "including witness **development** and interviews" | CODE |
| S4 | "Request Consultation" / "Call 770-489-7017" — approved, no change. | — |
| S5 | Footer copy → covered by G2. | CODE |

---

## INFORMATION SERVICES — `src/pages/InformationServices.jsx`

| # | Change | Status |
|---|--------|--------|
| I-a | First paragraph → "…Our information services achieve a 95% success rate with most results delivered within 3 to 7 business days. Rush services are available upon request as well as Extended Skip Trace for elusive subjects." (replaces "within 24-72 hours") | CODE |
| I-b | Second paragraph: "advanced databases" → **proprietary databases** | CODE |
| I-c | Address Verification Search → "Provides subjects last reported address using 3 separate proprietary databases. (If known information is scarce and little to go on this would become a Full Skip Trace / Locate)" | CODE |
| I-d | Contact Info Development → "Develop phone numbers, emails, addresses and social media links for subject and closest relative." | CODE |
| I-e | Personal Information: remove **Homeland Security Search** entirely. | CODE |
| I-f | Vehicle & Employment: move **Insurance Carrier Search** to 2nd position (right after Vehicle Registration Search) and remove **Employment History**. | CODE |
| I-g | Bottom CTA ("Need Information Fast?") → "Contact us for a free consultation and estimate. Expedited Services for Rush or at Statute Cases are completed within 24-72 hours." | CODE |
| I-h | Remove "Single Service" badge (G5); blue check marks (G4). | CODE |

---

## PROCESS SERVICE — `src/pages/ProcessService.jsx`

| # | Change | Status |
|---|--------|--------|
| P-a1 | First paragraph → "Legal Service of Process Services performed by Experienced, Licensed and Certified Professional Private Investigators and Process Servers." | CODE |
| P-a2 | Add the appointment note as on-page copy: "*Contact us for a current list of Counties where we are Permanently Appointed. In counties where we do not have a Permanent Order, a Motion for Appointment of Special Process Server should be filed by the Client." | CODE |
| P-b | Second paragraph: "We **provide** same-day service options" → "We **offer**…" | CODE |
| P-c | Court-Ready Affidavits: "**Professional** affidavits…" → "**Detailed** affidavits…" | CODE |
| P-d | "Skip Service" → **Skip Trace Services**, description → "When Subjects are found to no longer live at the provided address our Skip Tracing capabilities are engaged." | CODE |
| P-e | Add new item **Limited Surveillance** — "When Subjects are evading service or won't answer the door, limited surveillance is implemented." | CODE |
| P-f | Detailed Documentation: "**including** photos, notes…" → "**include** photos, notes…" | CODE |
| P-g | Status Updates: "**Real-time** status updates…" → "**Prompt** status updates…" | CODE |
| P-h | Documents We Serve: remove **Restraining Orders**. | CODE |
| P-i1 | Service Process step 1 → "We receive your documents and service instructions via email or mail. Print first 15 pages at no charge and .50 per page thereafter." | CODE |
| P-i2 | Service Process step 2 → "We run a complimentary basic data search in an effort to confirm the service address, develop a photo and vehicle registration. If there appears to be an issue, we will advise and get permission to run further search. (See Skip Trace Services)." | CODE |
| P-j | Remove "Single Service" badge (G5); blue check marks (G4); footer copy (G2). | CODE |

---

## SURVEILLANCE — `src/pages/Surveillance.jsx`

| # | Change | Status |
|---|--------|--------|
| V-a | Second paragraph: "conducted by experienced investigators" → "conducted by **licensed**, experienced investigators" | CODE |
| V-b | Detailed Reporting → "Comprehensive detailed timeline of all observations regarding the subject." | CODE |
| V-c | Discreet Operations → "Our experienced investigators make every effort to maintain complete discretion throughout all operations. Before beginning field work, we conduct thorough pre-surveillance to map out entry and departure routes, identify discreet stationary surveillance positions, and spot any potential areas of concern. Once in the field, our team performs on-site reconnaissance to gather vital details that are not readily identified during in-house planning." | CODE |
| V-d | Remove **Real-Time Updates**; add an item reading "Final Reports and Video Documentation are delivered via secure, private transfer portal." No title was given — proposing **"Secure Delivery"**. | ASK (title only) |
| V-e | "What We Document" photo — client wants options, with more diversity. | ASSET |
| V-f | Remove "Single Service" badge (G5); blue check marks (G4); footer copy (G2). | CODE |

---

## FIELD INVESTIGATION — `src/pages/FieldInvestigation.jsx`

| # | Change | Status |
|---|--------|--------|
| F-a | "witness interviews" → "witness **development** and interviews" — appears in the page header description, the intro paragraph, and as the card title "Witness Interviews" (→ "Witness Development & Interviews"). | CODE |
| F-b | Record Retrieval → "**On-line and On-site** retrieval of records, documents, and materials from courthouses, agencies, and other sources." | CODE |
| F-c | "Need Field Investigation?" CTA — delete the sentence "Contact us for professional field investigation services throughout Georgia and Alabama." (leaves heading + the two buttons) | CODE |
| F-d | Remove "Single Service" badge (G5); blue check marks (G4); footer copy (G2). | CODE |

---

## ABOUT — `src/pages/About.jsx`

| # | Change | Status |
|---|--------|--------|
| A-1 | The four stat tiles under the header (currently "20+ Years Experience / 95% Skip Trace / 24-72 Hour Turnaround / 2 States Covered") → **30 + YEARS EXP • BILINGUAL AVAILABLE • EXCEPTIONAL SERVICE • RELIABLE RESULTS**. *(PDF reads "BI-LINGUEL" — correcting the spelling.)* These become four equal text items across the dark band rather than number-plus-label tiles. Note the "30 + YEARS" claim conflicts with "nearly 3 decades" on the home page — see open question 4. | CODE |
| A-2 | Heading "WE ARE A COMPLETE COMPANY IN PRIVATE INVESTIGATION SERVICES" → **"A NEW ERA IN INVESTIGATIVE SERVICES"** (plural, per the site-wide decision). | CODE |
| A-3 | Body copy → two paragraphs:<br>"Millennium Investigations, Inc. is a professional private investigations firm licensed and insured in the state of Georgia. Our corporate office is located in the Metro Atlanta area, easily able to service neighboring Alabama, Tennessee, North Carolina, and South Carolina providing comprehensive investigation and information services to attorneys and insurance companies in Georgia and across these neighboring states."<br>"As Professional Investigation Consultants, our clients have come to expect unparalleled personal service and reliability. It is what sets us apart from the competition and keeps clients returning to us year after year."<br>*(Note: this drops the "satellite offices" claim, which also appears in the Coverage Areas and Service Area blocks below — removing it there too for consistency.)* | CODE |
| A-4 | "Our Story" photo — client wants a few more options. | ASSET |
| A-5 | "What We Stand For" — color the three icons (Confidentiality / Excellence / Service). | CODE |
| A-6 | Coverage Areas → **Georgia**: "Statewide coverage with Metro Atlanta headquarters." · **Alabama, Florida, North Carolina, South Carolina, Tennessee**: "Specialized coverage for our neighboring states." (replaces the current Georgia + Alabama-only pair; Florida added for consistency with the home page) | CODE |
| A-7 | Service Area heading → **"Serving Georgia & Neighboring States"**, body → "With our headquarters in Metro Atlanta, we provide comprehensive coverage throughout Georgia and specialized coverage in neighboring states." | CODE |
| A-8 | Bottom-section photo — client wants another option. | ASSET |
| A-9 | Footer copy → covered by G2. | CODE |

---

## Open questions for the client

Resolved internally: tagline wording (plural everywhere), Florida (included everywhere), navy value (`#1B2A4A`). Still needs the client:

1. **Font (home #1).** There is no custom font on the site — it's rendering in the browser's default UI sans-serif (San Francisco on Mac, Segoe UI on Windows), so the site literally looks different on different machines. That's worth fixing regardless of taste. Recommend picking a real brand font; I can mock up 2–3 options for comparison.
2. **Years in business.** Home says "nearly 3 decades"; About says "30 + YEARS EXP". Since Jan 2028 is the 30-year mark, "30+" overstates it by about 18 months. Recommend the same claim in both places — and for a firm selling accuracy and discretion, the conservative number is the better look.
3. **Photos.** Three spots need new options — Surveillance "What We Document" (client asked for more diversity), About "Our Story", About bottom section. Every image on the site is currently Unsplash stock. Happy to pull fresh options, but real photographs of the team, office, or vehicles would do far more for credibility than better stock.
4. **Video.** Lightening it is a code change. Re-cutting it to drop the flashlight and garbage-rummaging shots needs a new edit of the footage and a re-upload to YouTube — who holds the source files?
5. **Process Service county note.** Treating the client's asterisked "Contact us for a current list of Counties where we are Permanently Appointed…" as on-page copy rather than a note to us. Confirm that's the intent.
6. **Surveillance item title (V-d).** The client gave the replacement description but no heading. Proposing **"Secure Delivery"** — confirm or supply a preferred title.

---

## Separate from the client list — bugs I noticed

- **Contact form doesn't send anything.** `handleSubmit` waits 1.5s and shows a success message; no email or backend is wired up. Any inquiry submitted through the site is silently lost. **Accepted for now — to be wired up before go-live.** (`src/pages/Contact.jsx`)
- ~~**Contact form "Last Name" field is bound to the email state**, so typing a last name overwrites the email value and vice versa.~~ **Fixed 2026-08-11** — added a `lastName` field to state and renamed `name` → `firstName` so the payload keys match their labels for whoever wires up the backend. Verified all four fields hold independent values.
- Note for whoever wires up submission: `phone` and `company` exist in form state but have no inputs on the page. Either add the fields or drop the keys.
- Home page still claims **"24/7 Availability"** in the stats bar and **"Surveillance available 24/7"** on the Surveillance page, while the client is removing all 24-hour messaging from the CTA.
- `src/App.css` is leftover Vite scaffolding (`#root { max-width: 1280px; padding: 2rem; text-align: center }`) — not imported anywhere, safe to delete.
