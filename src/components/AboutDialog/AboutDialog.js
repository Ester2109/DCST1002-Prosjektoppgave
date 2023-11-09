import Modal from "../Modal/Modal";

const AboutDialog = ({ open, onClose }) => {
  return (
    <Modal onClose={onClose} open={open}>
      Prosjektet er laget av oss:
      <br />
      <br />
      Sondre Søndergaard: email
      <br />
      <br />
      Helene Askeland: email
      <br />
      <br />
      Jacob Smukkestad: email
      <br />
      <br />
      Ester Halvorsen: esterdh@stud.ntnu.no
    </Modal>
  );
};

export default AboutDialog;
