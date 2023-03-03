import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";



export default function Info({img}) {
    return (
        <div>
            <Nav />

            <div className="bg-gray-100 h-screen pl-40 pt-10 pr-40">
                
                <div className="mb-20">
                    <Link to={"/"}>
                        <button className="bg-white p-3 pl-5 pr-5 rounded-xl shadow-lg">BACK</button>
                    </Link>
                </div>

                <div className="flex">
                    <div className=" w-1/2 border border-red-500">
                        <img className="h-full w-full" src={img} alt="" />
                    </div>

                    <div className="flex flex-col gap-8 border border-blue-600 p-20 w-1/2">
                        <h1 className="text-4xl font-bold">Argentina</h1>

                        <div className="flex gap-28">
                            <div className="flex flex-col gap-3">
                                <p className="text-2xl"><span className="text-bold">Native name: </span></p>
                                <p className="text-2xl"><span className="text-bold">Population: </span></p>
                                <p className="text-2xl"><span className="text-bold">Region: </span></p>
                                <p className="text-2xl"><span className="text-bold">Sub Region: </span></p>
                                <p className="text-2xl"><span className="text-bold">Capital: </span></p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <p className="text-2xl"><span className="text-bold">Top Level Domain: </span></p>
                                <p className="text-2xl"><span className="text-bold">Currencies: </span></p>
                                <p className="text-2xl"><span className="text-bold">Languages: </span></p>
                            </div>
                        </div>

                        <div className="flex items-center gap-5">
                            <h1 className="text-2xl text-bold">Border countries : </h1>

                            <button className="bg-white rounded-lg p-2 shadow-lg">Pays1</button>
                            <button className="bg-white rounded-lg p-2 shadow-lg">Pays2</button>
                            <button className="bg-white rounded-lg p-2 shadow-lg">Pays3</button>
                            <button className="bg-white rounded-lg p-2 shadow-lg">Pays4</button>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}
