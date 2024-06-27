import React, { useEffect } from 'react'
import { useState } from 'react'
const Manager = () => {
    const [form, setform] = useState({site: '', username: '', password: ''})
    const [passwordArray, setpasswordArray] = useState([])
    
    
    

    const savePassword = () => {
      console.log(form);
     
    }
    

    const handleChange = (e) => {
      setform({...form,[e.target.name]: e.target.value})
    }
    

    
    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div></div>

            <div className="container mx-auto">

                <h1 className="text-4xl font-bold text-center">
                    <span className="text-green-700">&lt;</span>
                    Pass
                    <span className="text-green-700">OP/&gt;</span>
                </h1>
                <p className='text-green-900 text-lg text-center'>Your Own Password Manager</p>
                <div className="flex flex-col p-4 text-black gap-8 items-center">

                    <input 
                    className="rounded-full border border-green-500 w-full px-3 py-1"
                    value = {form.site}
                    type="text" 
                    name="site" 
                    id="" 
                    placeholder='Enter Website URL'
                    onChange={handleChange}
                    />
                    <div className="flex w-full justify-between gap-8">

                        <input
                        type = "text"
                        value = {form.username}
                        className="rounded-full border border-green-500 w-full px-3 py-1"
                        placeholder='Enter Username'
                        name = "username"
                        onChange={handleChange}
                        />
                            <div className="relative">
                            
                        <input 
                        type="password" 
                        value = {form.password} 
                        className="rounded-full border border-green-500 w-full px-3 py-1" 
                        placeholder='Enter Password'
                        name = "password"
                                        onChange={handleChange}
                        
                        />
                        <span className="absolute right-0"></span>
                        </div>

                    </div>
                    <button onClick = {savePassword} 
                    className="flex items-center gap-2 bg-green-500 rounded-full px-5 py-2 w-fit hover:bg-white hover:text-green-500 hover: border-2 border-green-800" 
                    >
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover">
                        </lord-icon>
                        Add Password</button>
                </div>
            </div>

        </>
    )
};

export default Manager



