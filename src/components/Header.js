import logo from "../img/Vector.svg"

function Header(){
    return(<header className="header">
    <img className="header__logo" src={logo}  alt="логотип" />
  </header>)
}

export default Header