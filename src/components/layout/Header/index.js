import pokeLogo from "./../../../assets/img/pokemon_logo.png";
//------------------------------------------------------------------------
import HeaderMenu from "./HeaderMenu";
import "./style.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={pokeLogo} alt="pokemon logo" />
      </div>
      <HeaderMenu />
      <span className="header__pokebola" />
    </header>
  );
};

export default Header;
