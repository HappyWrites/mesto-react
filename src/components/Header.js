import logo from '../images/logo-svg.svg';

function Header() {
  return (
    <header className="header">
      <a href="#" target="_blank">
        <img src={logo} className="header__logo" alt="Логотип" />
      </a>
    </header>
  )
}

export default Header;