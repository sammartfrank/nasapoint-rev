

const fetchApod = async (apiKey:string) => await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)

export const getApod = async (apiKey: string) => {

const apod = await fetchApod(apiKey)
console.log('🚀 ~ model apod', apod);

return apod
}