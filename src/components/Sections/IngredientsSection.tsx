import { motion } from "framer-motion";
import { GiHoneycomb } from "react-icons/gi";
import { FaLeaf } from "react-icons/fa";

const ingredients = [
  { id: 1, name: "Aloe Vera", desc: "Soothes and hydrates skin.", icon: <FaLeaf /> },
  { id: 2, name: "Shea Butter", desc: "Deep nourishment and barrier support.", icon: <GiHoneycomb /> },
  { id: 3, name: "Green Tea", desc: "Antioxidant protection and calm.", icon: <FaLeaf /> },
];

export default function IngredientsSection() {
  return (
    <section className="w-full px-20 py-16 bg-amber-50">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="mb-8">
          <h2 className="font-libre text-3xl font-semibold">Nature-first Ingredients</h2>
          <p className="font-opensans text-sm text-gray-600 mt-2">
            We use gentle, effective botanicals chosen for real skin benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {ingredients.map((ing, i) => (
            <motion.article
              key={ing.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * i, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl p-6 bg-white shadow-sm flex flex-col gap-3"
            >
              <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center text-2xl text-amber-700">
                {ing.icon}
              </div>
              <h3 className="font-libre text-lg">{ing.name}</h3>
              <p className="font-opensans text-sm text-gray-600">{ing.desc}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
