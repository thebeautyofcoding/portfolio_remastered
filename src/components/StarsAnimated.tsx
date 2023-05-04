import { Stars } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { useMemo } from "react"
import { Object3D } from "three"


export default function StarsAnimated () {
    interface StarsProps {
        radius: number;
        depth: number;
        count: number;
        factor: number;
        saturation: number;
        fade: boolean;
        speed: number;
      }
    const starsRef = useRef<Object3D> ()
    const starsProps: StarsProps = useMemo(() => ({
        radius: 200,
        depth: 50,
        count: 5000,
        factor: 4,
        saturation: 1,
        fade: true,
        speed: 2,
      }), []);
    

    useFrame(() => {
        if (!starsRef.current) return
      
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