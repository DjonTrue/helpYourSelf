import React, {useState, useEffect} from "react";
import { rickAndMortyService as service } from "../services/rickAndMortyService";

const withSelectOptions = (WrappedComponent) => 
    (({
        type, 
        availableOptions,
        baseUrl, 
        ...props
    }) => {
        
        const [selectedOption, setSelectedOption] = useState(availableOptions[0])
        const [data, setData] = useState([])
        const [currentPage, setCurrentPage] = useState(1)

        useEffect(() => {
            service(`${baseUrl}${selectedOption}/?page=${currentPage}`)
                .then(data => setData(data))
                .catch(error => console.error(error))
        }, [selectedOption, currentPage])

        const onChangeOption = (event) => {
            setSelectedOption(event.target.value)
        }
        
        return (
            <>
                <hr />
                <select onChange={(event) => onChangeOption(event)} value={selectedOption}>
                    {availableOptions.map(availableOption => 
                            <option value={availableOption} key={availableOption}>
                                {availableOption}
                            </option>
                          )
                }
                </select>

                {data.results && data.results.map(element => 
                    <div key={element.id}>
                        {element.name}
                    </div>
                )}

                <div>
                    <button onClick={() => setCurrentPage(currentPage => currentPage - 1)}>Prev</button>
                    {currentPage > 0 ? currentPage : setCurrentPage(1)}
                    <button onClick={() => setCurrentPage(currentPage => currentPage + 1)}>Next</button>
                </div>
                <WrappedComponent {...props}/>
            </>
        )
    }
)

export default withSelectOptions