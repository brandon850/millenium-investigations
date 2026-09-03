import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Users, Scale, Lock, Zap, FileCheck } from "lucide-react";

const reasons = [
  {
    icon: Scale,
    title: "Legal Industry Focus",
    description:
      "We understand the unique requirements of attorneys and insurance professionals. Our reports are court-ready and our processes legally sound.",
    color: "blue",
  },
  {
    icon: Lock,
    title: "Complete Confidentiality",
    description:
      "Your cases and client information remain strictly confidential. We maintain the highest standards of discretion in all our operations.",
    color: "red",
  },
  {
    icon: Zap,
    title: "Timely Turnaround",
    description:
      "Most information services requests are completed within 3 to 5 business days. Rush Services are available for time-sensitive matters and Extended Locates can be implemented for elusive targets.",
    color: "blue",
  },
  {
    icon: FileCheck,
    title: "Detailed Documentation",
    description:
      "Comprehensive reporting with GPS verification, video evidence, and court-admissible documentation for every case.",
    color: "red",
  },
  {
    icon: Users,
    title: "Experienced Professionals",
    description:
      "Our investigators bring decades of combined experience in legal investigations, law enforcement, and insurance claims.",
    color: "blue",
  },
  {
    icon: CheckCircle2,
    title: "95% Success Rate",
    description:
      "Industry-leading success rate on skip traces and locates. We don't give up until we've exhausted every lead.",
    color: "red",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 uppercase tracking-tight">
              Why Choose Us?
            </h2>

            <h3 className="text-xl font-bold text-brand-navy mb-3 uppercase tracking-wide">
              Experience
            </h3>
            <p className="text-lg text-slate-600 mb-8">
              For nearly three decades Millennium Investigations has been the
              go-to resource for Law Firms and Insurance Professionals across the
              country for Information Services, Special Field investigation,
              Surveillance and Process Service needs in Georgia and its
              neighboring states (AL, SC, FL, NC and TN). Our commitment to
              accuracy, discretion, and timely results has earned us lasting
              partnerships with leading law firms and insurance carriers.
            </p>

            <h3 className="text-xl font-bold text-brand-navy mb-3 uppercase tracking-wide">
              Professionals
            </h3>
            <p className="text-lg text-slate-600 mb-8">
              Our team consists of male and female licensed investigators and
              certified process servers from diverse backgrounds, including
              Bilingual Investigators to support communication in Spanish and
              translation needs.
            </p>

            <div className="mb-8 overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1573496130141-209d200cebd8?w=900&q=80"
                alt="Millennium Investigations licensed investigators"
                className="w-full aspect-[16/10] object-cover"
              />
            </div>

            {/* TODO: PLACEHOLDER TESTIMONIAL — this quote and attribution are
                invented copy, not a real client endorsement. The client is
                sourcing genuine testimonials. Replace or remove before launch. */}
            <div className="p-6 rounded-2xl bg-slate-900 text-white">
              <p className="text-slate-300 mb-4 italic">
                "Our firm has relied on Millennium Investigations for over 15
                years. Their skip trace success rate and attention to detail are
                unmatched."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center">
                  <span className="text-white font-bold">JL</span>
                </div>
                <div>
                  <p className="font-semibold">Attorney Client</p>
                  <p className="text-sm text-slate-400">
                    Metro Atlanta Law Firm
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-6 bg-white border border-brand-navy hover:shadow-lg transition-shadow duration-300"
              >
                <div
                  className={`p-3 w-fit mb-4 ${reason.color === "blue" ? "bg-blue-100" : "bg-red-100"
                    }`}
                >
                  <reason.icon
                    className={`w-6 h-6 ${reason.color === "blue" ? "text-blue-600" : "text-red-600"
                      }`}
                  />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-slate-600">{reason.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
