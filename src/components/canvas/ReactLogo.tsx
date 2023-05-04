import { useAnimations, useGLTF } from "@react-three/drei"
import { useEffect } from "react"
import { useMemo } from "react"

export default function ReactLogo () {


    const actionNames = [
        'SphereAction',
        'TorusAction1',
        'TorusAction2',
        'TorusAction3',
    ]

    const reactLogo = useMemo(() => useGLTF('src/assets/reactLogo/scene.gltf'), [])
    
    const animations = useAnimations(reactLogo.animations, reactLogo.scene)
    
    useEffect(() => {

        actionNames.forEach((animationName) => {
            const action = animations.actions[animationName]
            action!.play()
        })

    },[animations])
 
    return (
        <mesh position={[0,-1,0]}>
            <primitive object={reactLogo.scene}  scale={0.4} rotation ={[0,-5,0]} />
</mesh>
    )

}