import { Button, Container, Link, Navbar, Text } from "@nextui-org/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export const Layout = ({ children }: any) => (
  <Container fluid>
    <Navbar isBordered variant="floating">
      <Navbar.Toggle showIn="xs" />
      <Button auto flat as={Link} href="/">
        🇨🇭 Swiss <strong>DAO</strong> 🏔️
      </Button>

      <Navbar.Content>
        <Navbar.Link href="/profile">Profile</Navbar.Link>
        <Navbar.Link href="/events">Events</Navbar.Link>
      </Navbar.Content>

      <Navbar.Content>
        <ConnectButton />
      </Navbar.Content>
    </Navbar>

    {children}
  </Container>
);
