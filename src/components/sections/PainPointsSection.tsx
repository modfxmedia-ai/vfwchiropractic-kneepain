"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

const painPoints = [
  "Your knee or joint pain has been getting worse for months, and nothing seems to help",
  "You've tried cortisone shots, physical therapy, or pain medication, but the relief never lasts",
  "A surgeon mentioned 'knee replacement' and you're not ready to go that route",
  "You've had X-rays or MRIs that 'showed something' but no doctor sat down and explained what it means for YOU",
  "You've started changing your life around the pain, avoiding walks, stairs, activities you used to love",
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const cardItem: Variants = {
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function PainPointsSection() {
  return (
    <section className="relative overflow-hidden bg-[#F4F7FA] py-14 sm:py-20 lg:py-24">
      {/* background accents */}
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#3EC2D1]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#07407D]/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-2">
        {/* LEFT COLUMN */}
        <div className="text-center lg:text-left">
          <div className="flex justify-center lg:justify-start">
            <SectionLabel>Sound Familiar?</SectionLabel>
          </div>
          <h2 className="mt-4 text-[1.8rem] font-bold leading-tight text-[#07407D] sm:text-[2.25rem] lg:text-[2.6rem]">
            Does Any of This Sound Like You?
          </h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 space-y-3"
          >
            {painPoints.map((point) => (
              <motion.div
                key={point}
                variants={cardItem}
                whileHover={{ x: 6 }}
                className="group flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-4 text-left shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500 transition-colors group-hover:bg-red-500 group-hover:text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </span>
                <p className="text-[15px] leading-relaxed text-[#292C51]">
                  {point}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 flex items-start gap-4 rounded-xl border-l-4 border-[#3EC2D1] bg-white p-5 text-left shadow-sm"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3EC2D1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-0.5 h-6 w-6 flex-shrink-0"
            >
              <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
            <p className="italic text-[#292C51]">
              If even one of these sounds familiar, you are exactly who we built
              this practice for.
            </p>
          </motion.div>
        </div>

        {/* RIGHT COLUMN */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative mt-2 hidden lg:block"
        >
          {/* Decorative offset frame */}
          <div className="absolute -right-4 -top-4 h-full w-full rounded-3xl border-2 border-[#3EC2D1]/30" />

          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            <img
              src="/images/elder-joint-pain.webp"
              alt="Older adult living with chronic joint and knee pain"
              className="h-[520px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07407D]/60 via-transparent to-transparent" />
          </div>

          {/* Floating animated stat chip */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 top-10 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3EC2D1]/15 text-[#0C5D98]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </span>
            <div>
              <p className="text-lg font-extrabold leading-none text-[#07407D]">
                3+
              </p>
              <p className="text-[11px] text-gray-500">treatments tried</p>
            </div>
          </motion.div>

          {/* Bottom callout */}
          <div className="absolute -bottom-6 left-6 right-6 rounded-2xl bg-[#07407D] p-6 text-white shadow-xl">
            <p className="font-bold">
              Most patients have tried 3+ treatments before finding us.
            </p>
            <p className="mt-2 text-sm text-white/80">
              We built this practice for people who haven&apos;t gotten real
              answers, until now.
            </p>
            <Link
              href="/booking"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#3EC2D1] transition-colors hover:text-white"
            >
              See how we&apos;re different
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
