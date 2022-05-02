import Match, { Link } from "preact-router/match";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import Cart from "../cart/Cart";
import Wrapper from "../wrapper/Wrapper";
import style from "./headerStyle.css";

const Header = () => {
  return (
    <div>
      <header class={style.header}>
        <Wrapper className={style.header_wrapper}>
          <Link href="/" className={style.titleLink}>
            <h1>Shoppy</h1>
          </Link>
          <nav>
            <Cart />
          </nav>
        </Wrapper>
      </header>
      <Match>{(props) => <Breadcrumb {...props} />}</Match>
    </div>
  );
};

export default Header;
