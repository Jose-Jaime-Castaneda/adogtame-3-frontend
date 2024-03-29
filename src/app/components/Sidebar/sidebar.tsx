import React, { MouseEventHandler, useState } from 'react'
import { Caveat } from "next/font/google";
import Link from 'next/link';
import "./styles.css";
import { usePathname } from 'next/navigation'
import PageProps from '@/types/sidebarTypes';

const caveat = Caveat({ subsets: ["latin"] });

const Sidebar: React.FC<PageProps> = ({ logout }) => {
    const pathname: string = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = (): MouseEventHandler<HTMLAnchorElement> | undefined => {
        setIsMenuOpen(!isMenuOpen);
        return undefined;
    };

    const handleLogout = (): void => {
        logout();
    }

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{ width: '280px' }}>
            <Link href="/" className="d-flex mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <span className={`${caveat.className}`} id="adogtameTitle">Adogtame</span>
            </Link>

            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a href="#" className={`nav-link ${pathname === "/" ? "active" : ""}`} aria-current="page">
                        <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
                        Inicio
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-body-emphasis">
                        <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
                        Buscar
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-body-emphasis">
                        <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
                        Explorar
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-body-emphasis">
                        <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#grid"></use></svg>
                        Mis mascotas
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-body-emphasis">
                        <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
                        Mis adopciones
                    </a>
                </li>
            </ul>
            <hr />
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" onClick={toggleMenu} data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                    <strong>mdo</strong>
                </a>
                <ul className={`dropdown-menu text-small shadow ${isMenuOpen ? 'show' : ''}`}>
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#" onClick={handleLogout}>Cerrar sesión</a></li>
                </ul>
            </div>
        </div>

    )
}

export default Sidebar;