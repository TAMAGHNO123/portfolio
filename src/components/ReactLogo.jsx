import React, { useRef } from 'react'
import { Float,useGLTF } from '@react-three/drei'
 function ReactLogo(props) {
    const { nodes, materials } = useGLTF('/models/react.glb')
    return (
        <Float  floatIntensity={1}>
            <group position={[8,8,0]} scale={0.014} {...props}>
                <mesh
                    
                    geometry={nodes['React-Logo_Material002_0'].geometry}
                    material={materials['Material.002']}
                    position={[0, 7.935, 18.102]}
                    rotation={[0, 0, Math.PI / 2]}
                    scale={[39.166, 39.166, 52.734]}
                />
            </group>
        </Float>
    )
}
useGLTF.preload('/models/react.glb')

export default ReactLogo
