import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Island from '../models/Island'

{/*<div className='absolute top-28 left-0 z-10 flex items-center justify-center'>
  POPUP
</div>*/}

const Home = () => {
  return (
    <section className='w-full h-screen relative'>
      <Canvas className='w-full h-full bg-transparent'
      camera={{near: 0.1, far: 100}}
      >
        <Suspense fallback={<Loader/>}>
          <Island />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home
