import { useEffect, useState } from "react"
import { useMedia } from "../hooks/useMedia"

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { isDesktop } = useMedia('(min-width: 1026px)')
  useEffect(() => {
    setIsOpen(isDesktop)
  }, [isDesktop])

  function setOpen() {
    setIsOpen(prev => !prev)
  }

  return (
    <div className="nav-wrapper">
        <button onClick={setOpen} className="nav-button" aria-label="Open Menu" aria-controls="navigation" aria-expanded={isOpen}>
          <svg className="nav-hamburger" aria-hidden='true' width="24" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z" fillRule="evenodd"/></svg>
        </button>
        <nav className='nav' aria-hidden={!isOpen}>
            <ul className="nav-list">
                <li className="nav-item">
                  <a className="nav-item__link" href="#">
                    <span className="nav-item__link--hidden">ABOUT</span>
                    <span className="nav-item__link--visible">About</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-item__link" href="#">
                    <span className="nav-item__link--hidden">SERVICES</span>
                    <span className="nav-item__link--visible">Services</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-item__link" href="#">
                    <span className="nav-item__link--hidden">PROJECTS</span>
                    <span className="nav-item__link--visible">Projects</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-item__link" href="#">
                    <span className="nav-item__link--hidden">CONTACT</span>
                    <span className="nav-item__link--visible">Contact</span>
                  </a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navigation