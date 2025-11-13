import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-t from-amber-50 to-white py-12 px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-3">
          <h3 className="font-libre text-2xl">Elyvia</h3>
          <p className="font-opensans text-sm text-gray-600">
            Natural, gentle skincare crafted with care.
          </p>
          <div className="flex items-center gap-3 mt-3">
            <FaInstagram className="text-gray-700 hover:text-amber-400 cursor-pointer" />
            <FaTwitter className="text-gray-700 hover:text-amber-400 cursor-pointer" />
            <FaFacebookF className="text-gray-700 hover:text-amber-400 cursor-pointer" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="font-libre text-lg">Quick Links</h4>
          <nav className="flex flex-col font-opensans text-sm text-gray-600">
            <a className="py-1 hover:text-black">Home</a>
            <a className="py-1 hover:text-black">About</a>
            <a className="py-1 hover:text-black">Products</a>
            <a className="py-1 hover:text-black">Support</a>
          </nav>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-libre text-lg">Subscribe</h4>
          <p className="font-opensans text-sm text-gray-600">
            Get early access to launches and offers.
          </p>
          <form className="flex gap-2 mt-2">
            <input
              aria-label="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-full border border-gray-200 text-sm outline-none"
            />
            <button className="px-4 py-2 rounded-full bg-black text-white text-sm">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 border-t border-gray-100 pt-6 text-center text-sm text-gray-500 font-opensans">
        © {new Date().getFullYear()} Elyvia. All rights reserved.
      </div>
    </footer>
  );
}
