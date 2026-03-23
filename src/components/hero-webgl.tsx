import { Canvas, extend, useFrame } from "@react-three/fiber"
import { useAspect, useTexture } from "@react-three/drei"
import { useMemo, useRef, useState, useEffect } from "react"
import * as THREE from "three"

const TEXTUREMAP = { src: "https://i.postimg.cc/XYwvXN8D/img-4.png" }
const DEPTHMAP = { src: "https://i.postimg.cc/2SHKQh2q/raw-4.webp" }

extend(THREE as unknown as Record<string, unknown>)

const WIDTH = 300
const HEIGHT = 300

const Scene = () => {
  const [rawMap, depthMap] = useTexture([TEXTUREMAP.src, DEPTHMAP.src])
  const meshRef = useRef<THREE.Mesh>(null)

  const material = useMemo(() => {
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `

    const fragmentShader = `
      uniform sampler2D uTexture;
      uniform sampler2D uDepthMap;
      uniform vec2 uPointer;
      uniform float uProgress;
      uniform float uTime;
      varying vec2 vUv;

      // Simple noise function
      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
      }

      float noise(vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);
        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      void main() {
        vec2 uv = vUv;

        // Depth-based displacement
        float depth = texture2D(uDepthMap, uv).r;
        vec2 displacement = depth * uPointer * 0.01;
        vec2 distortedUv = uv + displacement;

        // Base texture
        vec4 baseColor = texture2D(uTexture, distortedUv);

        // Create scanning effect
        float aspect = ${WIDTH}.0 / ${HEIGHT}.0;
        vec2 tUv = vec2(uv.x * aspect, uv.y);
        vec2 tiling = vec2(120.0);
        vec2 tiledUv = mod(tUv * tiling, 2.0) - 1.0;

        float brightness = noise(tUv * tiling * 0.5);
        float dist = length(tiledUv);
        float dot = smoothstep(0.5, 0.49, dist) * brightness;

        // Flow effect based on progress
        float flow = 1.0 - smoothstep(0.0, 0.02, abs(depth - uProgress));

        // Red scanning overlay
        vec3 mask = vec3(dot * flow * 10.0, 0.0, 0.0);

        // Combine effects
        vec3 final = baseColor.rgb + mask;

        gl_FragColor = vec4(final, 1.0);
      }
    `

    return new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: rawMap },
        uDepthMap: { value: depthMap },
        uPointer: { value: new THREE.Vector2(0, 0) },
        uProgress: { value: 0 },
        uTime: { value: 0 },
      },
      vertexShader,
      fragmentShader,
    })
  }, [rawMap, depthMap])

  const [w, h] = useAspect(WIDTH, HEIGHT)

  useFrame(({ clock, pointer }) => {
    if (material.uniforms) {
      material.uniforms.uProgress.value = Math.sin(clock.getElapsedTime() * 0.5) * 0.5 + 0.5
      material.uniforms.uPointer.value = pointer
      material.uniforms.uTime.value = clock.getElapsedTime()
    }
  })

  const scaleFactor = 0.3
  return (
    <mesh ref={meshRef} scale={[w * scaleFactor, h * scaleFactor, 1]} material={material}>
      <planeGeometry />
    </mesh>
  )
}

export const Hero3DWebGL = () => {
  const titleWords = "Quest 6".split(" ")
  const subtitle = "Придумай испытание — герои его пройдут."
  const [visibleWords, setVisibleWords] = useState(0)
  const [subtitleVisible, setSubtitleVisible] = useState(false)
  const [inputVisible, setInputVisible] = useState(false)
  const [quest, setQuest] = useState("")
  const [delays, setDelays] = useState<number[]>([])
  const [subtitleDelay, setSubtitleDelay] = useState(0)

  useEffect(() => {
    setDelays(titleWords.map(() => Math.random() * 0.07))
    setSubtitleDelay(Math.random() * 0.1)
  }, [titleWords.length])

  useEffect(() => {
    if (visibleWords < titleWords.length) {
      const timeout = setTimeout(() => setVisibleWords(visibleWords + 1), 600)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => setSubtitleVisible(true), 800)
      return () => clearTimeout(timeout)
    }
  }, [visibleWords, titleWords.length])

  useEffect(() => {
    if (subtitleVisible) {
      const timeout = setTimeout(() => setInputVisible(true), 700)
      return () => clearTimeout(timeout)
    }
  }, [subtitleVisible])

  return (
    <div className="h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-black to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-black to-transparent" />
      </div>

      <div className="h-screen items-center w-full absolute z-[60] px-10 flex justify-center flex-col">
        <div className="text-3xl md:text-5xl xl:text-7xl 2xl:text-8xl font-extrabold font-orbitron uppercase">
          <div className="flex space-x-2 lg:space-x-6 overflow-hidden text-white">
            {titleWords.map((word, index) => (
              <div
                key={index}
                className={index < visibleWords ? "fade-in" : ""}
                style={{
                  animationDelay: `${index * 0.13 + (delays[index] || 0)}s`,
                  opacity: index < visibleWords ? undefined : 0,
                  color: index === 1 ? "#ef4444" : "white",
                }}
              >
                {word}
              </div>
            ))}
          </div>
        </div>
        <div className="text-xs md:text-xl xl:text-2xl 2xl:text-3xl mt-4 overflow-hidden text-white font-bold max-w-4xl mx-auto text-center px-4">
          <div
            className={subtitleVisible ? "fade-in-subtitle" : ""}
            style={{
              animationDelay: `${titleWords.length * 0.13 + 0.2 + subtitleDelay}s`,
              opacity: subtitleVisible ? undefined : 0,
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* Adventure Input */}
        <div
          className="mt-8 w-full max-w-2xl mx-auto transition-all duration-700"
          style={{ opacity: inputVisible ? 1 : 0, transform: inputVisible ? "translateY(0)" : "translateY(20px)" }}
        >
          <div className="relative flex items-center">
            <input
              type="text"
              value={quest}
              onChange={(e) => setQuest(e.target.value)}
              placeholder="Введи испытание для команды... например: «Выжить в вулканическом лабиринте»"
              className="w-full bg-white/5 border border-red-500/40 text-white placeholder-white/30 rounded-xl px-6 py-4 pr-36 text-sm md:text-base font-geist focus:outline-none focus:border-red-500 transition-colors"
            />
            <button className="absolute right-2 bg-red-500 hover:bg-red-600 text-white font-bold font-orbitron text-sm px-5 py-2.5 rounded-lg transition-colors uppercase tracking-wide">
              Начать
            </button>
          </div>
          <p className="text-white/30 text-xs text-center mt-3 font-space-mono">
            6 героев уже ждут твоего задания
          </p>
        </div>
      </div>

      <Canvas
        flat
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
        }}
        camera={{ position: [0, 0, 1] }}
        style={{ background: "#000000" }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}

export default Hero3DWebGL