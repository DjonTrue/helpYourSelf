import React, {useState, useEffect} from 'react'
import withSelectOptions from '../../hoc/withSelectOptions';
import RickAndMortyData from '../RickAndMortyData/RickAndMortyData';
import StarWarsData from '../StarWarsData/StarWarsData';
import './dataSwitcher.css';

const DataSwitcher = () => {
    const [selectedOption, setSelectedOption] = useState('Empty')
    const availableOptions = ['Empty', 'Rick and Morty', 'Star Wars']
    
    const onChangeOption = (event) => {
        setSelectedOption(event.target.value)
    }
    
    const renderSelectData = () => {
        if(selectedOption === 'Rick and Morty') return <RickAndMortyData />
        if(selectedOption === 'Star Wars') return <StarWarsData />
    }
    

    return (
        <div>
            <select onChange={(event) => onChangeOption(event)} value={selectedOption}>
                {availableOptions.map(availableOption => 
                    <option value={availableOption} key={availableOption}>
                        {availableOption}
                    </option>
                )}
            </select>

            {renderSelectData()}
        </div>
    )
}

export default DataSwitcher
