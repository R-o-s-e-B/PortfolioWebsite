import React from "react";
import * as THREE from "three";
import { useState, useMemo, Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";
import { OrbitControls, PerspectiveCamera, Text } from "@react-three/drei";

import { charcoal } from "../constants/constants";
import { digital } from "../constants/constants";
import { threeD } from "../constants/constants";

const Development = () => {
  const [active, setActive] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const { scale, position, rotation } = useSpring({
    scale: active ? 4 : 3,
    position: active ? [0, 0, 0] : [0, 0, 14], // Change position when active
    rotation: active !== null ? [0, 0, 0] : [0, 0, 0],
  });
  const [charcHoveredIndex, setCharcHoveredIndex] = useState(null);
  const [digitalHoveredIndex, setDigitalHoveredIndex] = useState(null);
  const [threeDHoveredIndex, setThreeDHoveredIndex] = useState(null);

  const charcItem = useRef();
  const handlePlaneClick = (index) => {
    setActive(true);
    setSelectedIndex(index);
    controls.current.reset();
    useFrame(() => {
      controls.current.position.y += 4;
    }); // Reset orbit controls
  };

  const controls = useRef();

  const positionArray = [-10, -5, 0, 5];
  const charcTextures = useMemo(() => {
    return charcoal.map((path) => new THREE.TextureLoader().load(path));
  }, []);

  const digitalTextures = useMemo(() => {
    return digital.map((path) => new THREE.TextureLoader().load(path));
  }, []);

  const threeDTextures = useMemo(() => {
    return threeD.map(({ image }) => new THREE.TextureLoader().load(image));
  }, [threeD]);

  return (
    <Canvas camera={{ position: [0, 0, 14] }} shadows>
      <Suspense>
        {/* <perspectiveCamera position={[0, 0, 30]} fov={90} near={0.1} far={80} /> */}
        <OrbitControls ref={controls} />
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <Text
          fontSize={0.3}
          position-x={-12}
          position-y={2}
          position-z={6}
          rotation={[0, Math.PI / 4, 0]}
          color="black"
        >
          Charcoal and graphite
        </Text>
        {charcTextures.map((texture, index) => (
          <animated.mesh
            ref={charcItem}
            scale={charcHoveredIndex === index ? scale : 3}
            rotation={[0, Math.PI / 4, 0]}
            onClick={() => handlePlaneClick()}
            onPointerEnter={() => {
              setCharcHoveredIndex(index);
            }}
            onPointerLeave={() => setCharcHoveredIndex(null)}
            position={
              active && selectedIndex === index
                ? [0, 0, 0]
                : [-index * 3, 0, index * 1.5]
            }
          >
            <planeGeometry />
            <meshBasicMaterial map={texture} />
          </animated.mesh>
        ))}

        {digitalTextures.map((texture, index) => (
          <>
            <Text
              fontSize={0.4}
              position={[10, -1.4, 5]}
              rotation={[0, -Math.PI / 4, 0]}
              color="black"
            >
              Digital portraits on Krita and Photoshop
            </Text>
            <animated.mesh
              scale={digitalHoveredIndex === index ? scale : 3}
              rotation={[0, -Math.PI / 4, 0]}
              onClick={() => {
                setActive(true);
              }}
              onPointerEnter={() => {
                setDigitalHoveredIndex(index);
              }}
              onPointerLeave={() => setDigitalHoveredIndex(null)}
              position={[-Math.sin(30) * index * 3, -4, index * 1.5]}
            >
              <planeGeometry />
              <meshBasicMaterial map={texture} />
            </animated.mesh>
          </>
        ))}

        {threeDTextures.map((texture, index) => (
          <>
            {threeDHoveredIndex === index ? (
              <Text
                position={[positionArray[index], 6.3, index * 1.5]}
                fontSize={0.4}
                color="black"
              >
                {threeD[index].info}
              </Text>
            ) : null}

            <animated.mesh
              scale={threeDHoveredIndex === index ? scale : 3}
              onClick={() => {
                setActive(true);
              }}
              onPointerEnter={() => {
                setThreeDHoveredIndex(index);
              }}
              onPointerLeave={() => setThreeDHoveredIndex(null)}
              position={[positionArray[index], 4, index * 1.5]}
            >
              <planeGeometry />
              <meshBasicMaterial map={texture} />
            </animated.mesh>
          </>
        ))}
      </Suspense>
    </Canvas>
  );
};

export default Development;
