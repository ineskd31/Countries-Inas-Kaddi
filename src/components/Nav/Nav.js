



export default function Nav({dark, setDark}) {
    


    return (
        <div className={dark ? "bg-black text-white flex justify-between pl-40 pr-40 h-20 items-center" : "flex justify-between pl-40 pr-40 h-20 items-center"}>

            <h1 className="text-4xl font-bold">Where in the world?</h1>

            <button onClick={() => {setDark(!dark); console.log("okey dark")}} className={dark ? "bg-white text-black rounded-xl p-2 pl-5 pr-5" : "bg-black text-white rounded-xl p-2 pl-5 pr-5"}>Dark Mode</button>

        </div>
    )
}
