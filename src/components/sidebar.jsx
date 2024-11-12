import "./sidebar.css";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// SVG imports for icons
import logo from "../assests/logo.svg";
import Coffe from "../assests/Coffe.svg";
import Cake from "../assests/Cake.svg";
import Drinks from "../assests/Drink.svg";
import Pizza from "../assests/Pizza.svg";
import { useCategory } from "../pages/CategoryContext";

const Container = styled.div`
  position: fixed;
  z-index: 200;
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
  border-radius: 30px 0px 0px 30px;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 200;
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
  border-radius: 30px 0px 0px 30px;
  padding: 2rem 0;
  right: 0;
`;

const Item = styled(NavLink)`
  text-decoration: none;
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;
  display: flex;
  padding-right: 1rem;

  &:hover {
    border-left: 4px solid var(--white);

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
  margin-right: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 800ms ease-in-out;
  color: rgba(255, 255, 255, 0.7);
`;

const Sidebar = () => {
  const { selectCategory } = useCategory();
  const [click, setClick] = useState(false);
  const handelClick = () => setClick(!click);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://getsu.liara.run/api/categories");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result); // Set the data from the API response
        setLoading(false); // Data is loaded, so set loading to false
      } catch (error) {
        setError("Failed to fetch data");
        setLoading(false); // Even if there's an error, stop the loading state
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  // Render loading, error, or the actual content
  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Define a helper function to get the right icon based on the key
  const getIcon = (key) => {
    switch (key) {
      case 0:
        return Coffe;
      case 1:
        return Cake;
      case 2:
        return Drinks;
      case 3:
        return Pizza;
      default:
        return Coffe; // Default icon
    }
  };

  // Define a helper function to get the right link based on the key
  const getLink = (key) => {
    switch (key) {
      case 0:
        return "/";
      case 1:
        return "/cake";
      case 2:
        return "/drinks";
      case 3:
        return "/soon";
      default:
        return "/"; // Default link
    }
  };

  const handleItemClick = (categoryId) => {
    selectCategory(categoryId); // Set the selected category ID
  };

  return (
    <>
      {/* <img src={Coffeback} alt="Coffe-img" className="Back-head-img" /> */}
      <Container>
        <SidebarContainer className="container">
          <Button clicked={click} onClick={() => handelClick()}>
            Click
          </Button>
          <Logo>
            <img src={logo} alt="logo" />
          </Logo>
          <SlickBar clicked={click}>
            {data.map((item, key) => {
              return (
                <Item
                  onClick={() => {
                    setClick(false);
                    handleItemClick(item._id);
                  }}
                  to={getLink(key)}
                  key={item._id}
                >
                  <img src={getIcon(key)} alt={item.name} />
                  <Text clicked={click} className="font-Yekan">
                    {item.name}
                  </Text>
                </Item>
              );
            })}
          </SlickBar>
        </SidebarContainer>
      </Container>
    </>
  );
};

export default Sidebar;
