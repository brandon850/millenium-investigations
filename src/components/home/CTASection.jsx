import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1920&q=80"
          alt="Background"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 italic">
            "A New Era In Investigative Services"
          </h2>
          <p className="text-xl text-slate-100 max-w-3xl mx-auto mb-10">
            Contact us today for a free consultation. We will evaluate your
            situation, define goals, strategize and provide an estimate of what
            it will take to obtain the information you seek.
          </p>

          <Link
            to={createPageUrl("Contact")}
            className="inline-flex items-center gap-3 px-10 py-4 bg-red-700 hover:bg-red-500 text-white font-bold rounded-md transition-all duration-300 uppercase tracking-wide text-sm"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>

          <div className="mt-12 flex flex-wrap justify-center items-center gap-x-10 gap-y-6 text-white">
            <a
              href="tel:7704897017"
              className="flex items-center gap-3 text-xl md:text-2xl font-bold hover:text-red-400 transition-colors"
            >
              <Phone className="w-7 h-7 text-red-500" />
              (770) 489-7017
            </a>
            <div className="hidden sm:block w-px h-8 bg-slate-600" />
            <a
              href="mailto:INFO@MILLENNIUMINV.COM"
              className="flex items-center gap-3 text-lg md:text-2xl font-bold break-all hover:text-red-400 transition-colors"
            >
              <Mail className="w-7 h-7 text-red-500 shrink-0" />
              INFO@MILLENNIUMINV.COM
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
