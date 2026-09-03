import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import PageHeader from "@/components/shared/PageHeader";
import {
  FileText,
  MapPin,
  Clock,
  Shield,
  CheckCircle2,
  ArrowRight,
  FileCheck,
  Navigation,
  AlertCircle,
  Eye,
} from "lucide-react";

const otherServices = [
  { name: "Information Services", link: "InformationServices" },
  { name: "Surveillance", link: "Surveillance" },
  { name: "Field Investigation", link: "FieldInvestigation" },
];

const features = [
  {
    icon: Clock,
    title: "Same-Day Service Available",
    description:
      "For urgent matters, we offer same-day and rush service options to meet your deadlines.",
  },
  {
    icon: Navigation,
    title: "GPS Verification",
    description:
      "Every service attempt is GPS-verified and time-stamped for accurate proof of service.",
  },
  {
    icon: FileCheck,
    title: "Court-Ready Affidavits",
    description:
      "Detailed affidavits with all required information for court filing.",
  },
  {
    icon: MapPin,
    title: "Skip Trace Services",
    description:
      "When Subjects are found to no longer live at the provided address our Skip Tracing capabilities are engaged.",
  },
  {
    icon: Eye,
    title: "Limited Surveillance",
    description:
      "When Subjects are evading service or won't answer the door, limited surveillance is implemented.",
  },
  {
    icon: Shield,
    title: "Detailed Documentation",
    description:
      "Comprehensive service records include photos, notes, and attempt histories.",
  },
  {
    icon: AlertCircle,
    title: "Status Updates",
    description:
      "Prompt status updates and immediate notification upon successful service.",
  },
];

const documents = [
  "Summons & Complaints",
  "Subpoenas",
  "Writs",
  "Orders to Show Cause",
  "Divorce Papers",
  "Eviction Notices",
  "Garnishments",
  "Discovery Documents",
  "Motions",
  "Court Orders",
  "Legal Notices",
];

export default function ProcessService() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Process Service"
        description="Professional, documented service of legal documents with GPS verification and court-ready affidavits."
        image="https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=1920&q=80"
      />

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[300px_1fr] gap-12">
            {/* Sidebar */}
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
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 uppercase">
                Process Service
              </h2>
              <p className="text-slate-600 mb-4">
                Legal Service of Process Services performed by Experienced,
                Licensed and Certified Professional Private Investigators and
                Process Servers.
              </p>
              <p className="text-slate-600 mb-4 border-l-4 border-brand-navy bg-slate-50 py-3 px-4">
                *Contact us for a current list of Counties where we are
                Permanently Appointed. In counties where we do not have a
                Permanent Order, a Motion for Appointment of Special Process
                Server should be filed by the Client.
              </p>
              <p className="text-slate-600 mb-8">
                Our experienced process servers handle all types of legal
                documents with professionalism and attention to proper
                procedures. We offer same-day service options and detailed
                documentation for every service attempt.
              </p>

              <div className="space-y-6">
                {features.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents We Serve */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Documents We Serve
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Our experienced process servers handle all types of legal
                documents with professionalism and attention to proper
                procedures.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {documents.map((doc, index) => (
                  <div key={doc} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                    <span className="text-slate-700">{doc}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Our Service Process
              </h3>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Receive Documents",
                    desc: "We receive your documents and service instructions via email or mail. Print first 15 pages at no charge and .50 per page thereafter.",
                  },
                  {
                    step: "2",
                    title: "Locate & Serve",
                    desc: "We run a complimentary basic data search in an effort to confirm the service address, develop a photo and vehicle registration. If there appears to be an issue, we will advise and get permission to run further search. (See Skip Trace Services).",
                  },
                  {
                    step: "3",
                    title: "Document Service",
                    desc: "GPS-verified documentation with photos if applicable",
                  },
                  {
                    step: "4",
                    title: "Return Affidavit",
                    desc: "Court-ready affidavit returned promptly",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Documents Served?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Contact us today for professional process service. Same-day and rush
            service available.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={createPageUrl("Contact")}
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-colors"
            >
              Request Service
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
