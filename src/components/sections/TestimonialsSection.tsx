"use client";

import { motion, type Variants } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { testimonials } from "@/data/testimonials";

const stats = [
  { value: "500+", label: "Patients Treated" },
  { value: "5.0", label: "Google Rating" },
  { value: "85%", label: "Report Improvement" },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function Stars({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-1 text-[#FFC94D] ${className}`}>
      {[0, 1, 2, 3, 4].map((s) => (
        <svg key={s} viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gradient-to-b from-[#F4F7FA] to-white py-14 sm:py-20 lg:py-24"
    >
      {/* background motion graphics */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#3EC2D1]/10 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#0C5D98]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <SectionLabel>Patient Stories</SectionLabel>
          <h2 className="mt-4 text-3xl font-bold text-[#07407D] sm:text-4xl">
            Real Patients. Real Results.
          </h2>
          <div className="mt-4 flex items-center gap-2">
            <Stars />
            <span className="text-sm font-semibold text-[#292C51]">
              5.0 on Google
            </span>
          </div>
        </div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col rounded-3xl border border-[#3EC2D1]/15 bg-white p-8 shadow-[0_12px_34px_-20px_rgba(7,64,125,0.45)] transition-shadow hover:shadow-[0_24px_50px_-22px_rgba(62,194,209,0.55)]"
            >
              {/* big quote mark */}
              <span className="pointer-events-none absolute right-6 top-4 font-serif text-7xl leading-none text-[#3EC2D1]/15 transition-colors group-hover:text-[#3EC2D1]/25">
                &rdquo;
              </span>

              <Stars />
              <p className="relative mt-5 flex-1 text-[15px] leading-relaxed text-gray-700">
                {t.text}
              </p>

              <div className="mt-7 flex items-center gap-3 border-t border-gray-100 pt-5">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${t.accent} font-semibold text-white shadow-md`}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-[#292C51]">{t.name}</p>
                  <p className="text-xs text-gray-500">
                    Verified Patient · {t.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 overflow-hidden rounded-3xl bg-gradient-to-r from-[#07407D] to-[#0C5D98] p-8 shadow-xl"
        >
          <div className="grid items-center gap-8 sm:grid-cols-3">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center ${
                  i < stats.length - 1 ? "sm:border-r sm:border-white/15" : ""
                }`}
              >
                <p className="text-4xl font-extrabold text-[#3EC2D1] sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-medium text-white/80">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Google badge row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-600">
          <span
            aria-hidden
            className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-base font-bold shadow ring-1 ring-gray-200"
          >
            <span className="bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853] bg-clip-text text-transparent">
              G
            </span>
          </span>
          <span className="font-semibold text-[#292C51]">5.0 Stars</span>
          <span className="text-gray-400">|</span>
          <span>Based on Google Reviews</span>
          <span className="text-gray-400">|</span>
          <span>Canton, MI</span>
        </div>
      </div>
    </section>
  );
}
