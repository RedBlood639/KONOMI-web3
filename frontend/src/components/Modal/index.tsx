import { Button, Modal } from "native-base";
import { ModalProps } from "../../types/common";

const CustomModal: React.FC<ModalProps> = ({ show, setShow, comment }) => {
  return (
    <Modal
      isOpen={show}
      onClose={() => setShow(false)}
      _backdrop={{
        bg: "light.900",
      }}
      size="xs"
    >
      <Modal.Content maxWidth="350" maxH="212">
        <Modal.CloseButton />
        <Modal.Header>{"Status"}</Modal.Header>
        <Modal.Body>{`Transaction ${
          comment ? "Success" : "Failed"
        }`}</Modal.Body>
        <Modal.Footer alignItems="center">
          <Button
            onPress={() => {
              setShow(false);
            }}
          >
            {"OK"}
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default CustomModal;
