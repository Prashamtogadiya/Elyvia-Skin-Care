import { motion } from "framer-motion";
import { MdOutlineWash, MdOutlineSpa, MdOutlineWbSunny } from "react-icons/md";

const steps = [
  { id: 1, title: "Cleanse", desc: "Remove impurities with our gentle cleanser.", icon: <MdOutlineWash /> },
  { id: 2, title: "Treat", desc: "Apply serum to target specific concerns.", icon: <MdOutlineSpa /> },
  { id: 3, title: "Protect", desc: "Finish with SPF for daytime protection.", icon: <MdOutlineWbSunny /> },
];

export default function RoutineSection() {
  return (
    <section className="w-full px-20 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="mb-8">
          <h2 className="font-libre text-3xl font-semibold">Simple Daily Routine</h2>
          <p className="font-opensans text-sm text-gray-600 mt-2">Three easy steps for healthier-looking skin.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * i, duration: 0.45 }}
              className="rounded-2xl p-6 bg-gradient-to-br from-white to-amber-50 shadow-sm flex flex-col items-start gap-4"
            >
              <div className="w-14 h-14 rounded-lg bg-black text-white flex items-center justify-center text-2xl">
                {s.icon}
              </div>
              <h3 className="font-libre text-lg">{s.title}</h3>
              <p className="font-opensans text-sm text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
