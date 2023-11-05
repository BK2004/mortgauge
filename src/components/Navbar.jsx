function NavBar() {
    return (
        <nav className="w-full bg-sky-800 text-white">
            <img src="mortgauge.svg" className="absolute inline-block p-2 pointer-events-none" />
            <div className="grid grid-cols-3 text-center font-bold">
                <a href="" className="py-3 bg-sky-800 hover:bg-sky-700 transition">MortGauge</a>
                <a href="/individual" className="py-3 bg-sky-800 hover:bg-sky-700 transition">Will I be approved?</a>
                <a href="/aggregate" className="py-3 bg-sky-800 hover:bg-sky-700 transition">Aggregate</a>
            </div>
        </nav>
    )
}

export default NavBar;