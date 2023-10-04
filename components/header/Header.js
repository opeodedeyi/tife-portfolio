import { useRef, useState } from 'react';
import { useRouter } from "next/router";
import Link from "next/link";
import "./Header.css";

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
    const router = useRouter();

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    const closeNav = () => {
        setNavOpen(false);
    };

    return (
        <header className="header">
            <Link href='/' onClick={closeNav} className="header-name"><span className="header-name-special">Boluwa</span>tife.</Link>
            <div className="header-content">
                <button className="nav-toggle" onClick={toggleNav}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M4 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                    </svg>
                </button>
                <ul className={`nav-links ${navOpen ? 'open' : ''}`}>
                    <li className='mob'>
                        <Link className={router.pathname == "/" ? "active" : ""} href='/' onClick={closeNav}>Home</Link>
                    </li>
                    <li>
                        <Link className={router.pathname == "/portfolio" ? "active" : ""} href='/portfolio' onClick={closeNav}>Portfolio</Link>
                    </li>
                    <li className='desk'>
                        <Link href='/contact' className='button-inverse' onClick={closeNav}>Let&apos;s Talk</Link>
                    </li>
                    <li className='mob'>
                        <Link className={router.pathname == "/contact" ? "active" : ""} href='/contact' onClick={closeNav}>Let&apos;s Talk</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
