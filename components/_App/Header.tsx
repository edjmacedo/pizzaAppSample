import { Menu, Container, Icon } from "semantic-ui-react";
import Link from "next/link";
import Router, { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const isActive = (route: string) => {
    return route === router.pathname;
  };

  return (
    <Menu stackable fluid id="menu" inverted>
      <Container text>
        <Link href="/" passHref>
          <Menu.Item header active={isActive("/")}>
            Pizza APP
          </Menu.Item>
        </Link>

        <Link href="/cart" passHref>
          <Menu.Item header active={isActive("/cart")}>
            <Icon name="cart" size="large" />
            Orders
          </Menu.Item>
        </Link>
      </Container>
    </Menu>
  );
};

export default Header;
