
import { useState } from "react";
import { useContext } from "react";
import { navContext } from "../context/NavContext";

function Nav(){
const {selected, setSelected} = useContext(navContext);

console.log("selected", selected);
function handleSelect(index){
    setSelected(index);
}


return(
<div className=" p-1 mt-1  w-[614px] h-[62px] bg-neutral-900 shadow-2xl shadow-black rounded-[26px] mx-auto  ">
    <nav className=" relative flex h-full w-full text-gray-400 mx-auto gap-1.5 justify-baseline items-center rounded-[26px]">

        <div
  className="absolute top-0 z-0 shadow-2xl shadow-black left-0 h-[55px] w-1/3 bg-gradient-to-r from-neutral-800 to-neutral-700 rounded-[26px] transition-all duration-500 ease-in-out"
  style={{ 
    transform: `translateX(${selected * 100}%)` }}
></div>


{["About me", "Expereince", "Recommended"].map((label,index) => (
    <button  onClick={()=>handleSelect(index)} key={index} className={`h-full z-10 w-1/3 
       ${selected === index ?`text-white`:"text-gray-400 hover:bg-[length:100%_100%]  transition-all duration-500 ease-out bg-no-repeat  "} rounded-[26px]  bg-linear-to-r from-neutral-850 via-neutral-850 to-neutral-800  bg-[length:0%_100%]  `}>
    {label}
    </button>
))}
    
  
    </nav>
</div>
)

}
export default Nav;



