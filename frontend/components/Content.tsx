import { Container, Grid, Row, Text } from "@nextui-org/react";
import Spline from "@splinetool/react-spline";
import { ListItem } from "./ListItem";

export const Content = () => {
  const list = [
    {
      title: "³ web3 spaces",
      subtitle: "W/ Meetups, Workshops and Hackerhouses in real life",
      image: "https://nextui.org/images/card-example-4.jpeg",
    },
    {
      title: "³ Community spirit",
      subtitle: "Connect, Learn and Build",
      image: "https://nextui.org/images/card-example-4.jpeg",
    },
    {
      title: "³ Just do Web3",
      subtitle: "Take Ownership. LFG 🚀",
      image: "https://nextui.org/images/card-example-4.jpeg",
    },
    {
      title: "³ web3 spaces",
      subtitle: "³ web3 spaces",
      image: "https://nextui.org/images/card-example-4.jpeg",
      sm: 5
    },
    {
      title: "³ web3 spaces",
      subtitle: "³ web3 spaces",
      image: "https://nextui.org/images/card-example-4.jpeg",
      sm: 7
    },
  ]


  return (
    <Container fluid>
      <Text
        h1
        size={60}
        weight="bold"
      >
        The First DAO
      </Text>
      <Text
        h1
        size={60}
        weight="bold"
      >
        For
      </Text>
      <Text
        h1
        size={60}
        css={{
          textGradient: "90deg, #E31D1C -20%, #FF0080",
        }}
        weight="bold"
      >
        Switzerland.³
      </Text>

      <Grid.Container gap={2} justify="center">
        {list.map((item, i) => (
          <Grid key={i} xs={12} sm={item?.sm || 4}>
            <ListItem title={item.title} subtitle={item.subtitle} image={item.image} />
          </Grid>
        ))}
      </Grid.Container>

      <div style={{ height: '750px' }}>
        <Spline scene="https://prod.spline.design/HU-SeJRjMO08kMhD/scene.splinecode" />
      </div>
    </Container>
  )
};
