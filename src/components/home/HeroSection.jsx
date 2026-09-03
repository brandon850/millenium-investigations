import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-slate-900">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <iframe
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.77vh] h-[56.25vw] min-w-full min-h-full border-0"
          src="https://player.vimeo.com/video/1223764169?autoplay=1&muted=1&loop=1&background=1&controls=0&title=0&byline=0&portrait=0&app_id=122963"
          title="Hero background video"
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
          allowFullScreen
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/75 via-slate-900/50 to-slate-900/25" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.65)]"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-white leading-[1.1] mb-4 uppercase tracking-tight">
            Millennium
            <span className="block">Investigations, Inc.</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 italic mb-8">
            "A New Era In Investigative Services"
          </p>

          <p className="text-base md:text-lg font-bold text-white uppercase tracking-widest mb-6">
            Intelligence <span className="text-red-500">&rarr;</span> Evidence{" "}
            <span className="text-red-500">&rarr;</span> Resolution
          </p>

          <p className="text-lg text-slate-200 max-w-2xl mb-10">
            Specialized investigations tailored for law firms and insurance
            professionals in Georgia and its neighboring states (AL, TN, NC, SC,
            FL). Licensed, insured, and dedicated to your success.
          </p>

          <Link
            to={createPageUrl("Contact")}
            className="inline-flex items-center gap-3 px-10 py-4 bg-red-700 hover:bg-red-600 text-white font-bold rounded-md transition-all duration-300 uppercase tracking-wide text-sm shadow-lg"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
