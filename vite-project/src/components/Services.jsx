import { useState } from "react";
const Services=()=>{
    const [data, setData] = useState({
        1: {
          id: 1,
          title: "Web Development",
          description: `I'm dedicated to crafting dynamic websites, blending frontend elegance with backend robustness. With expertise in HTML, CSS, JavaScript, and more, I bring your digital ideas to vibrant reality. `,
        },
        2: {
          id: 2,
          title: "Data Structure",
          description: `I specialize in creating efficient data structures tailored to your needs, ensuring optimal performance and scalability. From arrays to trees to dyanamic programming, I design solutions that empower your applications to thrive `,
        },
        3: {
          id: 3,
          title: "Backend Development",
          description: `I excel in crafting robust and scalable backend systems that power your applications seamlessly. From database design to API development, I ensure your backend is reliable and efficient.`,
        },
      });
      
    return (
      <div className="main-container py-14">
      <div className="text-center text-4xl pb-16 underline font-bold">My Services</div>
      <div className=" flex justify-center space-x-5 px-10 " >
        <div className="bg-slate-200 cursor-pointer hover:bg-gray-100 text-center p-5space-y-4 shadow rounded-xl">
            <h1 className="text-4xl">{data[1].title}</h1>
            <i class="text-4xl  fa-brands fa-webflow"></i>
            <p>{data[1].description}</p>
            <button className="bg-orange-500 rounded-full shadow px-2 py-2 text-1xl">check</button>
        </div>
        <div className="bg-slate-200 cursor-pointer hover:bg-gray-100  text-center p-5space-y-4 shadow rounded-xl">
            <h1 className="text-4xl">{data[2].title}</h1>
            <i class="text-4xl fa-brands fa-android"></i>
            <p>{data[2].description} </p>
            <button className="bg-orange-500 rounded-full shadow px-2 py-2 text-1xl">check</button>
        </div>
        <div className="bg-slate-200 cursor-pointer hover:bg-gray-100 text-center p-5space-y-4 shadow rounded-xl">
            <h1 className=" text-4xl">{data[3].title}</h1>
            <i class=" text-4xl fa-brands fa-node"></i>
            <p>{data[3].description} </p>
            <button className="bg-orange-500 rounded-full shadow px-2 py-2 text-1xl">check</button>
        </div>
      </div>
      </div>
    )
}
export default Services;