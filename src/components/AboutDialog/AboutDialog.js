import Modal from "../Modal/Modal";
import Paragraph from "../Paragraph";

const AboutDialog = ({ open, onClose }) => {
  return (
    <Modal onClose={onClose} open={open}>
      <Paragraph style={
        {fontWeight: 700,}
      }>Prosjektet er laget av</Paragraph>
      <Paragraph topSpacing>Sondre Søndergaard: email</Paragraph>
      <Paragraph>Helene Askeland: email</Paragraph>
      <Paragraph>Jacob Smukkestad: email</Paragraph>
      <Paragraph>Ester Halvorsen: esterdh@stud.ntnu.no</Paragraph>
    </Modal>
  );
};

export default AboutDialog;
