import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";

const faqs = [
  { id: 1, q: "Are your products cruelty-free?", a: "Yes, we never test on animals and source ethical ingredients." },
  { id: 2, q: "Do you offer returns?", a: "We accept returns within 30 days for unopened items." },
  { id: 3, q: "Is your packaging recyclable?", a: "We use recyclable materials where possible and offer refill options." },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="w-full px-20 py-16 bg-amber-50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="mb-8">
          <h2 className="font-libre text-3xl font-semibold">Frequently Asked Questions</h2>
          <p className="font-opensans text-sm text-gray-600 mt-2">Quick answers to common questions.</p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((f) => {
            const isOpen = openId === f.id;
            return (
              <div key={f.id} className="border border-gray-100 rounded-xl overflow-hidden bg-white">
                <button
                  onClick={() => setOpenId(isOpen ? null : f.id)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="font-opensans font-medium">{f.q}</span>
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>
                    <HiChevronDown />
                  </motion.span>
                </button>

                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.25 }}
                    className="px-6 pb-4 text-sm text-gray-700 font-opensans"
                  >
                    {f.a}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
