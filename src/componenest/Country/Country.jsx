
import './country.css';
const Country = ({country}) => {
    console.log(country)
    const {name, flags, population, coatOfArms



    } = country;
    return (
        <div className='country'>
            <h3>name: {name?.common}</h3>
            <img src={flags.png}/>
            {/* <img src={coatOfArms.png}/> */}
            <p>population: {population}</p>
            
        </div>
    );
};

export default Country;