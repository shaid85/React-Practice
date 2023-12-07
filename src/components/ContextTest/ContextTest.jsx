import React from 'react'
import UserContextProvider from '../../Context/UserContextProvider'
import Login from './Login'
import Profile from './Profile'

function ContextTest() {
  return (
    <UserContextProvider>
        <div className="py-16 bg-white dark:bg-gray-800">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h1 className="text-2xl text-gray-900 dark:text-white font-bold md:text-4xl mb-6">React Context</h1>
                        <Login />
                        <Profile />
                    </div>
                </div>
            </div>
        </div>        

    </UserContextProvider>
  )
}

export default ContextTest