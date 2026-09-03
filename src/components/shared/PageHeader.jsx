import React from "react";
import { motion } from "framer-motion";

export default function PageHeader({ title, description, image }) {
  return (
    <section className="relative h-[400px] flex items-center overflow-hidden bg-slate-800">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={
            image ||
            "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1920&q=80"
          }
          alt={title}
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-start gap-6"
        >
          <div className="w-1 h-32 bg-red-600" />
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase mb-4">
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
