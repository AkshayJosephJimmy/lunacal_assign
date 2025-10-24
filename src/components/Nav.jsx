
import { useState } from "react";

function Nav(){
const [selected, setSelected] = useState("");

function handleSelect(e){
    setSelected(e.target.value);
}

return(
<div className=" p-1  w-[614px] h-[62px] bg-neutral-900 shadow-2xl shadow-black rounded-[26px] mx-auto mt-2 ">
    <nav className="flex h-full w-full text-gray-400   mx-auto gap-1.5 justify-baseline items-center rounded-[26px]">

{["About me", "Experince", "Recommended"].map((label,index) => (
    <button value={"about"} key={index} className="h-full  w-1/3 rounded-[26px] shadow-2xl bg-linear-to-r from-neutral-850 via-neutral-850 to-neutral-800  bg-[length:0%_100%] hover:bg-[length:100%_100%]  transition-all duration-500 ease-out bg-no-repeat">
    {label}
    </button>
))}
    
  
    </nav>
</div>
)

}
export default Nav;



