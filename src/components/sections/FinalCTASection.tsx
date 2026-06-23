"use client";

import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";

export default function FinalCTASection() {
  return (
    <section className="bg-brand-teal">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-brand-navyDark sm:text-4xl">
            Ready to Live Pain-Free?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-navyDark/80">
            Don&apos;t let another day go by in pain. Book your free
            consultation and discover a treatment plan built just for you.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAButton href="/booking" variant="secondary">
              Book Your Free Consultation
            </CTAButton>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center gap-2 font-semibold text-brand-navyDark hover:underline"
            >
              <PhoneCall className="h-5 w-5" />
              (555) 123-4567
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
