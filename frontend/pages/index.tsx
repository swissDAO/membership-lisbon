import type { NextPage } from 'next';
import { useAccount } from "wagmi";
import { Content } from "../components/Content";

const Home: NextPage = () => {

  const { address } = useAccount()

  return (
    <Content />
  )
}

export default Home
