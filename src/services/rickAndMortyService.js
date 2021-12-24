export const rickAndMortyService =  async (url) => {
    const response = await fetch(url)
        .then(data => data.json())
        .then(data => data)

    return response
}