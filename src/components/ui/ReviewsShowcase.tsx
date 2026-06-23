"use client";

import { motion, type Variants } from "framer-motion";
import { testimonials } from "@/data/testimonials";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function Stars({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-0.5 text-[#FFC94D] ${className}`}>
      {[0, 1, 2, 3, 4].map((s) => (
        <svg key={s} viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z" />
        </svg>
      ))}
    </div>
  );
}

type ReviewsShowcaseProps = {
  variant?: "light" | "dark";
  heading?: string;
  subheading?: string;
};

export default function ReviewsShowcase({
  variant = "light",
  heading = "Trusted by Patients Across Metro Detroit",
  subheading = "Real stories from people who found relief.",
}: ReviewsShowcaseProps) {
  const isDark = variant === "dark";

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center gap-2">
          <Stars />
          <span
            className={`text-sm font-semibold ${
              isDark ? "text-white" : "text-[#292C51]"
            }`}
          >
            5.0 on Google
          </span>
        </div>
        <h2
          className={`mt-3 text-2xl font-bold sm:text-3xl ${
            isDark ? "text-white" : "text-[#07407D]"
          }`}
        >
          {heading}
        </h2>
        <p
          className={`mt-2 max-w-xl text-sm ${
            isDark ? "text-white/70" : "text-gray-600"
          }`}
        >
          {subheading}
        </p>
      </div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-10 grid gap-5 md:grid-cols-3"
      >
        {testimonials.map((t) => (
          <motion.div
            key={t.name}
            variants={fadeInUp}
            whileHover={{ y: -6 }}
            className={`group relative flex flex-col rounded-2xl border p-6 transition-shadow ${
              isDark
                ? "border-white/15 bg-white/10 backdrop-blur-md hover:shadow-[0_22px_45px_-22px_rgba(62,194,209,0.6)]"
                : "border-[#3EC2D1]/15 bg-white shadow-[0_12px_30px_-20px_rgba(7,64,125,0.45)] hover:shadow-[0_22px_45px_-22px_rgba(62,194,209,0.55)]"
            }`}
          >
            <span
              className={`pointer-events-none absolute right-5 top-3 font-serif text-6xl leading-none ${
                isDark ? "text-white/15" : "text-[#3EC2D1]/15"
              }`}
            >
              &rdquo;
            </span>
            <Stars />
            <p
              className={`relative mt-4 flex-1 text-sm leading-relaxed ${
                isDark ? "text-white/80" : "text-gray-700"
              }`}
            >
              {t.text}
            </p>
            <div
              className={`mt-6 flex items-center gap-3 border-t pt-4 ${
                isDark ? "border-white/10" : "border-gray-100"
              }`}
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${t.accent} font-semibold text-white shadow-md`}
              >
                {t.name.charAt(0)}
              </div>
              <div>
                <p
                  className={`text-sm font-bold ${
                    isDark ? "text-white" : "text-[#292C51]"
                  }`}
                >
                  {t.name}
                </p>
                <p
                  className={`text-xs ${
                    isDark ? "text-white/50" : "text-gray-500"
                  }`}
                >
                  Verified Patient · {t.location}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
