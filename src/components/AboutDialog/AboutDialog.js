import Modal from "../Modal/Modal";
import Paragraph from "../Paragraph";

const AboutDialog = ({ open, onClose }) => {
  return (
    <Modal onClose={onClose} open={open}>
      <Paragraph style={
        {fontWeight: 700,}
      }>Prosjektet er laget av</Paragraph>
      <Paragraph topSpacing>Sondre Søndergaard: sondrehso@stud.ntnu.no</Paragraph>
      <Paragraph>Helene Askeland: heleask@stud.ntnu.no</Paragraph>
      <Paragraph>Jacob Smukkestad: jacobsmu@stud.ntnu.no</Paragraph>
      <Paragraph>Ester Halvorsen: esterdh@stud.ntnu.no</Paragraph>
    </Modal>
  );
};

export default AboutDialog;
