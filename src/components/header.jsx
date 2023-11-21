import { Link } from "react-router-dom";
import styled from "styled-components";
// import { ReactComponent as Logo } from ;
import BurgerIcon from "../assets/burger.svg?react";
import SearchSvg from "../assets/search.svg?react";
const SearchIcon = () => {
  return <SearchSvg />;
};
const NavigationContainer = styled.div`
  background-color: #121212;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 999;
  }
`;

const BurgerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: none; // Hide by default on larger screens

  @media (max-width: 768px) {
    display: block; // Show on smaller screens
  }
`;

const MenuButtons = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;
  }
`;

const Button = styled.button`

  background-color: transparent;
  color: white;
  border: none;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  wi &:hover {
    background-color: #456580;
  }
  svg {
    width: 1rem; /* Set width to your desired dimension */
    height: 1rem; /* Set height to your desired dimension */
    fill: white; /* Set fill color to your desired color */
    margin-right: 1rem; /* Adjust spacing between the icon and text */
  }
  @media (max-width: 768px) {
    /* Hide text on small screens */
    span {
      display: none;
    }
`;

export default function Header() {
  const handleBurgerClick = () => {
    // Add logic for handling burger icon click
    console.log("Burger clicked!");
  };
  return (
    <NavigationContainer>
      {/* <BurgerButton onClick={handleBurgerClick}>
    
        <BurgerIcon />
      </BurgerButton> */}
      <MenuButtons>
        <Link to={"/"}>
          <Button>Home</Button>
        </Link>
        <Link to={"/search"}>
          <Button>
            <SearchIcon />
            <span>Search</span>
          </Button>
        </Link>
        <Link to={"/favorite"}>
          <Button>Favorite</Button>
        </Link>
      </MenuButtons>
    </NavigationContainer>
  );
}
