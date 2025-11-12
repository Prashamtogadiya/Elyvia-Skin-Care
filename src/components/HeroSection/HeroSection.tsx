import { GoArrowUpRight } from "react-icons/go";
import curvedImage from '../../assets/Gemini_Generated_Image_7omgwm7omgwm7omg.png';
import blankImage from "../../assets/Gemini_Generated_Image_i588kyi588kyi588.png";
const HeroSection = () => {
    return (
        <>
            {/* Set section to relative and remove 'flex' from here. We will use absolute for the image. */}
            <section id="hero-container" className='relative  mx-auto mt-1  w-[98%] h-[700px] overflow-hidden'>

                {/* left section - Text Content */}
                {/* Use a fixed width or max-width to control how far the text stretches toward the image */}
                <div className='absolute top-0 left-66 mt-13 z-10' style={{ maxWidth: '500px' }}>

                    {/* button */}
                    <button className='border-2 border-gray-400 rounded-full px-4 py-2 flex gap-2 mb-8'>
                        All Glow In One Solution
                        {/* SVG kept for reference, using React camelCase convention (strokeWidth, strokeLinejoin) */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#fba770" fill="none">
                            <path d="M14.4999 12.5C14.4999 13.8807 13.3807 15 11.9999 15C10.6192 15 9.49994 13.8807 9.49994 12.5C9.49994 11.1193 10.6192 10 11.9999 10C13.3807 10 14.4999 11.1193 14.4999 12.5Z" stroke="#fba770" strokeWidth="1.5" strokeLinejoin="round"></path>
                            <path d="M11.9999 3C14.2091 3 15.998 4.91739 15.998 7.12653C16.3182 7.04393 16.6539 7 16.9999 7C19.2091 7 20.9999 8.79086 20.9999 11C20.9999 12.5964 20.0647 13.9745 18.7122 14.616C19.2071 15.2818 19.4999 16.1067 19.4999 17C19.4999 19.2091 17.7091 21 15.4999 21C13.9939 21 12.6823 20.1677 11.9999 18.938C11.3176 20.1677 10.006 21 8.49994 21C6.2908 21 4.49994 19.2091 4.49994 17C4.49994 16.1067 4.79277 15.2818 5.28767 14.616C3.93518 13.9745 2.99994 12.5964 2.99994 11C2.99994 8.79086 4.7908 7 6.99994 7C7.34595 7 7.68169 7.04393 8.0019 7.12652C8.0019 4.91738 9.7908 3 11.9999 3Z" stroke="#fba770" strokeWidth="1.5" strokeLinejoin="round"></path>
                        </svg>
                    </button>

                    {/* The text with manual breaks and a custom right padding for the curve */}

                </div>
                <p className='text-[92px] w-[800px]  z-50 mt-26 absolute left-66 font-medium font-libre  leading-none' style={{
                    paddingRight: '100px'
                }}>
                    Empowering
                    <br />
                    Confidence In
                    <br />
                    Your Skin
                </p>

                {/* right section - Image (Absolutely Positioned) */}
                <div className='absolute  right-25 top-0 h-full'>
                    <img
                        src={curvedImage}
                        className='h-[630px] w-[930px] z-50 object-contain'
                        alt="Skincare model"
                        style={{
                            top: '40px',
                            right: '40px'
                        }}
                    />
                    <div>
                        <GoArrowUpRight className="text-[54px] absolute right-172 top-137 p-2 text-white hover:cursor-pointer rounded-full 
               bg-white/20 backdrop-blur-sm" />
                        <p className='text-white font-libre text-4xl absolute right-109 top-137'>Take Care Your Skin</p>
                        <p className='text-white font-libre text-1xl absolute right-136.5 opacity-75 top-146'>See Our Latest Products</p>

                    </div>
                    <div>
                        <img src={blankImage} className="h-[180px] absolute right-15 top-112" alt="" />
                         <GoArrowUpRight className="text-[51px] absolute right-18 top-113 p-2 text-white hover:cursor-pointer rounded-full 
               bg-black/80" />
               <p className="absolute right-47 top-119 font-libre text-3xl text-white">
                Best Selling <br />Products
               </p>
               <p className="absolute right-34 top-139 text-gray-400 tracking-tighter text-md">
                Our most loved skincare for <br /> real result and daily glow
               </p>
                    </div>
                </div>

            </section>
        </>
    );
}

export default HeroSection;