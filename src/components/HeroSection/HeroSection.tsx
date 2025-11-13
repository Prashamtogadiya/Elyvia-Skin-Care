import { GoArrowUpRight } from "react-icons/go";
import curvedImage from "../../assets/Gemini_Generated_Image_7omgwm7omgwm7omg.png";
import blankImage from "../../assets/Gemini_Generated_Image_i588kyi588kyi588.png";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import avatar1 from "../../assets/avatar-1.jpg";
import avatar2 from "../../assets/avatar-2.jpg";
import avatar3 from "../../assets/avatar-3.jpg";
import { MdArrowOutward } from "react-icons/md";

const HeroSection = () => {
  return (
    <>
      {/* ================= DESKTOP (fixed layout) ================= */}
      <section
        id="hero-container"
        className="relative mx-auto mt-1 h-[700px] overflow-hidden hidden lg:block"
        style={{
          minWidth: "1490px",
          maxWidth: "1490px",
          width: "100%",
        }}
      >
        {/* left section */}
        <div
          className="absolute top-0 left-66 mt-13 z-10"
          style={{ maxWidth: "500px" }}
        >
          <button className="border-2 border-gray-400 rounded-full px-4 py-2 flex gap-2 mb-8">
            All Glow In One Solution
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              color="#fba770"
              fill="none"
            >
              <path
                d="M14.4999 12.5C14.4999 13.8807 13.3807 15 11.9999 15C10.6192 15 9.49994 13.8807 9.49994 12.5C9.49994 11.1193 10.6192 10 11.9999 10C13.3807 10 14.4999 11.1193 14.4999 12.5Z"
                stroke="#fba770"
                strokeWidth="1.5"
                strokeLinejoin="round"
              ></path>
              <path
                d="M11.9999 3C14.2091 3 15.998 4.91739 15.998 7.12653C16.3182 7.04393 16.6539 7 16.9999 7C19.2091 7 20.9999 8.79086 20.9999 11C20.9999 12.5964 20.0647 13.9745 18.7122 14.616C19.2071 15.2818 19.4999 16.1067 19.4999 17C19.4999 19.2091 17.7091 21 15.4999 21C13.9939 21 12.6823 20.1677 11.9999 18.938C11.3176 20.1677 10.006 21 8.49994 21C6.2908 21 4.49994 19.2091 4.49994 17C4.49994 16.1067 4.79277 15.2818 5.28767 14.616C3.93518 13.9745 2.99994 12.5964 2.99994 11C2.99994 8.79086 4.7908 7 6.99994 7C7.34595 7 7.68169 7.04393 8.0019 7.12652C8.0019 4.91738 9.7908 3 11.9999 3Z"
                stroke="#fba770"
                strokeWidth="1.5"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>

        <p
          className="text-[92px] w-[800px] z-50 mt-26 absolute left-66 font-medium font-libre leading-none"
          style={{
            paddingRight: "100px",
          }}
        >
          Empowering
          <br />
          Confidence In
          <br />
          Your Skin
        </p>

        <p className="font-medium opacity-60 absolute left-66 top-96 z-50">
          Discover skincare designed to nourish, <br />protect, and reveal your
          natural glow.
        </p>

        <AvatarGroup max={3} className="absolute left-66 top-112 z-50">
          <Avatar alt="Remy Sharp" src={avatar1} />
          <Avatar alt="Travis Howard" src={avatar2} />
          <Avatar alt="Cindy Baker" src={avatar3} />
        </AvatarGroup>

        <p className="text-3xl transform scale-y-85 tracking-tight font-libre absolute z-50 opacity-80 left-96 top-113">
          1.5K Members
        </p>

        <button className=" text-2xl font-libre absolute left-66 top-125 bg-black/80 text-gray-300 rounded-full px-7 py-2">
          EXPLORE MORE
        </button>
        <MdArrowOutward className="text-[46px] p-2 absolute left-114 top-125 text-white hover:cursor-pointer bg-black/80 rounded-full" />

        {/* right section */}
        <div className="absolute right-25 top-0 h-full">
          <img
            src={curvedImage}
            className="h-[630px] w-[930px] z-50 object-contain"
            alt="Skincare model"
            style={{
              top: "40px",
              right: "40px",
            }}
          />

          <div>
            <GoArrowUpRight className="text-[54px] absolute right-172 top-137 p-2 text-white hover:cursor-pointer rounded-full bg-white/20 backdrop-blur-sm" />
            <p className="text-white font-libre text-4xl absolute right-109 top-137">
              Take Care Your Skin
            </p>
            <p className="text-white font-libre text-1xl absolute right-136.5 opacity-75 top-146">
              See Our Latest Products
            </p>
          </div>

          <div>
            <img
              src={blankImage}
              className="h-[180px] absolute right-15 top-112"
              alt=""
            />
            <GoArrowUpRight className="text-[51px] absolute right-18 top-113 p-2 text-white hover:cursor-pointer rounded-full bg-black/80" />
            <p className="absolute right-47 top-119 font-libre text-3xl text-white">
              Best Selling <br /> Products
            </p>
            <p className="absolute right-34 top-139 text-gray-400 tracking-tighter text-md">
              Our most loved skincare for <br /> real result and daily glow
            </p>
          </div>

          <div>
            <button className="border-2 font-libre absolute right-80 top-16 bg-white/20 backdrop-blur-xs text-white border-gray-400 rounded-full px-7 py-2">
              BEAUTY & CARE
            </button>
            <button className="border-2 font-libre absolute right-27 top-16 bg-white/20 backdrop-blur-xs text-white border-gray-400 rounded-full px-7 py-2">
              SKINCARE & HARDCARE
            </button>
            <button className="border-2 font-libre absolute right-27 top-30 bg-white/20 backdrop-blur-xs text-white border-gray-400 rounded-full px-7 py-2">
              PRODUCT & REVIEWS
            </button>
          </div>
        </div>
      </section>

      {/* ================= MOBILE/TABLET (responsive clean) ================= */}
      <section className="flex flex-col items-center justify-center text-center p-5 gap-5 lg:hidden">
        {/* top button */}
        <button className="border-2 border-gray-400 rounded-full px-4 py-2 flex items-center justify-center gap-2 text-sm sm:text-base">
          All Glow In One Solution
          <GoArrowUpRight color="#fba770" size={20} />
        </button>

        {/* heading */}
        <h1 className="text-[34px] sm:text-[46px] font-libre font-medium leading-tight">
          Empowering
          <br />
          Confidence In
          <br />
          Your Skin
        </h1>

        <p className="text-gray-500 text-sm sm:text-base mb-3">
          Discover skincare designed to nourish, protect, and reveal your glow.
        </p>

        {/* image */}
        <img
          src={curvedImage}
          alt="Skincare model"
          className="w-[90%] max-w-[400px] object-contain rounded-xl"
        />

        {/* stacked info */}
        <div className="text-white bg-black/80 rounded-2xl py-6 px-4 w-[90%] max-w-[400px]">
          <GoArrowUpRight className="text-[36px] mx-auto mb-2 bg-white/20 p-2 rounded-full" />
          <p className="font-libre text-2xl mb-1">Take Care Your Skin</p>
          <p className="opacity-70 mb-4 text-sm">See Our Latest Products</p>

          <img
            src={blankImage}
            className="h-[120px] mx-auto mb-3 rounded-lg"
            alt="product"
          />
          <p className="font-libre text-xl text-white mb-1">
            Best Selling Products
          </p>
          <p className="text-gray-400 text-sm">
            Our most loved skincare for real results and daily glow
          </p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
