import bannerImage from "../assets/Myimage.jpg";
import bannerWalpaper from "..//assets/banner_wallpaper.svg"
const Expertise=()=>{
    return(
        <div className="main-container">
            <div  className="text-center text-4xl pb-16 underline font-bold">My Expertise</div>
            <div  style={{ backgroundImage:`url(${bannerWalpaper})`,
        backgroundSize:"cover"
        }} className="box-container flex items-center ">
<div className="flex justify-center">
      <div 
      className="w-2/3 text-center p-5 space-y-4 text-white">
      <h1 className="text-2xl ">I love these thechnology</h1>
      <p>As a web developer, I am passionate about mastering cutting-edge technologies like React, Node.js, and Docker,Prisma,Nextjs. I thrive on leveraging these tools to create innovative and dynamic web experiences.</p>
      <button className="bg-orange-500 text-1xl rounded-full px-2 py-2 shadow ">Hire me</button>
        
      </div>
      </div>
      <div className="flex justify-center">
      <div className="flex w-2/3 h-fit space-x-3 flex-wrap">
       <p className="bg-gray-300 w-fit px-2 py-2  mt-2 hover:bg-orange-500 cursor-pointer rounded-full">nodejs</p>
       <p className="bg-gray-300 w-fit px-2 py-2 mt-2 hover:bg-orange-500 cursor-pointer rounded-full">prisma</p>
       <p className="bg-gray-300 w-fit px-2 py-2 mt-2 hover:bg-orange-500 cursor-pointer rounded-full">tailwind</p>
       <p className="bg-gray-300 w-fit px-2 py-2 mt-2 hover:bg-orange-500 cursor-pointer rounded-full">React</p>
       <p className="bg-gray-300 w-fit px-2 py-2 mt-2 hover:bg-orange-500 cursor-pointer rounded-full">postgres</p>
       <p className="bg-gray-300 w-fit px-2 py-2 mt-2 hover:bg-orange-500 cursor-pointer rounded-full">recoil</p>
       <p className="bg-gray-300 w-fit px-2 py-2 mt-2 hover:bg-orange-500 cursor-pointer rounded-full">typescript</p>
       <p className="bg-gray-300 w-fit px-2 py-2 mt-2 hover:bg-orange-500 cursor-pointer rounded-full">aws</p>
       <p className="bg-gray-300 w-fit px-2 py-2 mt-2 hover:bg-orange-500 cursor-pointer rounded-full">mongoose</p>
       <p className="bg-gray-300 w-fit px-2 py-2 mt-2 hover:bg-orange-500 cursor-pointer rounded-full">database</p>
       <p className="bg-gray-300 w-fit px-2 py-2 mt-2 hover:bg-orange-500 cursor-pointer rounded-full">nextjs</p>
       
       <p className="bg-gray-300 w-fit px-2 py-2 mt-2 hover:bg-orange-500 cursor-pointer rounded-full">flutter</p>
       
       <p className="bg-gray-300 w-fit px-2 py-2 mt-2 hover:bg-orange-500 cursor-pointer rounded-full">dynamic</p>
       
       <p className="bg-gray-300 w-fit px-2 py-2 mt-2 hover:bg-orange-500 cursor-pointer rounded-full">javascript</p>
       <p className="bg-gray-300 w-fit px-2 py-2 mt-2 hover:bg-orange-500 cursor-pointer rounded-full">veu</p>
       

       

        
      </div>
      </div>
      </div>
      </div>
    )
}
export default Expertise