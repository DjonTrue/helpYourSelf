import React, {useState, useEffect} from 'react'
import withSelectOptions from '../../hoc/withSelectOptions'
import Categories from './Categories'

const StarWarsWithSelectOptions = withSelectOptions(Categories)

const StarWarsData = () => {

    const availableOptions = ['people', 'planets', 'films', 'species', 'vehicles']
    const baseUrl = 'https://swapi.dev/api/'

    return (
    <div>
        <StarWarsWithSelectOptions 
            type='starWars' 
            availableOptions={availableOptions}
            baseUrl={baseUrl}
        />
    </div>
    )
}

export default StarWarsData





// const categories = ['people', 'planets', 'films', 'species', 'vehicles']

// const StarWarsData = () => {
//     const [selectedOption, setSelectedOption] = useState('people')
//     const [data, setData] = useState([])
//     const [currentPage, setCurrentPage] = useState(1)


//     useEffect(() => {
//         rickAndMortyService(`https://swapi.dev/api/${selectedOption}?page=${currentPage}`)
//             .then(({results}) => setData(results))
//     }, [selectedOption, currentPage])
    
    
//     const onChangeOption = (event) => {
//         setSelectedOption(event.target.value)
//     }

//     return (
//         <div>
//             <hr />
//             <select onChange={(event) => onChangeOption(event)} value={selectedOption}>
//                 {categories.map(availableOption => 
//                     <option value={availableOption} key={availableOption}>
//                         {availableOption}
//                     </option>
//                 )}
//             </select>
            

//             {data && data.map(element => 
//                 <div key={element.id}>
//                     {element.name}
//                 </div>
//             )}

//             <div>
//                 <button onClick={() => setCurrentPage(currentPage => currentPage - 1)}>Prev</button>
//                 {currentPage > 0 ? currentPage : setCurrentPage(1)}
//                 <button onClick={() => setCurrentPage(currentPage => currentPage + 1)}>Next</button>
//             </div>
//         </div>
//     )
// }

// export default StarWarsData