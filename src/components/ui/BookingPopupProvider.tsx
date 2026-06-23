"use client";

import { useCallback, useEffect, useState } from "react";
import Script from "next/script";
import { AnimatePresence, motion } from "framer-motion";

const FORM_SRC =
  "https://api.leadconnectorhq.com/widget/form/ZVH7I6AoEldHDn4vqwhO";
const FORM_ID = "ZVH7I6AoEldHDn4vqwhO";

export default function BookingPopupProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const closePopup = useCallback(() => setOpen(false), []);

  // Intercept clicks on any CTA that links to /booking and open the popup
  // instead of navigating. Capture phase + stopImmediatePropagation ensures we
  // run before Next.js <Link> navigation handlers.
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
        return;

      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.(
        'a[href$="/booking"], a[href="/booking"]'
      ) as HTMLAnchorElement | null;
      if (!anchor) return;

      // Block Next.js client navigation and any other handlers.
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      setOpen(true);
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  // Lock body scroll + close on Escape when open.
  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      {children}

      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />

      <AnimatePresence>
        {open && (
          <motion.div
            key="booking-popup"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Book your $49 consultation"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePopup}
              className="absolute inset-0 bg-[#062f5c]/70 backdrop-blur-sm"
            />

            {/* Modal card */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              className="relative z-10 flex max-h-[92vh] w-full max-w-lg flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
            >
              {/* Decorative gradient header */}
              <div className="relative overflow-hidden bg-gradient-to-br from-[#07407D] via-[#0a2d5c] to-[#292C51] px-6 py-6 text-white">
                <div className="pointer-events-none absolute inset-0">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 40,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -right-16 -top-16 h-44 w-44 rounded-full border border-[#3EC2D1]/20"
                  />
                  <div className="absolute -left-6 bottom-0 h-32 w-32 rounded-full bg-[#3EC2D1]/20 blur-2xl" />
                </div>

                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#3EC2D1]/40 bg-[#3EC2D1]/15 px-3 py-1 text-xs font-semibold text-[#9FE4EC]">
                      <motion.span
                        animate={{ scale: [1, 1.4, 1] }}
                        transition={{
                          duration: 1.6,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="h-1.5 w-1.5 rounded-full bg-[#3EC2D1]"
                      />
                      Limited Spots
                    </span>
                    <h2 className="mt-3 text-2xl font-bold leading-tight">
                      Claim Your{" "}
                      <span className="bg-gradient-to-r from-[#3EC2D1] to-[#9FE4EC] bg-clip-text text-transparent">
                        $49 Consultation
                      </span>
                    </h2>
                    <p className="mt-1 text-sm text-white/75">
                      Fill out the form and our team will reach out within 24
                      hours.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={closePopup}
                    aria-label="Close"
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
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
                      <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Form */}
              <div className="flex-1 overflow-y-auto bg-[#F4F7FA] p-1">
                <iframe
                  src={FORM_SRC}
                  id={`inline-${FORM_ID}`}
                  title="Vercel knee/joint pain consultation form"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="vercel knee/joint pain meta lp"
                  data-height="478"
                  data-layout-iframe-id={`inline-${FORM_ID}`}
                  data-form-id={FORM_ID}
                  style={{
                    width: "100%",
                    height: "520px",
                    border: "none",
                    borderRadius: "0px",
                    background: "transparent",
                  }}
                  className="w-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
