import { useState } from "react";
import bannerImage from "../assets/Myimage.jpg";
const About=()=>{
   const[data,setData] =useState({
        image:bannerImage,
        title:"Web Devloper and Data Structure",
        desc1:`As an accomplished front-end and back-end developer, I bring a wealth of expertise to every project. With a keen eye for design and a robust understanding of server-side technologies, I craft dynamic websites that engage users and deliver exceptional performance.`,
        desc2:`Leveraging my extensive skill set as a seasoned web developer, I excel in creating seamless digital experiences. From crafting elegant user interfaces to optimizing database performance, I'm dedicated to exceeding expectations and delivering innovative solutions that drive results.`
    })
    return(
        <>
            <div className="main-container bg-gray-100 py-16">
         <h1 className="text-center pb-16 text-4xl underline font-bold">About me</h1>
        <div className="flex items-center">
            <div className="w-full flex justify-center">
                <img className="rounded-full" src={data.image} alt='Saksham' width={300}></img>
            </div>
     <div className="w-full  flex justify-center ">
     <div className="space-y-5 w-2/3">
        <h1 className="text-4xl font-semibold">{data.title}</h1>
        <p>{data.desc1}</p>
        <p>{data.desc2}</p>
        <button className="bg-orange-500 px-3 py-2 text-1xl rounded-full shadow">Read more</button>
        </div>
        </div>
        </div>
            </div>
        </>
    )
}
export default About