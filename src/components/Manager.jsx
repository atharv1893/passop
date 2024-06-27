import React, { useEffect } from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import 'react-toastify/dist/ReactToastify.css';
const Manager = () => {
    const [form, setform] = useState({ site: '', username: '', password: '' })
    const [passwordArray, setpasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem('passwords')
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }
    }, [])




    const savePassword = () => {

        setpasswordArray([...passwordArray,{...form, id:uuidv4()}])
        localStorage.setItem('passwords', JSON.stringify([...passwordArray,{...form, id:uuidv4()}]))
        console.log([...passwordArray, form])
        setform({ site: '', username: '', password: '' })

    }
    const deletePassword = (id) => {
            console.log("Deleting Password", id)
      
        let confirm = window.confirm("Are you sure you want to delete this password?")
        if(confirm){
            setpasswordArray(passwordArray.filter(item=>item.id!==id))
            localStorage.setItem('passwords', JSON.stringify(passwordArray.filter(item=>item.id!==id)))
        }


    }
    const editPassword = (id) => {
            setform(passwordArray.filter(i=>i.id===id)[0])
            setpasswordArray(passwordArray.filter(item=>item.id!==id))
        }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }



    const notify = (text) => {
        navigator.clipboard.writeText(text)
        toast.info('Text Copied 📜', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",

        });
    };


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
                        value={form.site}
                        type="text"
                        name="site"
                        id=""
                        placeholder='Enter Website URL'
                        onChange={handleChange}
                    />
                    <div className="flex w-full justify-between gap-8">

                        <input
                            type="text"
                            value={form.username}
                            className="rounded-full border border-green-500 w-full px-3 py-1"
                            placeholder='Enter Username'
                            name="username"
                            onChange={handleChange}
                        />
                        <div className="relative">

                            <input
                                type="password"
                                value={form.password}
                                className="rounded-full border border-green-500 w-full px-3 py-1"
                                placeholder='Enter Password'
                                name="password"
                                onChange={handleChange}

                            />
                            <span className="absolute right-0"></span>
                        </div>

                    </div>
                    <button onClick={savePassword}
                        className="flex items-center gap-2 bg-green-500 rounded-full px-5 py-2 w-fit hover:bg-white hover:text-green-500 hover: border-2 border-green-800"
                    >
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover">
                        </lord-icon>
                        Save Password</button>
                </div>

                <div className="passwords">
                    <h2 className='font-bold text-2xl'>Your Passwords</h2>
                    {passwordArray.length == 0 && <div> No Passwords Found</div>}
                    {passwordArray.length != 0 && <table className="table-auto w-full rounded-xl overflow-hidden border border-black">
                        <thead className='bg-green-900 text-white border border-black'>
                            <tr>
                                <th className="text-center w-32 px-4 py-2 border ">Site</th>
                                <th className="text-center w-32 px-4 py-2 border ">Username</th>
                                <th className="text-center w-32 px-4 py-2 border ">Passwords</th>
                                <th className="text-center w-32 px-4 py-2 border ">Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-100'>
                            {passwordArray.map((item, index) => {
                                return <tr key={index}>
                                    <td className="flex items-center justify-center text-center border px-4 py-2 gap-2"><a href={item.site}>{item.site}</a>
                                        <div className="lordiconcopy size-7 cursor-pointer item-center justify-center py-1"

                                            onClick={() => { notify(item.site) }}>

                                            <lord-icon
                                                style={{ "width": "25px", "height": "25px" }}
                                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                                trigger="hover">

                                            </lord-icon>
                                        </div>

                                    </td>
                                    <td className=" text-center w-32 border px-4 py-2 ">
                                        <div className="flex items-center justify-center gap-2">

                                            <span>
                                                {item.username}
                                            </span>
                                            <div className="lordiconcopy size-7 cursor-pointer item-center justify-center py-1" onClick={() => { notify(item.username) }}>
                                                <ToastContainer
                                                    position="top-right"
                                                    autoClose={5000}
                                                    hideProgressBar={false}
                                                    newestOnTop
                                                    closeOnClick
                                                    rtl={false}
                                                    pauseOnFocusLoss
                                                    draggable
                                                    pauseOnHover
                                                    theme="light"
                                                />
                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px" }}
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover">

                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-center w-32 border px-4 py-2 ">
                                        <div className="flex items-center justify-center gap-2">

                                            <span>
                                                {item.password}
                                            </span>
                                            <div className="lordiconcopy size-7 cursor-pointer item-center justify-center py-1" onClick={() => { notify(item.password) }}>

                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px" }}
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover">

                                                </lord-icon>
                                            </div>
                                        </div>

                                    </td>
                                    <td className="text-center w-32 border px-4 py-2">
                                        <span className='cursor-pointer mx-1 py-1' onClick = {()=>{editPassword(item.id)}}>
                                            <lord-icon 
                                            src = "https://cdn.lordicon.com/gwlusjdu.json"
                                            trigger = "hover"
                                            style = {{"width":"25px","height":"25px"}}>
                                            </lord-icon>
                                        </span>
                                        <span className='cursor-pointer mx-1 py-1' onClick = {()=>{deletePassword(item.id)}} >
                                            <lord-icon
                                                src="https://cdn.lordicon.com/skkahier.json"
                                                trigger="hover"
                                                style={{ "width": "25px", "height": "25px" }}>
                                            </lord-icon>
                                        </span>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>}
                </div>
            </div>

        </>
    )
};

export default Manager



