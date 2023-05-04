import { Stars } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { useMemo } from "react"


export default function StarsAnimated () {
    
    const starsRef = useRef()
    const starsProps = useMemo(() => ({
        radius: 200, // Radius of the inner sphere (default=100)
        depth: 50, // Depth of area where stars should fit (default=50)
        count: 5000, // Amount of stars (default=5000)
        factor: 4, // Size factor (default=4)
        saturation: 1, // Saturation 0-1 (default=0)
        fade: true, // Faded dots (default=false)
        speed: 2,
    },[]), 
    )   

    useFrame(() => {
        starsRef.current.rotation.x += 0.0001
        starsRef.current.rotation.y += 0.0001
        starsRef.current.rotation.z += 0.0001

    })
    return (
        <Stars
        ref={starsRef}
            {...starsProps}

        
        
        />
    )
}