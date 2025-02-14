
import Appdownload from "../assets/hero.png"
import AppStore from "../assets/APPStrore.jpg"
import SearchBar, { SearchForm } from "@/components/SearchBar"
import { useNavigate } from "react-router-dom"


export const Homepage=()=>{
    const navigate = useNavigate();

    const handleSearchSubmit = (searchFormValues: SearchForm)=>{
        navigate({
            pathname: `/search/${searchFormValues.searchQuery}`,
        });

    }
    return (
        <div className="flex flex-col gap-12 ">
            <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16 ">
                <h1 className="text-5xl font-bold tracking-tight text-orange-600">
                   Tuck into a takeaway today
                </h1>
                <span className="text-xl ">Get order on your Food</span>
                <SearchBar placeHolder="Search by City or Town" onSubmit={handleSearchSubmit}/>
            </div>
            <div className="grid md:gird-cols-2 gap-5">
                <img src={Appdownload} />
                <div className="flex flex-col items-center gap-4 text-center">
                    <span className="font-bold text-3xl tracking-tighter">
                        Order takeaway even faster!
                    </span>
                    <span>
                        Download the HungerBull App for  faster ordering and personlised recommendations
                    </span>
                    <img src={AppStore}/>
                     
                </div>

            </div>

        </div>
        
    )
}