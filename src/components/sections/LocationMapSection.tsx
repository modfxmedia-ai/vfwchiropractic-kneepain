"use client";

import { motion, type Variants } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

const ADDRESS = "8524 N Canton Center Rd, Canton, MI 48187";
const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS
)}&output=embed`;
const MAPS_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  ADDRESS
)}`;

const details = [
  {
    title: "Our Address",
    body: "8524 N Canton Center Rd\nCanton, MI 48187",
    icon: (
      <>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
  {
    title: "Call or Text",
    body: "(734) 212-6703",
    icon: (
      <path d="M6.62 10.79a15.53 15.53 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
    ),
  },
  {
    title: "Office Hours",
    body: "Mon–Fri: 9:00 AM – 6:00 PM\nSat: By Appointment",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  },
];

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

export default function LocationMapSection() {
  return (
    <section
      id="location"
      className="relative overflow-hidden bg-gradient-to-b from-white to-[#F4F7FA] py-24"
    >
      {/* background motion graphics */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#3EC2D1]/10 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#0C5D98]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <SectionLabel>Visit Our Clinic</SectionLabel>
          <h2 className="mt-4 text-3xl font-bold text-[#07407D] sm:text-4xl">
            Conveniently Located in Canton, MI
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-600">
            Easy to find, easy to park. We proudly serve patients across
            Canton, Plymouth, Northville, and the greater Detroit metro area.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_360px]">
          {/* MAP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-3xl border border-[#3EC2D1]/15 shadow-xl"
          >
            {/* animated location pin overlay */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-full">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center"
              >
                <span className="rounded-full bg-[#07407D] px-3 py-1 text-xs font-semibold text-white shadow-lg">
                  Vital Flow Wellness
                </span>
              </motion.div>
            </div>

            <iframe
              src={MAPS_EMBED}
              title="Vital Flow Wellness location map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full grayscale-[0.15] transition-all duration-500 group-hover:grayscale-0 lg:h-[520px]"
              style={{ border: 0 }}
              allowFullScreen
            />
          </motion.div>

          {/* DETAILS */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-4"
          >
            {details.map((d) => (
              <motion.div
                key={d.title}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="flex items-start gap-4 rounded-2xl border border-[#3EC2D1]/15 bg-white p-6 shadow-[0_12px_30px_-20px_rgba(7,64,125,0.45)]"
              >
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#3EC2D1] to-[#0C5D98] text-white shadow-md">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    {d.icon}
                  </svg>
                </span>
                <div>
                  <h3 className="font-bold text-[#292C51]">{d.title}</h3>
                  <p className="mt-1 whitespace-pre-line text-sm text-gray-600">
                    {d.body}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.a
              variants={fadeInUp}
              href={MAPS_DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 rounded-full bg-[#0C5D98] py-4 font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#2AAABB]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <polygon points="3 11 22 2 13 21 11 13 3 11" />
              </svg>
              Get Directions
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
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
