import { useEffect, useRef, useState } from 'react'
import {mockString} from 'string-mockery-js'
import './App.css'

function App() {

  const[mockedTitle,setMockedTitle]= useState("")

  const [mockedText,setMockedText]= useState("")

  const [mockedTextAbout,setMockedTextAbout]= useState("")

  const [isHover, setIsHover] = useState(false)

  const [animate, setAnimate]= useState("rotate-0")

  const prevAnimate = useRef<string>(animate)

  function onAnimate(){
    if (animate == "rotate-0" && prevAnimate.current=="rotate-12"){
      prevAnimate.current="-rotate-6"
      setAnimate("-rotate-6") 
    } 
    if (animate == "-rotate-6" || animate =="rotate-12" ) {
      // prevAnimate.current="rotate-0"
      setAnimate("rotate-0")
      return
    }
    if (animate == "rotate-0" && prevAnimate.current=="-rotate-6") {
      prevAnimate.current="rotate-12"
      setAnimate("rotate-12")
      return
    }
     
  }


  useEffect(()=>{
    setMockedTitle(mockString("mockery"))
    setMockedTextAbout(mockString("mockery"))
    prevAnimate.current = "rotate-12"
  },[])

  return (
    <>
      <div className="h-screen bg-white-bg flex flex-col items-center justify-around">
        <div className=''>
          <h1 className='text-6xl font-fjalla text-center mt-5'>Mock your text.</h1>
          <h2 className='text-center font-cantarell text-2xl mt-2'>Turn your text into 
          <span className='font-bold italic'>
            
            {mockedTitle}
          </span>  
          </h2>
        </div>
        <div className="flex justify-center">
          <img className={`w-1/3 justify-center ${animate}`} src="/mockery.png" alt="" />
        </div>
        
        <div className='flex flex-col justify-around items-center w-full h-1/2'>
          <textarea className="bg-blue-custom p-3 w-1/2 border-solid border-2  outline-none font-cantarell  placeholder-black placeholder:font-normal font-bold" id=""  rows={3} placeholder='Type mockery here !' onChange={(e)=>{
            onAnimate()
            setMockedText(mockString(e.target.value))
          }}></textarea>

          <div className="bg-yellow-custom p-3 w-1/2 border-solid border-2 appearance-none outline-none font-cantarell placeholder-black placeholder:font-normal font-bold flex ">
            <textarea className='bg-yellow-custom outline-none w-full' style={{resize:"none"}} disabled={true}value={mockedText} id="">
          
            </textarea>
            
            <div>
            <div className={`bg-white-bg border-2 text-sm absolute p-1 ${isHover ? "opacity-100": " opacity-0 "} transition-all -translate-y-10`}>
              Copy to clipboard
            </div>
              <img src="public/copy.svg"  onMouseEnter={()=>setIsHover(!isHover)} onMouseLeave={()=>{
                setIsHover(!isHover)
              }} onClick={()=>{
                navigator.clipboard.writeText(mockedText);
              }} className='hover:cursor-pointer active:translate-x-[0.1rem] active:translate-y-[0.1rem]' alt=""  style={{height:"1.5rem"}}/>
            </div>
          </div>
        
        </div>
       


      </div>
      <div className="h-screen bg-white-bg flex flex-col items-center pt-10">
        <h1 className="text-6xl font-fjalla">
          About
        </h1>
        <p className='font-cantarell w-1/2 text-center mt-10'>
          Website for converting your text into {mockedTextAbout}. Using package called <a className='underline italic' href="https://www.npmjs.com/package/string-mockery-js" target='_blank'>string-mockery-js. 
          </a> Both the Website and package were made by <a className='underline italic' href="https://github.com/DewaMadeWira" target='_blank'>
            Dewa. 
          </a> Hope you enjoy the website and package !
        </p>
      </div>
    </>
  )
}

export default App
