import { Link } from "react-router-dom";




export default function Card({ img, pays, population, region, capital, dark }) {
    return (
        <div>
            <Link to={"/info"}>
                <div className="mb-10">
                    <div className="card bg-white shadow-lg shadow-gray-400 rounded-xl overflow-hidden">
                        <div className="h-52 w-80">
                            <img className=" h-full w-full" src={img} />
                        </div>

                        <div className={dark ? " bg-black text-white pl-5 pt-5 pb-5 flex flex-col gap-2 items-start h-52" : "pl-5 pt-5 pb-5 flex flex-col gap-2 items-start h-52"}>
                            <h1 className="text-2xl font-bold w-72">{pays}</h1>
                            <h2 className={dark ? " text-white" : " text-black"}> <span className="font-bold">Population:</span>  {population}</h2>
                            <h2 className={dark ? " text-white" : " text-black"}> <span className="font-bold">Region:</span>  {region}</h2>
                            <h2 className={dark ? " text-white" : " text-black"}> <span className="font-bold">Capital:</span>  {capital}</h2>

                        </div>

                    </div>
                </div>
            </Link>


        </div>
    )
}
