import bannerImage from "../assets/Myimage.jpg";
import bannerWalpaper from "..//assets/banner_wallpaper.svg"
import Typed from "typed.js"
import { useEffect,useRef } from "react"
const Banner=()=>{
    const el=useRef(null)
    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ["Web Developer", "Data Structure Expert", "React Developer", "Backend Developer"], // Strings to display
          // Speed settings, try diffrent values untill you get good results
          startDelay: 100,
          typeSpeed: 50,
          backSpeed: 20,
          backDelay: 60,
          smartBackspace: true,
          loop: true,
          showCursor: true,
          cursorChar: "!"
        });
    
        // Destropying
        return () => {
          typed.destroy();
        };
      }, []);
    return (
        <div  style={{ backgroundImage:`url(${bannerWalpaper})`,
        backgroundSize:"cover"
        }} 
        className="main-container flex items-center ">
        <div 
        className=" w-full flex justify-center items-center text-white">
        <div className="w-2/3  ms-10 py-4">
            <h3 className="text-1xl font-semibold">Hi ,I am</h3>
            <h1 className=" mt-3 text-2xl font-bold">Saksham kumar</h1>
            <h2 className=" mt-3 text-1xl ">And I am a <span className="font-bold underline" ref={el}> </span></h2>
            <p className="mt-3">I'm Saksham, a dedicated web developer passionate about creating seamless online experiences. With a focus on both frontend and backend development, I thrive on turning ideas into functional and visually appealing websites. My commitment to quality and innovation drives me to continuously refine my skills and exceed client expectations.</p>
            <div className="icons-container flex space-x-5">
            <a className=" cursor-pointer hover:bg-orange-600 px-3 py-4 w-12 h-12 rounded-full flex justify-center items-center bg-gray-800">
            <i class="fa-brands text-3xl  fa-facebook"></i>
            </a>
            <a className="cursor-pointer hover:bg-orange-600 px-3 py-4 w-12 h-12 rounded-full flex justify-center items-center bg-gray-800">
            <i class="fa-brands text-3xl fa-instagram"></i>
            </a>
            <a className="cursor-pointer hover:bg-orange-600 px-3 py-4 w-12 h-12 rounded-full flex justify-center items-center bg-gray-800">
            <i class="fa-brands text-3xl fa-youtube"></i>
            </a>
            <a className="cursor-pointer hover:bg-orange-600 px-3 py-4 w-12 h-12 rounded-full flex justify-center items-center bg-gray-800">
            <i class="fa-brands text-3xl fa-linkedin"></i>
            </a>
            
           
           
            </div>
            <br></br>
          <a className="text-1xl px-3 py-2 bg-orange-500 rounded-full" href='/contact'>Contact me</a>
          </div>
        </div>
        <div className=" flex justify-center w-full">
           <img className="rounded-full shadow my-2 " width={200} src={bannerImage} />
        </div>
        </div>
    )
}
export default Banner;