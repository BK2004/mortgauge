function NavBar() {
    return (
        <nav className="w-full bg-sky-800 text-white">
            <img src="mortgauge.svg" className="absolute inline-block p-2 pointer-events-none" />
            <div className="inline-block grid grid-cols-3 text-center font-bold">
                <a href="" className="py-3 bg-sky-800 hover:bg-sky-700 transition">MortGauge</a>
                <a href="" className="py-3 bg-sky-800 hover:bg-sky-700 transition">Will I be approved?</a>
                <a href="" className="py-3 bg-sky-800 hover:bg-sky-700 transition">Other</a>
            </div>
        </nav>
    )
}

export default NavBar;