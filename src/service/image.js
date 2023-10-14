
export const getRandomImage = ({ threeFirstWords }) => {
    return fetch(`https://cataas.com/cat/says/${threeFirstWords}?json=true`)
    .then(res => res.json())
    .then(data => {
        const { url } = data;
        return url
    })
}