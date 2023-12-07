import Colorbtn from './components/colorbtn'
import PropsAll from './components/propsall'
import PassGen from './components/passgen'


function App() {
   let description ="Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny."
  return (
    <>
      <h1 className='text-slate-900 font-extrabold text-3xl sm:text-3xl lg:text-4xl tracking-tight text-center dark:text-white my-8'>React Componants with TailwindCss</h1> 
      <Colorbtn/>
      <PropsAll username ="Shaid Islam" job="Sinior Website Developer" details={description} />
      <PropsAll username ="Yusuf Ali"  job="Manager of Ali Enterprise" details={description} />
      <PassGen/>
    </>
  )
} 

export default App
