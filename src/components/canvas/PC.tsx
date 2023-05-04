import { useEffect, useState, useCallback, useMemo, useRef } from "react"
import { useGLTF, useAnimations, OrbitControls, Html } from "@react-three/drei"
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/three";
import { Canvas } from "@react-three/fiber";
import {useControls} from "leva";
export default function PC() {
    const [scale, setScale] = useState(0.7);
    const pc = useGLTF("src/assets/desktop_pc/scene.gltf");
    const meshRef = useRef<Mesh | null>(null); // Initialize with null and provide the type
  
    const [ref, inView] = useInView({
      threshold: 0.5,
    });
  

    const { position, rotation } = useControls({
        position: {
            value: [0, 0,0
            ], step: 0.1
        },
        rotation: {
            value: [0, 0, 0], step: 0.1
        }
    })

    useEffect(() => {
      if (meshRef.current) {
        ref(meshRef.current);
      }
    }, [meshRef, ref]);
  
    const animation = useSpring({
      scale: inView ? 20 : 1,
    });
  
    return (
        <div ref={ref} className="h-[100vh] w-[100vw] relative z-[101]">
           
            <Canvas camera={{ }}>

        <pointLight intensity={5} color={0x61dbfb} position={[0, 5, 5]} />
      <spotLight intensity={3} color={0x61dbfb} position={[0, 5, 5]} />
    <directionalLight position={[0, 10, 5]} intensity={0.5} />
      <animated.mesh ref={meshRef} scale={animation.scale}  position={[48,-50,-250]} rotation={[0,300,0]}>
                    <primitive object={pc.scene} >
                        <Html transform wrapperClass="w-[4000px] h-[2024px]" position={[-45,2,0]} rotation={[0,1.4,0]}>
                            <iframe src="./iframe.html" />
                        </Html>
        </primitive>
                </animated.mesh>
                <OrbitControls/>
            </Canvas>
            </div>
    );
  }

  
  
  
  
  
  
  