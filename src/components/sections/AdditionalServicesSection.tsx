"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

type Service = {
  title: string;
  body: string;
  image: string;
  alt: string;
  icon: ReactNode;
  tag: string;
  tagClass: string;
  highlights: string[];
};

const services: Service[] = [
  {
    title: "Peptide Therapy for Joint Recovery",
    body: "Peptides are short chains of amino acids that signal your body to accelerate tissue repair, reduce inflammation, and support overall joint health. Used alongside PRP or stem cell therapy, they can enhance and extend your results.",
    image: "/images/peptide-therapy.png",
    alt: "Peptide therapy for joint recovery",
    icon: (
      <path d="M8.5 2c0 3 2 4.5 3.5 6s3.5 3 3.5 6-2 4-2 4M15.5 2c0 3-2 4.5-3.5 6s-3.5 3-3.5 6 2 4 2 4M7 7h10M7 17h10M8 4.5h8M8 19.5h8" />
    ),
    tag: "Supporting Treatment",
    tagClass: "bg-[#3EC2D1] text-[#07407D]",
    highlights: [
      "Accelerates tissue repair",
      "Reduces inflammation",
      "Enhances PRP & stem cell results",
    ],
  },
  {
    title: "Cold Laser Therapy",
    body: "We use the Erchonia PL5000 cold laser, an FDA-cleared device that uses low-level light energy to reduce pain and inflammation at the cellular level. It's gentle, non-invasive, and included FREE with your $49 consultation.",
    image: "/images/erchonia-laser.png",
    alt: "Erchonia PL5000 cold laser therapy device",
    icon: <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />,
    tag: "FREE with Consultation",
    tagClass: "bg-[#2DA44E] text-white",
    highlights: [
      "FDA-cleared technology",
      "Gentle & non-invasive",
      "Included free with your visit",
    ],
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const fromLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const fromRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AdditionalServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-[#07407D] via-[#0a2d5c] to-[#082244] py-14 text-white sm:py-20 lg:py-28"
    >
      {/* background motion graphics */}
      <div className="pointer-events-none absolute inset-0">
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
          className="absolute -left-28 top-16 h-80 w-80 rounded-full border border-[#3EC2D1]/10"
        />
        <motion.span
          animate={{ rotate: -360 }}
          transition={{ duration: 65, repeat: Infinity, ease: "linear" }}
          className="absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full border border-white/5"
        />
        <div className="absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-[#3EC2D1]/10 blur-3xl" />
        <div className="absolute -left-10 bottom-10 h-64 w-64 rounded-full bg-[#0C5D98]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center">
            <SectionLabel>Additional Treatments Available</SectionLabel>
          </div>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            A Complete Approach to Joint Health
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-white/70">
            Alongside our core PRP and stem cell protocols, we offer supporting
            therapies that complement your healing journey.
          </p>
        </div>

        {/* Alternating feature rows */}
        <div className="mt-14 space-y-16 lg:mt-20 lg:space-y-20">
          {services.map((s, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={s.title}
                className="grid items-center gap-10 lg:grid-cols-2"
              >
                {/* IMAGE */}
                <motion.div
                  variants={reversed ? fromRight : fromLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className={`relative ${reversed ? "lg:order-2" : ""}`}
                >
                  {/* glow + rotating ring */}
                  <motion.span
                    aria-hidden
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#3EC2D1]/25"
                  />
                  <div className="relative mx-auto flex aspect-square max-w-md items-center justify-center overflow-hidden rounded-[2rem] bg-gradient-to-br from-white to-[#EAF6F8] shadow-2xl">
                    {/* pulsing rings behind device */}
                    <motion.span
                      aria-hidden
                      animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.15, 0.5] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute h-56 w-56 rounded-full border border-[#3EC2D1]/30"
                    />
                    <motion.img
                      src={s.image}
                      alt={s.alt}
                      animate={{ y: [0, -10, 0] }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative h-[78%] w-auto object-contain drop-shadow-xl"
                    />
                    {/* tag chip */}
                    <span
                      className={`absolute right-5 top-5 rounded-full px-4 py-1.5 text-xs font-bold shadow-md ${s.tagClass}`}
                    >
                      {s.tag}
                    </span>
                  </div>
                </motion.div>

                {/* CONTENT */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className={`text-center lg:text-left ${reversed ? "lg:order-1" : ""}`}
                >
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3EC2D1] to-[#0C5D98] text-white shadow-lg">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-7 w-7"
                    >
                      {s.icon}
                    </svg>
                  </span>

                  <h3 className="mt-5 text-2xl font-bold sm:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-white/75">
                    {s.body}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {s.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-3 text-white/90"
                      >
                        <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#3EC2D1]/20 text-[#3EC2D1]">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3.5 w-3.5"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
