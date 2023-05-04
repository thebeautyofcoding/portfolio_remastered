import { useAnimations, useGLTF } from "@react-three/drei"
import { useEffect } from "react"

export default function ReactLogo () {

    const reactLogo =  useGLTF('/reactLogo/scene.gltf')
    
    const animations = useAnimations(reactLogo.animations, reactLogo.scene)
    
    useEffect(() => {
        const actionNames = [
            'SphereAction',
            'TorusAction1',
            'TorusAction2',
            'TorusAction3',
        ]
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