import { Link } from "react-router-dom"
import { MobileNav } from "./MoblileNav"
import { MainNav } from "./MainNav"
export const Header =()=>{
    return (
        <div className="border-b-2 border-b-orange-500 py-6">
            <div className="container mx-auto flex justify-between items-center">
        <Link className="text-3xl font-bold tracking-tight text-orange-500 " to={"/"}>
        HungerBull
        </Link>
        <div className="md:hidden">
            <MobileNav/>
        </div>
        <div className="hidden md:block">
            <MainNav/>
        </div>
            </div>

    
        </div>
    )
}