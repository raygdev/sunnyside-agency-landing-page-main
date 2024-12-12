import { useState } from "react"

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

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
                  <a className="nav-item__link" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-item__link" href="#">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-item__link" href="#">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-item__link" href="#">Contact</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navigation