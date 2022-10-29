import React from "react";
import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";

type Props = {
  visible: boolean,
  submit: () => void
  callback: () => void
}

export const CustomModal = ({ visible, callback, submit }: Props) => {
  return (
    <Modal
      closeButton
      blur
      aria-labelledby="modal-title"
      open={visible}
      onClose={callback}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Create new Event
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Title"
        // contentLeft={<Mail fill="currentColor" />}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onClick={callback}>
          Close
        </Button>
        <Button auto onClick={submit}>
          Sign in
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
