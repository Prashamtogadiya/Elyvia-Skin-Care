import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const Navbar = () => {
  const navItems = [
    { label: "HOMEPAGE", type: "primary" },
    { label: "ABOUT US", type: "secondary" },
    { label: "OUR PRODUCTS", type: "secondary" },
    { label: "SUPPORT", type: "secondary" },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex items-center justify-between px-20 py-5"
    >
      <motion.div
        initial={{ opacity: 0, x: -140 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="flex items-center gap-2 ml-24"
      >
        <h1 className="font-libre text-4xl font-medium leading-none">Elyvia</h1>
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="bg-amber-400 rounded-full w-2 h-2 inline-block translate-y-2"
        />
      </motion.div>

      <motion.div
        className="font-opensans flex items-center gap-2"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.1, delayChildren: 0.6 },
          },
        }}
      >
        {navItems.map((item, index) => (
          <motion.button
            key={index}
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={
              item.type === "primary"
                ? { scale: 1.05, backgroundColor: "#e5e7eb" } 
                : {
                    scale: 1.05,
                    backgroundColor: "#f59e0b", 
                    color: "#000",
                  }
            }
            transition={{ type: "spring", stiffness: 300 }}
            className={`rounded-full text-sm px-4 py-1.5 h-9 duration-300 cursor-pointer 
              ${
                item.type === "primary"
                  ? "text-black border-2 border-gray-400"
                  : "hover:text-black"
              }`}
          >
            {item.label}
          </motion.button>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="font-opensans flex items-center gap-1 mr-12"
      >
        <motion.button
          whileHover={{
            scale: 1.05,
            backgroundColor: "#f59e0b",
            color: "#000",
            transition: { type: "spring", stiffness: 300 },
          }}
          className="rounded-full px-4 py-2 h-10 hover:cursor-pointer bg-black text-white border border-black"
        >
          BUY NOW
        </motion.button>

        <motion.div
          whileHover={{ rotate: 45, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <MdArrowOutward className="text-[42px] p-2 text-white hover:cursor-pointer bg-black rounded-full" />
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
