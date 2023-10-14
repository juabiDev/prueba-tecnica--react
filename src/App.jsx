import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'


export function App () {
    const { fact, refreshFact} = useCatFact()
    const { imageUrl } = useCatImage({ fact })

    const handleClick = async () => {
        refreshFact();
    }

    return (
        <main style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "0 auto",
            fontFamily: "system-ui",
            maxWidth: "800px"
        }}>
            <h1>App de Gatitos</h1>
             <button onClick={handleClick}>Get new Fact</button>

             {fact && <p>{fact}</p> } {/* renderizado condicional */}
             {imageUrl && <img style={{maxWidth: "400px"}} src={`${imageUrl}`} alt={`image extracted using the first three words for ${fact}`} />}
        </main>
    )
}
