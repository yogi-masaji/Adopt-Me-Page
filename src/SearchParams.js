import { useState, useEffect } from 'react';
import Pet from "./Pet";
import useBreedList from "./useBreedList";
import Results from "./Results";
const Animals = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () =>{
    // const location = "jakarta, ID";
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [breeds] = useBreedList(animal);
    const [pets, setPets] = useState([]);

    useEffect(() => {
        requestPets();
    }, [])
    
    async function requestPets() {
        const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);
        const json = await res.json();

        setPets(json.pets);
    }

    return(
        <div className="search-params">
            <form 
                onSubmit = {(e) => {
                    e.preventDefault();
                    requestPets();
                }}
            >
                <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
                <label htmlFor="animal">
                    <select 
                    name="animal" 
                    id="animal" 
                    value={animal} 
                    onChange = {(e) => {
                        setAnimal(e.target.value);
                        setBreed("");
                    }}
                    onBlur = {(e) => {
                        setAnimal(e.target.value);
                        setBreed("");
                    }}
                    >
                        <option />
                        {Animals.map((animal) => (
                            <option value={animal} key={animal}>
                                {animal}
                            </option>
                        ))}
                    </select>
                </label>
                <label htmlFor="breed">
                    <select 
                    name="breed" 
                    id="breed" 
                    value={breed} 
                    onChange = {(e) => {
                        setBreed(e.target.value);
                    }}
                    onBlur = {(e) => {
                        setBreed(e.target.value);
                    }}
                    >
                        <option />
                        {breeds.map((allbreed) => (
                            <option value={allbreed} key={allbreed}>
                                {allbreed}
                            </option>
                        ))}
                    </select>
                </label>
                <button>submit</button>
            </form>
           <Results pets={pets} />
        </div>
    )
}


export default SearchParams;