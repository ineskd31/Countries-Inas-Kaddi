import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";



export default function Info({select, dark, setDark}) {

    
    let currencie;
    for (const valeur in select.currencies) {
        currencie = valeur
    }

    // ! LANGUAGE..................................................
    let tabTaal = []
    let recupTaal = () => {
        for (const proprio in select.languages) {
        return tabTaal.push(select.languages[proprio])
        }
    }
    recupTaal()
    console.log(tabTaal);



    return (
        <div>
            <Nav dark={dark} setDark={setDark}/>

            <div className={dark ? "bg-gray-800 text-white h-screen pl-40 pt-10 pr-40" : "bg-gray-100 h-screen pl-40 pt-10 pr-40"}>
                
                <div className="mb-20">
                    <Link to={"/"}>
                        <button className={dark ? "bg-black text-white p-3 pl-5 pr-5 rounded-xl shadow-lg" : "bg-white p-3 pl-5 pr-5 rounded-xl shadow-lg"}>BACK</button>
                    </Link>
                </div>

                <div className="flex">
                    <div className=" w-1/2 ">
                        <img className="h-full w-full" src={select.flags.svg} alt="" />
                    </div>

                    <div className="flex flex-col gap-10 p-16 w-1/2 pr-0">
                        <h1 className="text-4xl font-bold">{select.name.common}</h1>

                        <div className="flex gap-16">
                            <div className="flex flex-col gap-3">
                                <p className="text-2xl"><span className="text-bold">Native name :</span> {select.name.common}</p>
                                <p className="text-2xl"><span className="text-bold">Population : </span>{select.population}</p>
                                <p className="text-2xl"><span className="text-bold">Region :</span> {select.region}</p>
                                <p className="text-2xl"><span className="text-bold">Sub Region : </span>{select.subregion}</p>
                                <p className="text-2xl"><span className="text-bold">Capital : </span>{select.capital}</p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <p className="text-2xl"><span className="text-bold">Top Level Domain : </span>{select.tld}</p>
                                <p className="text-2xl"><span className="text-bold">Currencies :</span> {select.currencies[currencie].name} </p>
                                <p className="text-2xl"><span className="text-bold">Languages : </span>  
                                    {
                                        tabTaal.map((element) => {
                                            return (element)
                                        })
                                    }
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-5">
                            <h1 className="text-2xl text-bold">Border countries : </h1>

                            
                            
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}
