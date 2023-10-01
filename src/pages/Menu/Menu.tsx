import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/product/1">
            <button>product1</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
