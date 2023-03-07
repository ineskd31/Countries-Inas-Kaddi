import Nav from "../Nav/Nav";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import "./Home.css"


export default function Home({ setSelect, dark, setDark }) {



    let [data, setdata] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) => setdata(data))
    }, []);


    // ! FILTER PAYS.................................................
    const [filtre, setFiltre] = useState(data);
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {

        let filtrePays = data.filter(pays => pays.name.common.toLowerCase().startsWith(searchValue.toLowerCase())
        );

        setFiltre(filtrePays);
    }, [data, searchValue]);


    // ! FILTER REGION...........................................

    const [region, setRegion] = useState("All regions");

    useEffect(() => {

        if (region == "All regions") {
            setFiltre(data)
        }
        else if(region != "All regions"){
            const filtreRegion = data.filter(pays => pays.region.includes(region))
            setFiltre(filtreRegion);
        }

    }, [region]);


    // ! ALPHABETIC ORDER.......................................
    function compare(a, b) {
        if (a.name.common < b.name.common) {
            return -1;
        }
        if (a.name.common > b.name.common) {
            return 1;
        }
        return 0;
    }
    data.sort(compare);





    return (
        <div>
            <Nav dark={dark} setDark={setDark} />

            <div className={dark ? "bg-gray-800 h-full pl-40 pt-10 pr-40 " : "bg-gray-100 h-full pl-40 pt-10 pr-40 "}>

                <div className="flex items-center justify-between mb-20" >

                    <div className="bg-white p-5 w-fit flex items-center gap-5 pr-32 rounded-xl shadow-lg border border-gray-300 ">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input className="text-xl p-1" type="text" placeholder="Search for a country" onChange={(e) => setSearchValue(e.target.value)} />
                    </div>

                    <div className='rightInput'>
                        <p>{region}</p>
                        <div className="dropdown-content">
                            <p onClick={() => { setRegion("All regions")}}>All regions</p>
                            <p onClick={() => { setRegion("Africa") }}>Africa</p>
                            <p onClick={() => { setRegion("America") }}>America</p>
                            <p onClick={() => { setRegion("Asia") }}>Asia</p>
                            <p onClick={() => { setRegion("Europe") }}>Europa</p>
                            <p onClick={() => { setRegion("Oceania") }}>Oceania</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center gap-10 flex-wrap">
                    {filtre.map((element, index) => {
                        return (
                            <div onClick={() => setSelect(element)} key={index}>
                                <Card dark={dark} img={element.flags.svg} pays={element.name.common} region={element.region} capital={element.capital} population={element.population} />
                            </div>
                        )
                    })}
                </div>
            </div>



        </div>
    )
}
