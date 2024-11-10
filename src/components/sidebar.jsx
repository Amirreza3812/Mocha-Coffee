import "./sidebar.css";
import React, { useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import Coffeback from "../assests/CoffeBack/coffe-2.jpeg";
// all svg files

import logo from "../assests/logo.svg";
import Coffe from "../assests/Coffe.svg";
import Cake from "../assests/Cake.svg";
import Drinks from "../assests/Drink.svg";
import Pizza from "../assests/Pizza.svg";
import Data from "../data";
// import Documents from "../assests/draft.svg";
// import PowerOff from "../assests/power-off-solid.svg";
// import Coffeback from "../assests/CoffeBack/coffe-2.jpeg";

const Container = styled.div`
  position: fixed;

  .active {
    border-right: 4px solid var(--white);

    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
`;

const Button = styled.button`
  background: var(--black);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before,
  &::after {
    content: "";
    background: var(--white);
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }

  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")} !important;
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")} !important;
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const SidebarContainer = styled.div`
  background: var(--black);
  width: 3.5rem;
  height: 80vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index=200;
`;

const Logo = styled.div`
  width: 2rem;
  img {
    width: 100%;
    height: auto;
    z-index: 100;
    position: relative;
  }
`;

const SlickBar = styled.ul`
  color: var(--white);
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--black);
  position: absolute;
  top: 6rem;
  z-index: 10;
  left: 0;
  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  transition: all 0.8s ease;
  border-radius: 0 30px 30px 0;
  padding: 2rem 0;
`;

const Item = styled(NavLink)`
  text-decoration: none;
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;
  display: flex;
  padding-left: 1rem;

  &:hover {
    border-right: 4px solid var(--white);

    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }

  img {
    width: 1.2rem;
    height: auto;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
      brightness(78%) contrast(85%);
  }
`;

const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 800ms ease-in-out;
  color: rgba(255, 255, 255, 0.7);
`;
``;

// const Profile = styled.div`
//   width: ${(props) => (props.clicked ? "14rem" : "3rem")};
//   height: 3rem;
//   padding: 0.5rem 1rem;
//   // border: 2px solid var(--white);
//   border-radius: 30px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-left: ${(props) => (props.clicked ? "9rem" : "0")};
//   background: var(--black);
//   color: var(--white);
//   transition: all 300ms ease;

//   img {
//     width: 2.5rem;
//     height: 2.5rem;
//     border-radius: 50%;
//     cursor: pointer;
//     &:hover {
//       border: 2px solid var(--white);
//       padding: 2px;
//     }
//   }
// `;

// const Details = styled.div`
//   display: ${(props) => (props.clicked ? "flex" : "none")};
//   justify-contant: space-between;
//   align-items: center;
// `;

// const Name = styled.div`
//   padding: 0 1.5rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   h4 {
//     display: inline-block;
//     font-size: 0.8rem;
//   }

//   a {
//     font-size: 0.6rem;
//     text-decoration: none;
//     color: var(--grey);
//   }

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const Logout = styled.button`
//   border: none;
//   width: 2rem;
//   heigth: 2rem;
//   background-color: transparent;

//   img {
//     width: 100%;
//     height: auto;
//     filter: invert(15%) sepia(70%) saturate(6573%) hue-rotate(2deg)
//       brightness(100%) contrast(126%);

//     &:hover {
//       border: none;
//       padding: 0;
//       opacity: 0.5;
//     }
//   }
// `;

const Sidebar = () => {
  const [click, setClick] = useState(false);
  const handelClick = () => setClick(!click);

  const [profileClick, setProfileClick] = useState(false);
  const handelProfileClick = () => setProfileClick(!profileClick);

  return (
    <>
      <img src={Coffeback} alt="Coffe-img" className="Back-head-img" />
      <Container>
        <SidebarContainer className="container">
          <Button clicked={click} onClick={() => handelClick()}>
            Click
          </Button>
          <Logo>
            <img src={logo} alt="logo" />
          </Logo>
          <SlickBar clicked={click}>
            <Item onClick={() => setClick(false)} to="/">
              <img src={Coffe} alt="COFEE" /> {/* Thay will get from api */}
              <Text clicked={click}>COFFE</Text> {/* Thay will get from api */}
            </Item>
            <Item onClick={() => setClick(false)} to="/cake">
              <img src={Cake} alt="cake" />
              <Text clicked={click}>CAKE</Text>
            </Item>
            <Item onClick={() => setClick(false)} to="/drinks">
              <img src={Drinks} alt="drinks" />
              <Text clicked={click}>DRINKS</Text>
            </Item>
            <Item onClick={() => setClick(false)} to="/soon">
              <img src={Pizza} alt="soon" />
              <Text clicked={click}>SOON</Text>
            </Item>
            {/* <Item onClick={() => setClick(false)} to="/document">
            <img src={Documents} alt="Documents" />
            <Text clicked={click}>Documents</Text>
          </Item> */}
          </SlickBar>
          {/* 
        <Profile clicked={profileClick}>
          <img
            onClick={() => handelProfileClick()}
            src="https:/picsum.photos/200"
            alt="Profile Image"
          />
          <Details clicked={profileClick}>
            <Name>
              <h4>Jhon Doe</h4>
              <a href="#">view profile</a>
            </Name>

            <Logout>
              <img src={PowerOff} alt="logout" />
            </Logout>
          </Details>
        </Profile> */}
        </SidebarContainer>
      </Container>
      <Data />
    </>
  );
};

export default Sidebar;
