import { useState } from "react";
const Header=()=>{
 const [brandname,setBrandname]=useState("Saksham kumar");
const[menulinks,setMenulinks]=useState([
  {
    title:'home',
    link:"/home",
    id:1,
  },
  {
    title:'about',
    link:"/about",
    id:2,
  },
  {
    title:'skills',
    link:"/skills",
    id:3,
  },
  {
    title:'portfolio',
    link:"/portfolio",
    id:4,
  } ,
  {
    title:'contact',
    link:"/contact",
    id:5
  }
]
)
    return(
        <div className='main h-20 flex justify-between items-center px-16 bg-gray-100'>
      <div>
       <h1 className='text-2xl font-bold'>Saksham Kumar</h1>
      </div>
      <div className='space-x-6'>
      {menulinks.map((link)=>(
        <a key={link.id}href={link.link} className='hover:text-orange-600'>{link.title}</a>
      ))}
      
      </div>
      <div>
        <button className='px-3 py-2 bg-orange-600 shadow rounded-full text-1.5xl'>Hire me</button>
      </div>
    </div>
   
    )
      }
export default Header;