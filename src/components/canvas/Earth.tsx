import { useEffect, useState, useCallback, useMemo } from "react"
import { useGLTF, useAnimations } from "@react-three/drei"



export default function Earth () {


    const actionNames = [
        'Base Stack',
    ]
    const [scale,setScale]=useState(0.7)
    const memoizedEarth = useGLTF('src/assets/earth/scene.gltf')

 
    const animations = useAnimations(memoizedEarth.animations, memoizedEarth.scene)
    

    const onScroll = useCallback((e) => {
        
        const percentage = window.scrollY / (document.body.scrollHeight - window.innerHeight)
        const newScale = 0.7 + 1.5 * percentage
        setScale(newScale)

    }, [])


    useEffect(() => {
        actionNames.forEach((actionName) => {
            const action = animations.actions[actionName]
            action!.play()
        })
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)

    }, [animations, onScroll])
    
    return (
        <mesh position={[0,-1,0]}>
            <primitive object={memoizedEarth.scene} scale={scale} />
        </mesh>
    )

}


