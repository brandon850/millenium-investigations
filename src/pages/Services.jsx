import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import {
  Search,
  FileText,
  Eye,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Information Services",
    description:
      "Comprehensive skip traces, background checks, asset searches, and database investigations to support your legal proceedings.",
    features: [
      "Skip Trace & Locate Services",
      "Background Investigations",
      "Asset & Financial Searches",
      "Criminal & Civil Records",
      "Personal Information Development",
      "Vehicle & Employment Searches",
    ],
    link: "InformationServices",
    color: "blue",
  },
  {
    icon: FileText,
    title: "Process Service",
    description:
      "Reliable, documented service of legal documents with GPS verification and court-ready affidavits.",
    features: [
      "Same-Day Service Available",
      "GPS-Verified Service",
      "Court-Ready Affidavits",
      "Skip Trace Service",
      "Detailed Documentation",
      "Prompt Status Updates",
    ],
    link: "ProcessService",
    color: "red",
  },
  {
    icon: Eye,
    title: "Surveillance",
    description:
      "Discreet and professional. Our surveillance operations include comprehensive video documentation and detailed reporting.",
    features: [
      "Video Documentation",
      "Activity Monitoring",
      "Workers' Comp Cases",
      "Insurance Fraud Investigation",
      "Personal Injury Cases",
      "24/7 Availability",
    ],
    link: "Surveillance",
    color: "blue",
  },
  {
    icon: MapPin,
    title: "Field Investigation",
    description:
      "On-the-ground investigative services including witness development and interviews, scene documentation, and evidence gathering.",
    features: [
      "Witness Development & Interviews",
      "Scene Investigation",
      "Statement Taking",
      "Evidence Gathering",
      "Neighborhood Canvassing",
      "Record Retrieval",
    ],
    link: "FieldInvestigation",
    color: "red",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive investigation services designed specifically for
              attorneys and insurance professionals. Every service backed by 3
              decades of experience and a commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <div
                    className={`inline-flex p-4 rounded-xl mb-6 ${service.color === "blue" ? "bg-blue-100" : "bg-red-100"
                      }`}
                  >
                    <service.icon
                      className={`w-8 h-8 ${service.color === "blue"
                          ? "text-blue-600"
                          : "text-red-600"
                        }`}
                    />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-slate-600 mb-8">
                    {service.description}
                  </p>
                  <Link
                    to={createPageUrl(service.link)}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-colors ${service.color === "blue"
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-red-600 hover:bg-red-700 text-white"
                      }`}
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                <div className="bg-slate-50 rounded-2xl p-8">
                  <h3 className="font-semibold text-slate-900 mb-6">
                    Key Services Include:
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2
                          className={`w-5 h-5 mt-0.5 shrink-0 ${service.color === "blue"
                              ? "text-blue-600"
                              : "text-red-600"
                            }`}
                        />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Contact us for a free consultation and estimate on any of our
            services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={createPageUrl("Contact")}
              className="px-8 py-4 bg-red-700 hover:bg-red-500 text-white font-semibold rounded-xl transition-colors"
            >
              Request Consultation
            </Link>
            <a
              href="tel:7704897017"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-colors"
            >
              Call (770) 489-7017
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
