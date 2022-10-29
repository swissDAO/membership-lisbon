import { Navbar, Text } from "@nextui-org/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from 'next';
import { Layout } from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Navbar isBordered variant="floating">
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            🇨🇭 Swiss <strong>DAO</strong> 🏔️
          </Text>
        </Navbar.Brand>
        <Navbar.Content>
          <Navbar.Link href="#">Profile</Navbar.Link>
          <Navbar.Link href="#">Events</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <ConnectButton />
        </Navbar.Content>
      </Navbar>
    </Layout>
  )
}

export default Home
