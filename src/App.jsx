import Colorbtn from './components/colorbtn'
import PropsAll from './components/propsall'
import PassGen from './components/passgen'


function App() {
   let description ="Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny."
  return (
    <div className='dark:bg-gray-800'>
      <h1 className='text-slate-900 font-extrabold text-3xl sm:text-3xl lg:text-4xl tracking-tight text-center dark:text-white py-8'>React Componants with TailwindCss</h1> 
      
      <PassGen/> 
      <Colorbtn/>
      <h1 className="text-center text-2xl font-bold text-gray-900 font-md md:text-3xl mb-6 mt-6">Props</h1>
      <PropsAll username ="Shaid Islam" job="Sinior Website Developer" details={description} />
      <PropsAll username ="Yusuf Ali"  job="Manager of Ali Enterprise" details={description} />

    </div>
  )
} 

export default App
