import { Card, Col, Text } from "@nextui-org/react";

type Props = {
  title: string;
  subtitle: string;
  image: string;
}

export const ListItem = ({ title, subtitle, image }: Props) => (
  <Card>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          {title}
        </Text>
        <Text h4 color="white">
          {subtitle}
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src={image}
      objectFit="cover"
      width="100%"
      height={340}
      alt="Card image background"
    />
  </Card>
);
