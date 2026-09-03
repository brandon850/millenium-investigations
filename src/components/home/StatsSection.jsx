import React from "react";
import { motion } from "framer-motion";

const stats = [
  { prefix: "Nearly", number: "3", label: "Decades in Business" },
  { number: "95%", label: "Success Rate" },
  { number: "500+", label: "Satisfied Clients" },
  { number: "24/7", label: "Availability" },
];

export default function StatsSection() {
  return (
    <section className="relative -mt-20 z-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-800 rounded-2xl shadow-2xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-12">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2 leading-none">
                  {/* Rendered on every tile so the numerals share a baseline,
                      whether or not the tile has a prefix. */}
                  <span
                    className={`block text-base md:text-lg font-semibold uppercase tracking-widest text-slate-300 mb-1 ${stat.prefix ? "" : "invisible"
                      }`}
                    aria-hidden={!stat.prefix}
                  >
                    {stat.prefix || " "}
                  </span>
                  {stat.number}
                </div>
                <div className="text-slate-400 uppercase tracking-wide text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
