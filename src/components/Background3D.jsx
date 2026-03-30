import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Sphere, Torus, Box } from "@react-three/drei";
import * as THREE from "three";

// Helper functions (unchanged)
function generatePoints(count, radius) {
  const points = [];
  for (let i = 0; i < count; i++) {
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const r = radius * Math.cbrt(Math.random());
    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);
    points.push(new THREE.Vector3(x, y, z));
  }
  return points;
}

function getConnections(points, maxDistance) {
  const connections = [];
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const dist = points[i].distanceTo(points[j]);
      if (dist < maxDistance) {
        connections.push([i, j, dist]);
      }
    }
  }
  return connections;
}

// Neural network with subdued colors
function NeuralNetwork({ nodeCount = 180, radius = 3.5, maxDist = 1.8 }) {
  const points = useMemo(() => generatePoints(nodeCount, radius), []);
  const connections = useMemo(() => getConnections(points, maxDist), [points]);
  const pointsRef = useRef();
  const linesRef = useRef();

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.2;
    }
    if (linesRef.current) {
      const material = linesRef.current.material;
      if (material) {
        const t = (Math.sin(state.clock.getElapsedTime() * 2) + 1) / 2;
        material.color.setHSL(0.6 + t * 0.05, 0.8, 0.4); // less saturated, darker
      }
    }
  });

  const linePositions = [];
  connections.forEach(([i, j]) => {
    linePositions.push(points[i].x, points[i].y, points[i].z);
    linePositions.push(points[j].x, points[j].y, points[j].z);
  });
  const lineGeometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(new Float32Array(linePositions), 3));
    return geom;
  }, [linePositions]);

  const nodePositions = points.flatMap(p => [p.x, p.y, p.z]);
  const nodeGeometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(new Float32Array(nodePositions), 3));
    return geom;
  }, [nodePositions]);

  return (
    <group ref={pointsRef}>
      <points>
        <pointsMaterial color="#6b21a5" size={0.06} transparent opacity={0.5} blending={THREE.AdditiveBlending} />
        <bufferGeometry {...nodeGeometry} />
      </points>
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial color="#a855f7" transparent opacity={0.25} blending={THREE.AdditiveBlending} />
      </lineSegments>
    </group>
  );
}

// Binary sprites – reduced opacity and brightness
function BinarySprites({ count = 150, radius = 5 }) {
  const [textures] = useState(() => {
    const createTexture = (char, color) => {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "rgba(0,0,0,0)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = "Bold 48px 'Courier New'";
      ctx.fillStyle = color;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(char, canvas.width/2, canvas.height/2);
      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      return texture;
    };
    return {
      "0": createTexture("0", "#a855f7"),
      "1": createTexture("1", "#8b5cf6")
    };
  });

  const spritesRef = useRef();
  const positions = useMemo(() => {
    const pos = [];
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      pos.push(new THREE.Vector3(x, y, z));
    }
    return pos;
  }, [count, radius]);

  useFrame(() => {
    if (spritesRef.current) spritesRef.current.rotation.y += 0.002;
  });

  return (
    <group ref={spritesRef}>
      {positions.map((pos, idx) => {
        const char = Math.random() > 0.5 ? "0" : "1";
        const texture = textures[char];
        return (
          <sprite key={idx} position={[pos.x, pos.y, pos.z]}>
            <spriteMaterial map={texture} color={0xffffff} transparent opacity={0.35} blending={THREE.AdditiveBlending} />
          </sprite>
        );
      })}
    </group>
  );
}

// Digital Brain – reduced glow
function DigitalBrain() {
  const sphereRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const coreRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ring1Ref.current) ring1Ref.current.rotation.z = t * 0.3;
    if (ring2Ref.current) ring2Ref.current.rotation.x = t * 0.2;
    if (coreRef.current) coreRef.current.scale.setScalar(1 + Math.sin(t * 3) * 0.05);
  });

  return (
    <group position={[0, 0, 0]}>
      <Sphere args={[1.2, 32, 32]} ref={sphereRef}>
        <meshStandardMaterial color="#a855f7" emissive="#4c1d95" emissiveIntensity={0.3} transparent opacity={0.2} wireframe />
      </Sphere>
      <Sphere args={[0.8, 32, 32]} ref={coreRef}>
        <meshStandardMaterial color="#8b5cf6" emissive="#6d28d9" emissiveIntensity={0.6} />
      </Sphere>
      <Torus args={[1.5, 0.05, 64, 200]} ref={ring1Ref} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={0.3} />
      </Torus>
      <Torus args={[1.5, 0.05, 64, 200]} ref={ring2Ref} rotation={[0, Math.PI / 2, 0]}>
        <meshStandardMaterial color="#c084fc" emissive="#c084fc" emissiveIntensity={0.2} />
      </Torus>
    </group>
  );
}

// Data particles – softer
function DataParticles({ count = 100 }) {
  const particlesRef = useRef();
  const positions = useMemo(() => {
    const pos = [];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 2.2 + Math.random() * 0.5;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = (Math.random() - 0.5) * 1.5;
      pos.push(new THREE.Vector3(x, y, z));
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      const time = state.clock.getElapsedTime();
      positions.forEach((pos, idx) => {
        const angle = time * 0.5 + idx * 0.1;
        const r = 2.2;
        pos.x = Math.cos(angle) * r;
        pos.z = Math.sin(angle) * r;
        pos.y = Math.sin(angle * 2) * 0.3;
      });
      const geometry = particlesRef.current.geometry;
      const attribute = geometry.attributes.position;
      const array = attribute.array;
      positions.forEach((pos, i) => {
        array[i*3] = pos.x;
        array[i*3+1] = pos.y;
        array[i*3+2] = pos.z;
      });
      attribute.needsUpdate = true;
    }
  });

  const particlePositions = positions.flatMap(p => [p.x, p.y, p.z]);
  const particleGeometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(new Float32Array(particlePositions), 3));
    return geom;
  }, [particlePositions]);

  return (
    <points ref={particlesRef}>
      <pointsMaterial color="#a855f7" size={0.05} transparent opacity={0.5} blending={THREE.AdditiveBlending} />
      <bufferGeometry {...particleGeometry} />
    </points>
  );
}

// Robot arm – muted
function RobotArm() {
  const groupRef = useRef();
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.5;
      groupRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={[2.5, -1, 1.5]}>
      <Box args={[0.8, 0.2, 0.8]} position={[0, -0.2, 0]}>
        <meshStandardMaterial color="#4c1d95" metalness={0.6} roughness={0.4} />
      </Box>
      <Box args={[0.3, 0.8, 0.3]} position={[0, 0.2, 0]}>
        <meshStandardMaterial color="#8b5cf6" metalness={0.5} />
      </Box>
      <group position={[0, 0.6, 0]}>
        <Box args={[0.2, 0.6, 0.2]} position={[0, 0.3, 0]}>
          <meshStandardMaterial color="#a855f7" metalness={0.4} />
        </Box>
        <Box args={[0.4, 0.1, 0.4]} position={[0, 0.7, 0]}>
          <meshStandardMaterial color="#c084fc" metalness={0.3} />
        </Box>
      </group>
    </group>
  );
}

// Matrix rain – reduced opacity
function MatrixRain({ count = 500 }) {
  const particlesRef = useRef();
  const positions = useMemo(() => {
    const pos = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 15;
      const z = (Math.random() - 0.5) * 15 - 5;
      pos.push(new THREE.Vector3(x, y, z));
    }
    return pos;
  }, []);

  const velocities = useMemo(() => positions.map(() => 0.02 + Math.random() * 0.03), []);

  useFrame(() => {
    if (particlesRef.current) {
      positions.forEach((pos, i) => {
        pos.y -= velocities[i];
        if (pos.y < -5) {
          pos.y = 5;
          pos.x = (Math.random() - 0.5) * 20;
        }
      });
      const geometry = particlesRef.current.geometry;
      const attribute = geometry.attributes.position;
      const array = attribute.array;
      positions.forEach((pos, i) => {
        array[i*3] = pos.x;
        array[i*3+1] = pos.y;
        array[i*3+2] = pos.z;
      });
      attribute.needsUpdate = true;
    }
  });

  const particlePositions = positions.flatMap(p => [p.x, p.y, p.z]);
  const particleGeometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(new Float32Array(particlePositions), 3));
    return geom;
  }, [particlePositions]);

  return (
    <points ref={particlesRef}>
      <pointsMaterial color="#44aa88" size={0.04} transparent opacity={0.2} blending={THREE.AdditiveBlending} />
      <bufferGeometry {...particleGeometry} />
    </points>
  );
}

export default function Background3D() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas camera={{ position: [0, 0, 9], fov: 60 }}>
        <ambientLight intensity={0.1} />
        <pointLight position={[5, 5, 5]} intensity={0.3} />
        <pointLight position={[-5, -5, -5]} intensity={0.2} color="#8b5cf6" />

        <DigitalBrain />
        <NeuralNetwork nodeCount={200} radius={4} maxDist={1.6} />
        <BinarySprites count={200} radius={5.5} />
        <DataParticles count={120} />
        <RobotArm />
        <MatrixRain count={800} />
        <Stars radius={100} depth={50} count={2000} factor={2} saturation={0} fade speed={0.5} opacity={0.3} />

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}