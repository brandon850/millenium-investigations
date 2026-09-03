import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import PageHeader from "@/components/shared/PageHeader";
import {
  Search,
  MapPin,
  Phone,
  Mail,
  User,
  Shield,
  Building2,
  Car,
  Briefcase,
  Heart,
  DollarSign,
  Home,
  FileSearch,
  Globe,
  Database,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const otherServices = [
  { name: "Process Service", link: "ProcessService" },
  { name: "Surveillance", link: "Surveillance" },
  { name: "Field Investigation", link: "FieldInvestigation" },
];

const serviceCategories = [
  {
    title: "Skip Trace Services",
    icon: MapPin,
    description:
      "Locate individuals who have become difficult to find. Our comprehensive skip trace services achieve a 95% success rate.",
    services: [
      {
        name: "Address Verification Search",
        description:
          "Provides subjects last reported address using 3 separate proprietary databases. (If known information is scarce and little to go on this would become a Full Skip Trace / Locate)",
      },
      {
        name: "Full Locate / Skip Trace",
        description: "Comprehensive search to find an individual",
      },
      {
        name: "Extended Skip Trace",
        description: "In-depth investigation for hard-to-find subjects",
      },
      {
        name: "Contact Info Development",
        description:
          "Develop phone numbers, emails, addresses and social media links for subject and closest relative.",
      },
    ],
  },
  {
    title: "Phone & Email Services",
    icon: Phone,
    description:
      "Identify the owners of phone numbers and email addresses or develop contact information for individuals.",
    services: [
      {
        name: "Reverse Cell and Landline",
        description: "Identify owner of phone numbers",
      },
      {
        name: "Reverse VoIP Phone Number",
        description: "Trace VoIP numbers to their owners",
      },
      {
        name: "Develop Phone Number",
        description: "Find phone numbers for individuals",
      },
      {
        name: "Reverse Email",
        description: "Identify the person behind an email address",
      },
      {
        name: "Email Locate",
        description: "Find email addresses for individuals",
      },
    ],
  },
  {
    title: "Personal Information",
    icon: User,
    description:
      "Comprehensive personal information searches including identity verification and record searches.",
    services: [
      {
        name: "Personal Information Development",
        description: "Compile comprehensive personal profiles",
      },
      {
        name: "DOB Verification",
        description: "Verify date of birth information",
      },
      {
        name: "SSN / FEIN (With Permissible Purpose)",
        description: "Social security and tax ID verification",
      },
      {
        name: "Death Verification",
        description: "Confirm death records and dates",
      },
    ],
  },
  {
    title: "Criminal & Civil Records",
    icon: Shield,
    description:
      "Thorough searches of criminal and civil court records at state and federal levels.",
    services: [
      {
        name: "Criminal Search",
        description: "Comprehensive criminal record searches",
      },
      { name: "Civil Search", description: "Civil court record searches" },
    ],
  },
  {
    title: "Asset & Financial Searches",
    icon: DollarSign,
    description:
      "Identify assets, liabilities, and financial holdings for litigation support.",
    services: [
      {
        name: "Asset & Liability",
        description: "Comprehensive asset and debt analysis",
      },
      {
        name: "Statewide Real Property Search",
        description: "Property ownership within a state",
      },
      {
        name: "Nationwide Real Property Search",
        description: "Property ownership across the US",
      },
      {
        name: "Pre-Litigation Asset Search",
        description: "Asset analysis before filing suit",
      },
      {
        name: "Asset Search (Various Levels)",
        description: "Customized asset searches - call for pricing",
      },
      {
        name: "Statewide Bank Search",
        description: "Identify bank accounts within a state",
      },
      {
        name: "Nationwide Bank Search",
        description: "Identify bank accounts nationwide",
      },
      {
        name: "Brokerage House and Securities",
        description: "Investment and stock account searches",
      },
    ],
  },
  {
    title: "Vehicle & Employment",
    icon: Car,
    description:
      "Locate vehicles, verify employment, and identify insurance carriers.",
    services: [
      {
        name: "Vehicle Registration",
        description: "Identify vehicle ownership",
      },
      {
        name: "Insurance Carrier Search",
        description: "Identify insurance providers",
      },
      { name: "Place of Employment", description: "Verify current employment" },
    ],
  },
  {
    title: "Background Investigations",
    icon: FileSearch,
    description:
      "In-depth background checks for litigation support and due diligence.",
    services: [
      {
        name: "Social Media Search",
        description: "Comprehensive social media analysis",
      },
      {
        name: "Comprehensive Background (Basic)",
        description: "Standard background investigation",
      },
      {
        name: "Comprehensive Background (Extended)",
        description: "Thorough background investigation",
      },
    ],
  },
];

export default function InformationServices() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Information Services"
        description="Comprehensive skip traces, background investigations, asset searches, and database research to support your legal proceedings."
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
      />

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[300px_1fr] gap-12">
            {/* Sidebar - Other Services */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 uppercase">
                Other Services
              </h3>
              <div className="space-y-3">
                {otherServices.map((service) => (
                  <Link
                    key={service.name}
                    to={createPageUrl(service.link)}
                    className="flex items-center justify-between px-6 py-4 bg-red-700 hover:bg-red-500 text-white font-bold uppercase text-sm transition-colors group"
                  >
                    {service.name}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div>
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 uppercase">
                  Information Services
                </h2>
                <p className="text-slate-600 mb-4">
                  Comprehensive skip traces, background investigations, asset
                  searches, and database research to support your legal
                  proceedings. Our information services achieve a 95% success
                  rate with most results delivered within 3 to 7 business days.
                  Rush services are available upon request as well as Extended
                  Skip Trace for elusive subjects.
                </p>
                <p className="text-slate-600">
                  We provide detailed, accurate intelligence that strengthens
                  your cases and supports your decision-making process. Our
                  experienced investigators use proprietary databases and proven
                  techniques to locate individuals, verify information, and
                  uncover assets.
                </p>
              </div>

              <div className="space-y-8">
                {serviceCategories.map((category, categoryIndex) => (
                  <div key={category.title}>
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle2 className="w-6 h-6 text-blue-600" />
                      <h3 className="text-xl font-bold text-slate-900">
                        {category.title}
                      </h3>
                    </div>
                    <ul className="space-y-2 ml-9">
                      {category.services.map((service) => (
                        <li key={service.name} className="text-slate-600">
                          <span className="font-medium text-slate-900">
                            {service.name}:
                          </span>{" "}
                          {service.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1920&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 bg-white/10 text-slate-300 text-xs font-semibold mb-4 uppercase tracking-wider">
            Get Started Today
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Information Fast?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Contact us for a free consultation and estimate. Expedited Services
            for Rush or at Statute Cases are completed within 24-72 hours.
          </p>
          <Link
            to={createPageUrl("Contact")}
            className="inline-flex items-center gap-3 px-10 py-4 bg-red-700 hover:bg-red-500 text-white font-bold rounded-md transition-all duration-300 uppercase tracking-wide text-sm"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
