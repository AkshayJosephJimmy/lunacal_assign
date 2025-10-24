


function Nav(){




return(
<div className=" p-1  w-[614px] h-[62px] bg-neutral-900 shadow-2xl shadow-black rounded-[26px] mx-auto mt-2 ">
    <nav className="flex h-full w-full text-gray-400   mx-auto gap-1.5 justify-baseline items-center rounded-[26px]">

    <button className="h-full  w-1/3 rounded-[26px] shadow-2xl bg-gradient-to-r from-neutral-850 via-neutral-850 to-neutral-800  bg-[length:0%_100%] hover:bg-[length:100%_100%]  transition-all duration-500 ease-out bg-no-repeat">About me</button>
    <button className="h-full w-1/3 rounded-[26px] bg-gradient-to-r from-neutral-850 via-neutral-850 to-neutral-800  bg-[length:0%_100%] hover:bg-[length:100%_100%]  transition-all duration-500 ease-out bg-no-repeat">Experince</button>
    <button className="h-full w-1/3 rounded-[26px] bg-gradient-to-r from-neutral-850 via-neutral-850 to-neutral-800  bg-[length:0%_100%] hover:bg-[length:100%_100%]  transition-all duration-500 ease-out bg-no-repeat">Recommended</button>
    </nav>
</div>
)

}
export default Nav;



