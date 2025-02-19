import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  position: sticky;
  z-index: 100;
  height:100px;
  @media (max-width: 1400px) {
    justify-content: space-between;
    margin: 0px 20px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;
  margin-left:50px;
  @media (max-width: 1400px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    background: white;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 20px;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s ease-in-out;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #04056f;
  font-size: 16px;
  font-weight: 400;
  padding: 10px;
  border-radius: 5px;
  &:hover {
    color: #5f62f5;
  }
`;
const ContactNavLink = styled(Link)`
  text-decoration: none;
  color: #04056f;
  font-size: 14px;
  font-weight: 400;
  padding: 10px;
  border-radius: 5px;
  border: 2px solid #faf465;

  &:hover {
    background-color: #faf465;
  }
`;

const LogoContainer = styled.img`
  height: 200px;
  width: 200px;
`;

const Menu = styled(MenuIcon)`
  display: none !important;
  @media (max-width: 1400px) {
    display: block !important;
  }
`;

const Close = styled(CloseIcon)`
  display: none !important;
  @media (max-width: 1400px) {
    display: block !important;
    color: #04056f;
    cursor: pointer;
  }
`;

const Header = () => {
  const [isNavVisible, setIsNavVisible] = React.useState(false);
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/");
  };

  return (
    <HeaderContainer>
      <LogoContainer src={Logo} alt="Logo" onClick={() => redirectToHome()} />
      <Menu onClick={() => setIsNavVisible(!isNavVisible)} />
      <Nav isOpen={isNavVisible}>
        <Close onClick={() => setIsNavVisible(!isNavVisible)} />
        <NavLink to="/" onClick={() => setIsNavVisible(!isNavVisible)}>
          Home
        </NavLink>
        <NavLink to="/About" onClick={() => setIsNavVisible(!isNavVisible)}>
          About Us
        </NavLink>
        <NavLink to="/Services" onClick={() => setIsNavVisible(!isNavVisible)}>
          Services
        </NavLink>
        <NavLink to="/Career" onClick={() => setIsNavVisible(!isNavVisible)}>
          Careers
        </NavLink>
        <NavLink
          to="/ApiDocumentation"
          onClick={() => setIsNavVisible(!isNavVisible)}
        >
          Api Documentation
        </NavLink>
        <NavLink
          to="/ApiDocumentation"
          onClick={() => setIsNavVisible(!isNavVisible)}
        >
            Privacy Policy
        </NavLink>
        <NavLink
          to="/ApiDocumentation"
          onClick={() => setIsNavVisible(!isNavVisible)}
        >
            Cookie Policy
        </NavLink>
        <ContactNavLink
          to="/ContactUs"
          onClick={() => setIsNavVisible(!isNavVisible)}
        >
          CONTACT US
        </ContactNavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;