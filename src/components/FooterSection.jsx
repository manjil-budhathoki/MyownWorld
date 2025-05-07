import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Suspense, useRef } from 'react';

function CatModel() {
  const { scene } = useGLTF('/cat.glb');
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.003;
    }
  });

  return (
    <primitive object={scene} ref={ref} scale={2.2} position={[0, -0.3, 0]} />
  );
}

function ModelCanvas() {
  return (
    <div className="flex justify-center">
      <div className="w-[160px] h-[160px]">
        <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[2, 2, 3]} intensity={0.9} />
          <Suspense fallback={null}>
            <CatModel />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default function FooterSection() {
  return (
    <>
      <ModelCanvas />
      <footer className="pt-10 pb-16 text-sm text-zinc-500">
        <div className="max-w-xl w-full mx-auto px-4 sm:px-6 lg:px-0 space-y-4">
          <p className="text-[13px]">
            © 2021 - {new Date().getFullYear()} Manjil Budhathoki. All Rights Reserved.
          </p>
          <p className="text-[13px]">www.buildwithmanjil.dev v.2025.05</p>
          <p className="text-[13px]">
            Website built using React & TailwindCSS (
            <a
              href="https://github.com/manjil-budhathoki/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-white"
            >
              view source
            </a>
            ).
          </p>
        </div>
      </footer>
    </>
  );
}
