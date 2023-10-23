import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      Header
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <Link to={"/favorite"}>
        <button>favorite</button>
      </Link>
      <Link to={"/search"}>
        <button>search</button>
      </Link>
    </div>
  );
}
