import Navigation from "./Navigation"
import Logo from "./Logo"

function Header() {
  return (
    <header className='header'>
        <div className="header-wrapper">
            <Logo />
            <Navigation />
        </div>
        <h1 className="header-title">We are creatives</h1>
        <svg aria-hidden='true' className="header-arrow" width="36" height="114" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" strokeWidth="6" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"><path d="M18 3v100M3 95.484l15 15 15-15"/></g></svg>
    </header>
  )
}

export default Header