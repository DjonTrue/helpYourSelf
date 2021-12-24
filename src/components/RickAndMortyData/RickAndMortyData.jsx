import React from 'react'
import withSelectOptions from '../../hoc/withSelectOptions'
import Categories from './Categories'

const RickAndMortyWithSelectOptions = withSelectOptions(Categories)

const RickAndMortyData = () => {

    const availableOptions = ['character', 'location', 'episode']
    const baseUrl = 'https://rickandmortyapi.com/api/'

    return (
        <div>
            <RickAndMortyWithSelectOptions 
                type="RickAndMorty" 
                availableOptions={availableOptions}
                baseUrl={baseUrl}
            />
        </div>
    )
}

export default RickAndMortyData
