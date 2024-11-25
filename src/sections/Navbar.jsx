import { useState } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

    const NavItems = () => {
        return (
            <ul className="nav-ul">
                {navLinks.map(({ id, href, name }) => (
                    <li key={id} className="nav-li">
                        <a href={href} className="nav-li_a" onClick={() => {}}>
                            {name}
                        </a>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto">
                    <a href="/" className="text-neutral-400 font-bold text-4xl hover:text-white transition-colors">
                        Tamaghno Ghosh
                    </a>
                    <button onClick={toggleMenu}>
                        <img src="/assets/menu.svg" alt="toggle" className="w-6 h-6" />
                    </button>
                </div>
                <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                    <nav className="p-5">
                        <NavItems />
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;