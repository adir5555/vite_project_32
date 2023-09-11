import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/country";
import './Contries.css';


const Contain = () => {
    const [todayby, stateby]= useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data =>stateby(data))
    },[])
    return (
        <div >
            <h3>contain: {todayby.length}</h3>
           <div className="country-continer">
           {
                todayby.map(country => <Country key={country.cca} country={country}></Country>)
            }
           </div>

            
        </div>
    );
};

export default Contain;