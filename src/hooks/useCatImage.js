import { useState, useEffect } from "react";
import { getRandomImage } from "../service/image"

const CAT_PREFIX_IMAGE_URL = "https://cataas.com/"

export function useCatImage ({ fact }) {
    const [imageUrl, setImageUrl] = useState();
        // Recuperar la imagen cada vez que tenemos una cita nueva
        useEffect(() => {
            if(!fact) return
            
            const threeFirstWords = fact.split(' ', 3).join(' ');
    
            getRandomImage({ threeFirstWords }).then(imageUrl => setImageUrl(imageUrl));
            
        }, [fact])
        
    return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
} // { imageUrl: "https:// ..."}