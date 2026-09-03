import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Search, FileText, Eye, MapPin, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Information Services",
    description:
      "Comprehensive skip traces, background checks, asset searches, and database investigations to support your legal proceedings.",
    features: [
      "Skip Trace & Locate",
      "Asset Searches",
      "Background Checks",
      "Criminal & Civil Records",
    ],
    link: "InformationServices",
    color: "blue",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80",
  },
  {
    icon: FileText,
    title: "Process Service",
    description:
      "Reliable, documented service of legal documents with detailed affidavits and GPS-verified proof of service.",
    features: [
      "Same-Day Service Available",
      "GPS Verification",
      "Court-Ready Affidavits",
      "Skip Service",
    ],
    link: "ProcessService",
    color: "red",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
  },
  {
    icon: Eye,
    title: "Surveillance",
    description:
      "Discreet, professional surveillance operations with comprehensive video documentation and detailed reporting.",
    features: [
      "Video Documentation",
      "Activity Monitoring",
      "Workers' Comp Cases",
      "Insurance Claims",
    ],
    link: "Surveillance",
    color: "blue",
    image:
      "https://images.unsplash.com/photo-1516283182395-4b90237bff2e?w=800&q=80",
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
    ],
    link: "FieldInvestigation",
    color: "red",
    image:
      "https://images.unsplash.com/photo-1758691737278-3af15b37af48?w=800&q=80",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={createPageUrl(service.link)}
                className="group flex flex-col h-full bg-white border-2 border-brand-navy hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                </div>

                <div className="flex flex-col flex-1 p-8">
                  <div
                    className={`p-4 w-fit mb-6 ${service.color === "blue" ? "bg-blue-100" : "bg-red-100"
                      }`}
                  >
                    <service.icon
                      className={`w-8 h-8 ${service.color === "blue" ? "text-blue-600" : "text-red-600"
                        }`}
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 mb-6">{service.description}</p>

                  <div className="mt-auto inline-flex items-center gap-2 text-red-700 font-semibold uppercase text-sm group-hover:gap-3 transition-all">
                    Explore
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
