import { motion } from "framer-motion";
import { MdShoppingBasket } from "react-icons/md";

const products = [
  {
    id: 1,
    name: "Glow Serum",
    desc: "Lightweight serum to brighten and hydrate.",
    price: "$29",
    color: "from-amber-100 to-amber-50",
  },
  {
    id: 2,
    name: "Hydra Cream",
    desc: "Deep moisture cream for daily protection.",
    price: "$34",
    color: "from-rose-100 to-rose-50",
  },
  {
    id: 3,
    name: "Renew Cleanser",
    desc: "Gentle cleanser for refreshed skin.",
    price: "$19",
    color: "from-sky-100 to-sky-50",
  },
];

export default function ProductsSection() {
  return (
    <section className="w-full px-20 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-libre text-3xl font-semibold">Our Best Sellers</h2>
            <p className="font-opensans text-sm text-gray-600 mt-1">
              Carefully crafted products for radiant skin.
            </p>
          </div>
          <button className="font-opensans rounded-full px-4 py-2 h-10 bg-black text-white border border-black hover:scale-105 transition-transform">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className={`rounded-2xl p-6 bg-gradient-to-br ${p.color} shadow-md flex flex-col justify-between`}
            >
              <div>
                <div className="w-20 h-20 rounded-xl bg-white/60 mb-4 flex items-center justify-center">
                  <MdShoppingBasket className="text-2xl text-black" />
                </div>
                <h3 className="font-libre text-xl font-medium">{p.name}</h3>
                <p className="font-opensans text-sm text-gray-600 mt-2">{p.desc}</p>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span className="font-libre text-lg">{p.price}</span>
                <button
                  className="rounded-full px-4 py-2 h-9 bg-black text-white hover:bg-amber-400 hover:text-black transition-colors"
                >
                  BUY NOW
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
