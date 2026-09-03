import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import PageHeader from "@/components/shared/PageHeader";
import {
  MapPin,
  Users,
  FileText,
  Camera,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Search,
  ClipboardList,
} from "lucide-react";

const otherServices = [
  { name: "Information Services", link: "InformationServices" },
  { name: "Process Service", link: "ProcessService" },
  { name: "Surveillance", link: "Surveillance" },
];

const services = [
  {
    icon: Users,
    title: "Witness Development & Interviews",
    description:
      "Professional witness development and interviews with detailed statements and documentation. Our investigators are skilled at obtaining comprehensive, accurate statements.",
  },
  {
    icon: MapPin,
    title: "Scene Investigation",
    description:
      "Thorough investigation of accident scenes, incident locations, and properties. We document conditions and gather physical evidence.",
  },
  {
    icon: MessageSquare,
    title: "Statement Taking",
    description:
      "Recorded and written statements from witnesses, claimants, and other parties. Court-ready documentation for your proceedings.",
  },
  {
    icon: Camera,
    title: "Evidence Gathering",
    description:
      "Collection and documentation of physical evidence, photographs, and materials relevant to your case.",
  },
  {
    icon: ClipboardList,
    title: "Canvassing",
    description:
      "Systematic neighborhood and area canvassing to identify witnesses and gather information about incidents.",
  },
  {
    icon: Search,
    title: "Record Retrieval",
    description:
      "On-line and On-site retrieval of records, documents, and materials from courthouses, agencies, and other sources.",
  },
];

const applications = [
  "Personal Injury Claims",
  "Insurance Claims Investigation",
  "Liability Cases",
  "Workers' Compensation",
  "Vehicle Accidents",
  "Premises Liability",
  "Product Liability",
  "Employment Disputes",
];

export default function FieldInvestigation() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Field Investigation"
        description="Professional field investigation services including witness development and interviews, scene documentation, and evidence gathering."
        image="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&q=80"
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
                Field Investigation
              </h2>
              <p className="text-slate-600 mb-4">
                Professional field investigation services including witness
                development and interviews, scene documentation, statement
                taking, and evidence gathering. Your eyes and ears in the field.
              </p>
              <p className="text-slate-600 mb-8">
                Our experienced field investigators provide comprehensive
                on-site services to support your legal proceedings, from
                interviewing witnesses to documenting accident scenes and
                gathering physical evidence.
              </p>

              <div className="space-y-6">
                {services.map((service) => (
                  <div key={service.title} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">
                        {service.title}
                      </h3>
                      <p className="text-slate-600">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Case Applications
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Our field investigation services support a wide range of legal
                and insurance matters.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {applications.map((app, index) => (
                  <div key={app} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                    <span className="text-slate-700">{app}</span>
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
                Our Process
              </h3>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Case Review",
                    desc: "We review your case details and investigation requirements",
                  },
                  {
                    step: "2",
                    title: "Investigation Plan",
                    desc: "Develop a tailored investigation strategy",
                  },
                  {
                    step: "3",
                    title: "Field Work",
                    desc: "Execute on-site investigations and interviews",
                  },
                  {
                    step: "4",
                    title: "Documentation",
                    desc: "Compile comprehensive reports and evidence",
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Need Field Investigation?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={createPageUrl("Contact")}
              className="px-8 py-4 bg-red-700 hover:bg-red-500 text-white font-semibold rounded-xl transition-colors"
            >
              Request Investigation
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
