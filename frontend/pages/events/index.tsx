import { Button, Card, Grid, Row, Text } from "@nextui-org/react";
import { useState } from "react";
import { CustomModal } from "../../components/Modal";

export default function Events() {
  const [visible, setVisible] = useState(false)

  const list = [
    {
      title: "ETH Zurich",
      img: "https://gateway.pinata.cloud/ipfs/QmVV6WM8WMS5KAVLRVvVSfRWV9cYVphPGqVhd4zgTVg2NR",
      date: "01. December - 03. December",
    },
    {
      title: "ETH Bern",
      img: "https://gateway.pinata.cloud/ipfs/QmNrVkqwF4ewSS1JBJ77Rh9tkWmECPaLCiwuca6cnaggQd",
      date: "07. December - 10. December",
    },
  ];

  const createEvent = () => {
    console.log('createEvent');
    setVisible(false)
  }

  return (
    <>
      <Grid.Container direction="row">
        <Grid>
          <Text
            h2
            css={{
              textGradient: "90deg, #E31D1C -20%, #FF0080",
            }}
            weight="bold"
          >
            Events
          </Text>
          <Button shadow color="primary" auto onClick={() => setVisible(true)}>
            Create Event
          </Button>
        </Grid>
      </Grid.Container>

      <Grid.Container gap={2} justify="flex-start">
        {list.map((item, index) => (
          <Grid xs={6} sm={3} key={index}>
            <Card isPressable>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={item.img}
                  objectFit="cover"
                  width="100%"
                  height={140}
                  alt={item.title}
                />
              </Card.Body>
              <Card.Footer css={{ justifyItems: "flex-start" }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text b>{item.title}</Text>
                  <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                    {item.date}
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>

      <CustomModal visible={visible} callback={() => setVisible(false)} submit={createEvent} />
    </>
  );
}