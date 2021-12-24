import React, {useState} from 'react'
import { useEffect } from 'react/cjs/react.development'
import { rickAndMortyService } from '../../services/rickAndMortyService'

const availableResources = ['character', 'location', 'episode']

const Categories = () => {
    

    return (
        <div>

        </div>
    )
}

export default Categories





// const availableResources = ['character', 'location', 'episode']

// const Categories = () => {
//     const [selectedOption, setSelectedOption] = useState('character')
//     const [data, setData] = useState([])
//     const [currentPage, setCurrentPage] = useState(1)

//     useEffect(() => {
//         rickAndMortyService(`https://rickandmortyapi.com/api/${selectedOption}/?page=${currentPage}`)
//             .then(data => setData(data))
//             .catch(error => console.error(error))
//     }, [selectedOption, currentPage])

//     const onChangeOption = (event) => {
//         setSelectedOption(event.target.value)
//     }
    
//     return (
//         <div>
//             <hr />
//             <select onChange={(event) => onChangeOption(event)} value={selectedOption}>
//                 {availableResources.map(availableOption => 
//                     <option value={availableOption} key={availableOption}>
//                         {availableOption}
//                     </option>
//                 )}
//             </select>

//             {data.results && data.results.map(element => 
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

// export default withSelectOptions(Categories)