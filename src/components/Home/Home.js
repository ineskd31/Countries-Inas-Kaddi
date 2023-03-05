import Nav from "../Nav/Nav";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";



export default function Home({setSelect}) {

    let [data, setdata] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) => setdata(data))
    }, []);


    // ! FILTER.................................................
    const [filtre, setFiltre] = useState(data);
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {

        const filtrePays = data.filter(pays => pays.name.common.toLowerCase().startsWith(searchValue.toLowerCase())
        );

        setFiltre(filtrePays);
    }, [data, searchValue]);

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
            <Nav />

            <div className="bg-gray-100 h-full pl-40 pt-10 pr-40 ">

                <div className="flex items-center justify-between mb-20" >

                    <div className="bg-white p-5 w-fit flex items-center gap-5 pr-32 rounded-xl shadow-lg border border-gray-300 ">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input className="text-xl p-1" type="text" placeholder="Search for a country" onChange={(e) => setSearchValue(e.target.value)} />
                    </div>

                    <div>
                        <select id="countries" className="text-lg bg-white border border-gray-300 rounded-xl focus:ring-blue-500 focus:border-blue-500 block p-7 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-lg">
                            <option>Choose a country</option>
                            <option>Europe</option>
                            <option>Africa</option>
                            <option>America</option>
                            <option>Asia</option>
                        </select>
                    </div>
                </div>

                <div className="flex justify-center gap-10 flex-wrap">
                    {filtre.map((element, index) => {
                        return (
                            <div onClick={() => setSelect(element)} key={index}>
                                <Card img={element.flags.svg} pays={element.name.common} region={element.region} capital={element.capital} population={element.population} />
                            </div>
                        )
                    })}
                </div>
            </div>



        </div>
    )
}
