"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

const candidates = [
  "Knee osteoarthritis (mild to moderate)",
  "Meniscus tears or degeneration",
  "Hip, shoulder, or ankle joint pain",
  "Patients wanting to avoid surgery",
  "Those who've failed cortisone injections",
];

type Step = { title: string; body: string; icon: ReactNode };

const process: Step[] = [
  {
    title: "Your Blood",
    body: "A small draw, under 2 minutes.",
    icon: <path d="M12 2s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" />,
  },
  {
    title: "Centrifuge",
    body: "Platelets concentrated 5–10x.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v9l5 3" />
      </>
    ),
  },
  {
    title: "Concentrated PRP",
    body: "Rich in natural growth factors.",
    icon: (
      <>
        <path d="M9 2h6M10 2v5l-5 9a4 4 0 0 0 3.5 6h7a4 4 0 0 0 3.5-6l-5-9V2" />
        <path d="M7 14h10" />
      </>
    ),
  },
  {
    title: "Injected",
    body: "Ultrasound-guided into the joint.",
    icon: (
      <>
        <path d="m18 2 4 4M17 7l3-3M9 15l7.5-7.5M14 6l4 4" />
        <path d="m9 15-4 4-3 1 1-3 4-4" />
      </>
    ),
  },
  {
    title: "Healing Begins",
    body: "Natural repair within days.",
    icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  },
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

export default function PRPSection() {
  return (
    <section
      id="prp"
      className="relative overflow-hidden bg-gradient-to-br from-[#07407D] via-[#0a2d5c] to-[#082244] py-24 text-white"
    >
      {/* background motion graphics */}
      <div className="pointer-events-none absolute inset-0">
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -right-32 top-10 h-96 w-96 rounded-full border border-[#3EC2D1]/10"
        />
        <div className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-[#3EC2D1]/10 blur-3xl" />
        <div className="absolute right-1/4 top-1/3 h-56 w-56 rounded-full bg-[#0C5D98]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center">
            <SectionLabel>Primary Treatment, Regenerative Medicine</SectionLabel>
          </div>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            PRP Therapy for Joint &amp; Knee Pain
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#9FE4EC]">
            Harness your body&apos;s own healing power, no surgery, no downtime.
          </p>
        </div>

        {/* SPLIT INTRO, image + What is PRP */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          {/* Image stack */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/15">
              <img
                src="/images/prp-knee.png"
                alt="Ultrasound-guided PRP injection into a knee joint"
                className="h-[380px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07407D]/80 via-transparent to-transparent" />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-5 left-5 flex items-center gap-2 rounded-xl bg-[#3EC2D1] px-4 py-2 text-sm font-bold text-[#07407D] shadow-lg"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M12 2a10 10 0 1 0 10 10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                Ultrasound-Guided Precision
              </motion.div>
            </div>

            {/* Floating secondary image */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-6 hidden h-36 w-44 overflow-hidden rounded-2xl border-4 border-[#07407D] shadow-xl sm:block"
            >
              <img
                src="/images/prp-stem-cells.jpeg"
                alt="Platelet-rich plasma and regenerative cells"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* What is PRP */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3EC2D1] to-[#0C5D98] text-white shadow-lg"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-7 w-7"
              >
                <path d="M12 2s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" />
              </svg>
            </motion.span>
            <motion.h3
              variants={fadeInUp}
              className="mt-5 text-2xl font-bold text-white"
            >
              What Is PRP Therapy?
            </motion.h3>
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-[17px] leading-relaxed text-white/80"
            >
              PRP stands for{" "}
              <span className="font-semibold text-[#9FE4EC]">
                Platelet-Rich Plasma
              </span>
              . We draw a small amount of your own blood, spin it in a centrifuge
              to concentrate the healing platelets, and inject it directly into
              the damaged joint.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="mt-3 text-[17px] leading-relaxed text-white/80"
            >
              Your body&apos;s natural growth factors then go to work repairing
              tissue, reducing inflammation, and rebuilding cartilage, all from
              your own biology.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-6 flex flex-wrap gap-3"
            >
              {["No Surgery", "No Downtime", "FDA-Cleared Process"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#3EC2D1]/40 bg-[#3EC2D1]/10 px-4 py-1.5 text-sm font-medium text-[#9FE4EC]"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* TWO INFO CARDS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-20 grid gap-6 md:grid-cols-2"
        >
          {/* Candidate card */}
          <motion.div
            variants={fadeInUp}
            className="rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur-md"
          >
            <h3 className="text-xl font-semibold text-white">
              Who Is a Good Candidate?
            </h3>
            <ul className="mt-5 space-y-3">
              {candidates.map((c) => (
                <li key={c} className="flex items-start gap-3 text-white/85">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#3EC2D1] text-[#07407D]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3 w-3"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Results card */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col justify-between rounded-3xl border border-[#3EC2D1]/30 bg-gradient-to-br from-[#3EC2D1]/20 to-[#0C5D98]/20 p-8 backdrop-blur-md"
          >
            <div>
              <h3 className="text-xl font-semibold text-white">
                What to Expect
              </h3>
              <p className="mt-4 text-[17px] leading-relaxed text-white/85">
                Most patients see progressive improvement over{" "}
                <span className="font-semibold text-[#9FE4EC]">4–12 weeks</span>{" "}
                as the joint repairs itself. No hospital stay, no long recovery , 
                just a short in-office visit.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-8">
              <div>
                <p className="text-4xl font-extrabold text-[#9FE4EC]">4–12</p>
                <p className="text-xs uppercase tracking-wide text-white/60">
                  Weeks to results
                </p>
              </div>
              <div className="h-12 w-px bg-white/20" />
              <div>
                <p className="text-4xl font-extrabold text-[#9FE4EC]">0</p>
                <p className="text-xs uppercase tracking-wide text-white/60">
                  Days of downtime
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* PROCESS FLOW with traveling pulse */}
        <div className="mt-24">
          <h3 className="text-center text-2xl font-bold text-white">
            How the PRP Process Works
          </h3>

          <div className="relative mt-12">
            {/* base line */}
            <div className="absolute left-0 right-0 top-7 hidden h-0.5 rounded-full bg-white/15 sm:block" />
            {/* animated fill line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              className="absolute left-0 top-7 hidden h-0.5 rounded-full bg-gradient-to-r from-[#3EC2D1] to-[#9FE4EC] sm:block"
            />

            <div className="relative grid gap-8 sm:grid-cols-5 sm:gap-4">
              {process.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.25 }}
                  className="flex flex-col items-center text-center"
                >
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3EC2D1] to-[#0C5D98] text-white shadow-lg ring-4 ring-[#07407D]"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      {step.icon}
                    </svg>
                  </motion.span>
                  <span className="mt-4 text-sm font-bold uppercase tracking-wide text-[#9FE4EC]">
                    {`0${i + 1}`}
                  </span>
                  <span className="mt-1 font-semibold text-white">
                    {step.title}
                  </span>
                  <span className="mt-1 text-xs text-white/60">{step.body}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA bar */}
      <div className="relative mt-24 overflow-hidden bg-[#3EC2D1] py-10 text-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(7,64,125,0.3),transparent_60%)]" />
        <h3 className="relative text-2xl font-bold text-[#07407D] sm:text-3xl">
          Ready to See If PRP Is Right for You?
        </h3>
        <Link
          href="/booking"
          className="group relative mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[#07407D] px-8 py-4 font-bold uppercase tracking-wide text-white shadow-lg transition-transform hover:scale-[1.04]"
        >
          Book My $49 Consultation
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
