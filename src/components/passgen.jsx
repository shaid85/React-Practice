import { useCallback, useEffect, useRef, useState } from "react"


const PassGen = () => {
  const [length, setLength] = useState(8)
  const [isNumber, setIsneumbe] = useState()
  const [isChar, setIschar] = useState()
  const [password, setPassword] = useState()

  // useRef hook
   const passwordRef = useRef(null)

  const passwordGenaretor = useCallback( () => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if (isNumber) str += "0123456789"
      if (isChar) str += "!@#$%^&*_+-=[]{}~"

      for (let i = 1; i <= length; i++) {
        const char = Math.floor(Math.random() * str.length +1)
        pass += str.charAt(char)
      }
      setPassword(pass)
      
  }, [length,isNumber,isChar,setPassword])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 999)
    window.navigator.clipboard.writeText(password)
  }, [password])

 useEffect(() => {
  passwordGenaretor()
 }, [length,isNumber,isChar,passwordGenaretor])

    return (
      <>
        <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-4 py-2 my-20  text-white  bg-gray-500">
           <h2 className="text-center text-white p-4">Password Generator</h2>
            <div className="flex shadow rounded-lg overflow-hidden mb-4">
              <input 
              className="outline-none w-full py-1 px-3 text-black" readOnly
              placeholder="Password"
              type="text" 
              value={password} 
              ref={passwordRef}
              />
              <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
              onClick={copyPassword}>Copy</button>
            </div>
            <div className="flex text-sm gap-x-2">
              <div className="flex items-center gap-x-1">
                <input type="range" name="numrange" id="" min={6} max={40} value={length}
                className="cursor-pointer" 
                onChange={(e) => {setLength(e.target.value)}}  
                />
                <label htmlFor="numrange">Length: {length}</label>
              </div>
              <div className="flex items-center gap-x-1">
                <input type="checkbox" name="numberInput" id="numberInput"
                defaultChecked={isNumber}
                onChange={() => {
                  setIsneumbe((prev) => !prev)
                }} />
                <label htmlFor="numberInput">Numbers</label>
              </div>
              <div className="flex items-center gap-x-1">
                <input type="checkbox" name="charInput" id="charInput"
                defaultChecked={isChar}
                onChange={() => {
                  setIschar((prev) => !prev)
                }} />
                <label htmlFor="charInput">Characters</label>
              </div>
            </div>
        </div>
      </>
    ) 
  } 
  
  export default PassGen