import { Button, Card, Grid, Input, Modal, Row, Text } from "@nextui-org/react";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import { useState } from "react";
import QRCode from "react-qr-code";
import { useAccount } from "wagmi";
import { MULTI_SIGNATURE, MY_ACCOUNT } from "../../constants/constants";

type Mode = 'detail' | 'create' | 'edit';

type ListItem = {
  title: string;
  img: string;
  date: string;
};

export default function Events() {
  const [visible, setVisible] = useState(false)
  const [venue, setVenue] = useState(false)
  const [mode, setMode] = useState<Mode>('detail')
  const [item, setItem] = useState<ListItem>({} as ListItem)

  const { address } = useAccount()

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

  const onClick = (index: number) => {
    setMode('detail');
    setVisible(true);
    setItem(list[index])
  }

  const createEvent = () => {
    setMode('create');
    setVisible(true);
  }

  const editEvent = () => {
    setMode('edit');
    setVisible(true);
    console.log('createEvent');
  }

  const onClose = () => setVisible(false);

  const downloadTxtFile = (content: string[]) => {
    const element = document.createElement("a");
    const file = new Blob(content, {
      type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element);
    element.click();
  };



  const submit = () => {
    if (mode === 'edit') {
    }

    if (mode === 'create') {
      const secrets = new Array(100).fill(null).map((_, i) => Array.from(Array(32), () => Math.floor(Math.random() * 36).toString(36)).join(''));
      downloadTxtFile(secrets);
    }
  }

  const renderButtons = () => {
    return (
      <>
        {address === MY_ACCOUNT && (
          <Button
            auto
            ghost
            onClick={editEvent}>
            Edit
          </Button>
        )}

        {address === MULTI_SIGNATURE && (
          <Button
            auto
            ghost
            onClick={() => setVenue(true)}>
            Preview
          </Button>
        )}
      </>
    )
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
          <Button shadow color="primary" auto onClick={createEvent}>
            Create Event
          </Button>
        </Grid>
      </Grid.Container>

      <Grid.Container gap={2} justify="flex-start">
        {list.map((item, index) => (
          <Grid xs={6} sm={3} key={index}>
            <Card isPressable onClick={() => onClick(index)}>
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

      {/* Detail- / Create- / Edit Modal */}
      <Modal
        closeButton
        fullScreen
        aria-labelledby="modal-title"
        open={visible}
        onClose={() => setVisible(false)}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            {mode === 'create' ? 'Create new Event' : (mode === 'edit' ? 'Edit Event' : 'Event Details')}
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Card.Image
            src={item?.img || ''}
            objectFit="cover"
            width="100%"
            height={140}
            alt={item?.title || ''}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Title"
            disabled={mode === 'detail'}
          />

          {mode !== 'create' && renderButtons()}
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={onClose}>
            Close
          </Button>
          {mode !== 'detail' && (
            <Button auto onClick={submit}>
              {mode === 'create' ? 'Create' : 'Edit'}
            </Button>
          )}
        </Modal.Footer>
      </Modal>


      <Modal
        closeButton
        fullScreen
        aria-labelledby="modal-title"
        open={venue}
        onClose={() => setVenue(false)}
      >
        <Modal.Body>
          <div style={{ background: 'white', padding: '16px', height: "128px", width: "128px" }}>
            <QRCode
              size={128}
              style={{ height: "auto", maxWidth: "max-content", width: "100%" }}
              value={"value"}
            />
          </div>

          <div style={{ background: 'white', padding: '16px' }}>
            <QRCode
              size={256}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={"value"}
              viewBox={`0 0 256 256`}
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}