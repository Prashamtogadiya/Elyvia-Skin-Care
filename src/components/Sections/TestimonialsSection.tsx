import { motion } from "framer-motion";
import { AiFillStar } from "react-icons/ai";

const testimonials = [
  {
    id: 1,
    name: "Maya K.",
    quote: "My skin has never looked better — gentle and effective.",
  },
  {
    id: 2,
    name: "Liam R.",
    quote: "Beautiful textures and fast results. Highly recommend!",
  },
  {
    id: 3,
    name: "Sofia P.",
    quote: "Luxurious without being heavy. A daily staple now.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full px-20 py-16 bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-8">
          <h2 className="font-libre text-3xl font-semibold">What Our Customers Say</h2>
          <p className="font-opensans text-sm text-gray-600 mt-2">
            Real reviews from people who found a skincare routine that works.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 * i, duration: 0.45 }}
              className="p-6 rounded-xl border border-gray-100 shadow-sm bg-gradient-to-br from-white to-amber-50"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center text-white font-semibold">
                  {t.name.split(" ").map(n => n[0]).slice(0,2).join("")}
                </div>
                <div>
                  <p className="font-libre text-sm">{t.name}</p>
                  <div className="flex text-amber-400">
                    <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
                  </div>
                </div>
              </div>

              <p className="font-opensans text-sm text-gray-700">"{t.quote}"</p>
            </motion.blockquote>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
