import { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Torus, Icosahedron, Stars } from "@react-three/drei";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import * as THREE from "three";

// Background 3D Scene with mouse interaction
function BackgroundScene({ mouse }) {
  const groupRef = useRef();
  const torusRef = useRef();
  const icosahedronRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.03;
      groupRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
    }

    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.2 + mouse.y * 0.5;
      torusRef.current.rotation.y = time * 0.3 + mouse.x * 0.5;
    }

    if (icosahedronRef.current) {
      icosahedronRef.current.rotation.x = time * 0.2 + mouse.y * 0.3;
      icosahedronRef.current.rotation.y = time * 0.4 + mouse.x * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.4} />
      <pointLight position={[2, 2, 2]} intensity={0.8} color="#a855f7" />
      <pointLight position={[-2, -1, 1]} intensity={0.5} color="#3b82f6" />

      <Torus
        ref={torusRef}
        args={[2.5, 0.08, 64, 200]}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, -1]}
      >
        <meshStandardMaterial color="#a855f7" emissive="#6b21a5" emissiveIntensity={0.3} />
      </Torus>

      <Icosahedron
        ref={icosahedronRef}
        args={[0.8, 0]}
        position={[3, 1.5, -2]}
      >
        <meshStandardMaterial color="#8b5cf6" wireframe emissive="#4c1d95" emissiveIntensity={0.2} />
      </Icosahedron>

      <Stars radius={5} depth={10} count={500} factor={2} saturation={0} fade speed={0.5} />
    </group>
  );
}

function Hero() {
  const [text, setText] = useState("");
  const fullText = "Software Engineer & ML Enthusiast";
  const [index, setIndex] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <BackgroundScene mouse={mouse} />
        </Canvas>
      </div>

      {/* Content: profile image + text directly on background */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Profile image */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="relative inline-block group mb-6"
        >
          <div className="absolute inset-0 rounded-full bg-linear-to-tr from-indigo-500 to-purple-600 blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-indigo-400 border-r-purple-400 animate-spin-slow"></div>
          <img
            src="/zakira-photo.jpg.jpg"
            alt="Zakira Abdurahman"
            className="w-44 h-44 md:w-56 md:h-56 mx-auto rounded-full border-4 border-indigo-400 shadow-2xl object-cover relative z-10 animate-float transition-transform duration-500 group-hover:scale-105"
            onError={(e) => (e.target.src = "https://via.placeholder.com/200?text=Zakira")}
          />
        </motion.div>

        {/* Text content – no background card */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl md:text-7xl font-extrabold bg-linear-to-r from-white via-indigo-200 to-purple-300 bg-clip-text text-transparent drop-shadow-lg"
        >
          Zakira Abdurahman
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl md:text-2xl text-indigo-200 font-medium mt-3 drop-shadow-md"
        >
          {text}
          <span className="animate-pulse">|</span>
        </motion.p>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-gray-200 max-w-2xl mx-auto mt-6 text-base md:text-lg leading-relaxed drop-shadow-sm"
        >
          Building intelligent systems with Python, React, AI, and modern full‑stack tools. Passionate about real-world impact.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-5 justify-center mt-10"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 hover:scale-105"
          >
            Explore Work
          </a>
          <a
            href="/zakira-cv.pdf.pdf"
            download
            className="px-8 py-3 rounded-full border border-indigo-400 text-indigo-300 font-semibold hover:bg-indigo-900/30 transition transform hover:-translate-y-1 hover:scale-105"
          >
            Download CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex justify-center gap-7 mt-10 text-2xl"
        >
          <a
            href="https://github.com/zakira-abdurahman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-transform hover:scale-110 drop-shadow"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/zakira-abdurahman-63283b28a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-transform hover:scale-110 drop-shadow"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="mailto:zakira.abdurahman146@gmail.com"
            className="text-gray-300 hover:text-white transition-transform hover:scale-110 drop-shadow"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a href="#about" className="text-gray-400 hover:text-purple-300 text-xl">
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </section>
  );
}

export default Hero;