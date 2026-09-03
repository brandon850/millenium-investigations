import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import PageHeader from "@/components/shared/PageHeader";
import {
  Eye,
  Video,
  FileText,
  Shield,
  Clock,
  ArrowRight,
  CheckCircle2,
  Camera,
  Lock,
} from "lucide-react";

const otherServices = [
  { name: "Information Services", link: "InformationServices" },
  { name: "Process Service", link: "ProcessService" },
  { name: "Field Investigation", link: "FieldInvestigation" },
];

const features = [
  {
    icon: Video,
    title: "Video Documentation",
    description:
      "High-quality video evidence captured using professional-grade equipment for court admissibility.",
  },
  {
    icon: Camera,
    title: "Photographic Evidence",
    description:
      "Clear, timestamped photographs that document activities and corroborate findings.",
  },
  {
    icon: FileText,
    title: "Detailed Reporting",
    description:
      "Comprehensive detailed timeline of all observations regarding the subject.",
  },
  {
    icon: Shield,
    title: "Discreet Operations",
    description:
      "Our experienced investigators make every effort to maintain complete discretion throughout all operations. Before beginning field work, we conduct thorough pre-surveillance to map out entry and departure routes, identify discreet stationary surveillance positions, and spot any potential areas of concern. Once in the field, our team performs on-site reconnaissance to gather vital details that are not readily identified during in-house planning.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "Surveillance available 24/7 to capture activity whenever it occurs.",
  },
  {
    icon: Lock,
    title: "Secure Delivery",
    description:
      "Final Reports and Video Documentation are delivered via secure, private transfer portal.",
  },
];

const useCases = [
  {
    title: "Workers' Compensation",
    description:
      "Document claimant activities to verify or dispute disability claims.",
    icon: "🏥",
  },
  {
    title: "Insurance Fraud",
    description: "Investigate suspicious claims and document inconsistencies.",
    icon: "📋",
  },
  {
    title: "Personal Injury",
    description:
      "Verify the extent of plaintiff injuries and daily activities.",
    icon: "⚖️",
  },
  {
    title: "Liability Cases",
    description: "Gather evidence for premises liability and negligence cases.",
    icon: "🏢",
  },
];

export default function Surveillance() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Surveillance"
        description="Discreet, professional tracking and monitoring of targets with clear video documentation accompanied by an easy-to-read but comprehensive report of all findings."
        image="https://images.unsplash.com/photo-1574607383476-f517f260d30b?w=1920&q=80"
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
                Surveillance
              </h2>
              <p className="text-slate-600 mb-4">
                Discreet, professional surveillance operations procuring
                valuable video documentation and clear detailed reporting for
                court-admissible evidence you can rely on.
              </p>
              <p className="text-slate-600 mb-8">
                Our surveillance operations are conducted by licensed,
                experienced investigators using state-of-the-art equipment to
                capture clear,
                court-admissible evidence for workers' compensation, insurance
                fraud, and personal injury cases.
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

      {/* Use Cases */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Common Applications
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our surveillance services support a wide range of legal and
              insurance matters.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 text-center"
              >
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {useCase.title}
                </h3>
                <p className="text-sm text-slate-600">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Document */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                What We Document
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Our investigators are trained to capture all relevant activities
                and details that may impact your case.
              </p>
              <div className="space-y-4">
                {[
                  "Physical activities and mobility",
                  "Daily routines and schedules",
                  "Employment activities",
                  "Social interactions",
                  "Vehicle usage and travel patterns",
                  "Property conditions",
                  "Timeline verification",
                ].map((item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-slate-600/20 rounded-3xl blur-2xl" />
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80"
                  alt="Professional surveillance"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-semibold text-lg">
                    Detailed Evidence Collection
                  </p>
                  <p className="text-slate-300 text-sm">
                    Court-admissible documentation
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Surveillance Services?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Contact us for a confidential consultation about your surveillance
            needs.
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
