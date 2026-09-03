import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import PageHeader from "@/components/shared/PageHeader";
import {
  Shield,
  Award,
  Users,
  MapPin,
  CheckCircle2,
  Phone,
  Mail,
  ArrowRight,
  Building2,
} from "lucide-react";
import sunrise from "@/assets/sunrise-over-globe.png";

const values = [
  {
    icon: Shield,
    title: "Confidentiality",
    description:
      "Your cases and client information remain strictly confidential. We maintain the highest standards of discretion in all our operations.",
    color: "blue",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We deliver accurate, thorough, and timely results on every case. Our commitment to quality is unwavering.",
    color: "red",
  },
  {
    icon: Users,
    title: "Service",
    description:
      "Unparalleled personal service and reliability. We treat every client relationship as a long-term partnership.",
    color: "blue",
  },
];

const highlights = [
  "30 + Years Exp",
  "Bilingual Available",
  "Exceptional Service",
  "Reliable Results",
];

const team = [
  {
    role: "Licensed Private Investigators",
    detail:
      "Field investigation, surveillance, and witness development across Georgia and its neighboring states.",
    image:
      "https://images.unsplash.com/photo-1616805765352-beedbad46b2a?w=800&q=80",
    // Wider-framed than the middle portrait; scale up so subjects read at a
    // similar size across the row.
    imgClassName: "scale-[1.3]",
  },
  {
    role: "Certified Process Servers",
    detail:
      "Documented, GPS-verified service of legal process with court-ready affidavits.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
  },
  {
    role: "Bilingual Investigators",
    detail:
      "Spanish-language communication and translation support for interviews and statements.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    imgClassName: "scale-[1.3]",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="About Us"
        description="A professional private investigations firm licensed and insured in the state of Georgia. Our team consists of male and female licensed investigators and certified process servers from diverse backgrounds, including Bilingual Investigators to support communication in Spanish and translation needs."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
      />

      {/* Highlights */}
      <section className="py-6 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-lg md:text-xl font-bold text-white uppercase tracking-wide">
                  {highlight}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-slate-100 text-red-600 text-xs font-semibold mb-4 uppercase tracking-wider">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 uppercase">
                "A New Era In Investigative Services"
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  Millennium Investigations, Inc. is a professional private
                  investigations firm licensed and insured in the State of
                  Georgia. Our corporate office is located in the Metro Atlanta
                  area, providing us with convenient access to neighboring
                  Alabama, Tennessee, North Carolina, Florida, and South
                  Carolina. We provide thorough investigative services, trustworthy information services, and process service assignments ranging from routine to highly challenging for legal and insurance
                  professionals throughout Georgia and across these neighboring
                  states.
                </p>
                <p>
                  As Professional Investigation Consultants, our clients have
                  come to expect unparalleled personal service and reliability.
                  It is this commitment that sets us apart from the competition and keeps
                  clients returning to us year after year.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-red-600/20 rounded-3xl blur-2xl" />
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={sunrise}
                  alt="Professional office"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-slate-200 text-sm font-medium mb-4">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Licensed Investigators & Certified Process Servers
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Every case is handled by licensed, insured professionals from
              diverse backgrounds, with decades of combined experience in legal
              investigations, law enforcement, and insurance claims.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800 rounded-2xl overflow-hidden"
              >
                <div className="aspect-[4/5] overflow-hidden bg-slate-800">
                  <img
                    src={member.image}
                    alt={member.role}
                    className={`w-full h-full object-cover ${member.imgClassName || ""}`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {member.role}
                  </h3>
                  <p className="text-sm text-slate-400">{member.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-red-50 text-red-700 text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our core values guide everything we do and define how we serve our
              clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div
                  className={`p-4 rounded-xl w-fit mb-6 ${value.color === "blue" ? "bg-blue-100" : "bg-red-100"
                    }`}
                >
                  <value.icon
                    className={`w-7 h-7 ${value.color === "blue" ? "text-blue-600" : "text-red-600"
                      }`}
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="bg-slate-900 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Coverage Areas
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-blue-600">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Georgia</h4>
                      <p className="text-slate-400">
                        Statewide coverage with Metro Atlanta headquarters.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-red-700">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        Alabama, Florida, North Carolina, South Carolina,
                        Tennessee
                      </h4>
                      <p className="text-slate-400">
                        Specialized coverage for our neighboring states.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-700">
                  <h4 className="font-semibold text-white mb-4">
                    Contact Information
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-slate-300">
                      <Building2 className="w-5 h-5" />
                      <span>P.O. Box 5787, Douglasville, GA 30154-0014</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <Phone className="w-5 h-5" />
                      <a href="tel:+17704897017">(770) 489-7017</a>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <Mail className="w-5 h-5" />
                      <a href="mailto:info@millenniuminv.com">INFO@MILLENNIUMINV.COM</a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-4">
                Service Area
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Serving Georgia & Neighboring States
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                With our headquarters in Metro Atlanta, we provide comprehensive
                coverage throughout Georgia and specialized coverage in
                neighboring states.
              </p>
              <Link
                to={createPageUrl("Contact")}
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-700 hover:bg-red-500 text-white font-semibold rounded-xl transition-colors"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Contact us today for a free consultation and discover how Millennium
            Investigations can support your legal and insurance needs.
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
