import { Link } from "react-router-dom";

import SearchSvg from "../assets/search.svg?react";
import HomeSvg from "../assets/home.svg?react";
import StarSvg from "../assets/star.svg?react";
import {
  Button,
  MenuButtons,
  NavigationContainer,
} from "./styleComponents/styledComponents";

export default function Header() {
  return (
    <NavigationContainer>
      <MenuButtons>
        <Link to={"/"}>
          <Button>
            <HomeSvg />
            <span>Home</span>
          </Button>
        </Link>
        <Link to={"/search"}>
          <Button>
            <SearchSvg />
            <span>Search</span>
          </Button>
        </Link>
        <Link to={"/favorite"}>
          <Button>
            <StarSvg />
            <span>Favorite</span>
          </Button>
        </Link>
      </MenuButtons>
    </NavigationContainer>
  );
}
