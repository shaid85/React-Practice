import { useEffect, useRef, useState } from 'react'
import Pills from './Pills'

function SearchInput() {
    const [searchTerm, setSearchTerm] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const [selectedUsers, setSelectedUsers] = useState([])
  
    const [selectdUserSet, setSelectdUserSet] = useState(new Set())
  
    const inputRef = useRef()
  
    // https://dummyjson.com/users/search?q=John
    useEffect(() => {
      const fetchUsers = () => {
        if (searchTerm.trim() === "") {
          setSuggestions([])
          return
        }
        fetch(`https://dummyjson.com/users/search?q=${searchTerm}`)
          .then((res) => res.json())
          .then((data) => setSuggestions(data))
          .catch((err) => {
            console.log(err);
          })
      }
      fetchUsers()
    }, [searchTerm])
    
    const handleSelectUser = (user) => {
      setSelectedUsers([...selectedUsers, user])
      setSelectdUserSet(new Set([...selectdUserSet, user.email]))
      setSearchTerm("")
      setSuggestions([])
      inputRef.current.focus()
    }
  
    const handleRemoveUser = (user) => {
      const updatedUsers = selectedUsers.filter(
        (item) => item.id !== user.id
      )
      setSelectedUsers(updatedUsers)
  
      const updatedEmails = new Set(selectdUserSet)
      updatedEmails.delete(user.email)
      setSelectdUserSet(updatedEmails)
    }
  
    const handleKeyDown = (e) => {
      if(e.key === 'Backspace' && e.target.value === "" && selectedUsers.length > 0) {
        const lastUser = selectedUsers[selectedUsers.length -1]
        handleRemoveUser(lastUser)
        setSuggestions([])
      }
    }
  
    return <div className="w-full mx-auto max-w-6xl px-4 py-20 flex relative">
      <div className=" w-full flex items-center flex-wrap gap-2 p-2 rounded-xl border border-solid border-slate-900">
        {/* plils */}
        {selectedUsers.map((user) => {
          return (
            <Pills
              key={user.email}
              image={user.image}
              text={`${user.firstName} ${user.lastName}`}
              onClick={()=>handleRemoveUser(user)}
             />
          )
        })}
        {/* input feild with search suggestions */}
        <div className="">
          
          <input className=' w-full px-3 py-2 bg-white placeholder-slate-400 focus:outline-none  block rounded-md ' 
          id='search'
          ref={inputRef}
          placeholder='Search for a user'
          type="text" 
          value={searchTerm}
          onChange={(e)=> setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          />
          {/* search suggestions */}
          <div className="w-ful ">
              <ul className=' max-h-[300px] overflow-y-scroll list-none p-0 m-0 absolute bg-white border border-solid border-slate-800 z-10'>
                 {suggestions.users?.map((user, index) => {
                  return !selectdUserSet.has(user.email) ? (
                    <li key={user.email} className='flex items-center gap-3 px-3 py-2 cursor-pointer border-b border-solid border-slate-800 last:border-0 hover:bg-slate-400'
                    onClick={() => handleSelectUser(user)}
                    >
                      <img 
                        src={user.image}
                        alt={`${user.firstName}
                        ${user.lastName}`}
                        className=' h-5'
                      />
                      <span>{`${user.firstName}
                        ${user.lastName}`}</span>
                    </li>
                  ) : <></>
                 })} 
              </ul>
          </div>
        </div>
      </div>
    </div>
  }

export default SearchInput