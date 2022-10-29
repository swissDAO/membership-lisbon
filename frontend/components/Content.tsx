import { Container, Row, Text } from "@nextui-org/react";
import Spline from "@splinetool/react-spline";

export const Content = () => (
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

    <div style={{ height: '750px' }}>
      <Spline scene="https://prod.spline.design/HU-SeJRjMO08kMhD/scene.splinecode" />
    </div>
  </Container>
);
