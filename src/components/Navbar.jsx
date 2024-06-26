

const Navbar = () => {
  return (
    <nav className = 'bg-slate-700 flex justify-between items-center px-4 h-16'>
        < div className = "logo font-bold text-white text-2xl mx-5 ">
        
        <span className="text-green-500">&lt;</span>
        Pass
        <span className="text-green-500">OP/&gt;</span>
        </div>
        <ul>
            <li className = 'flex gap-4'>
                <a className = 'hover:font-bold text-white' href='/'>Home</a>
                <a className = 'hover:font-bold text-white'  href='#home'>About</a>
                <a className = 'hover:font-bold text-white' href='#home'>Contact</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar