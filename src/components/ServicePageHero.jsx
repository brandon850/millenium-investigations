import React from "react";
import { motion } from "framer-motion";

export default function ServicePageHero({ title, description }) {
  return (
    <section className="relative py-32 bg-slate-800 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1920&q=80"
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-start gap-6"
        >
          <div className="w-1 h-32 bg-amber-500 shrink-0" />
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 uppercase">
              {title}
            </h1>
            {description && (
              <p className="text-lg text-slate-300 max-w-2xl">{description}</p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
