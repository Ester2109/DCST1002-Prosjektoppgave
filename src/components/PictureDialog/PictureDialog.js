import Modal from "../Modal/Modal";
import Paragraph from "../Paragraph";

const PictureDialog = ({ open, onClose }) => {
  return (
    <Modal onClose={onClose} open={open}>
      <Paragraph topSpacing={true}>
        <a href="https://mediebank.ntb.no/p/forsvaret/album/2448/25762534 ">
        Bilde 1
        </a> 
      </Paragraph>
      <Paragraph topSpacing={true}>
      <a href="https://www.forsvaret.no/om-forsvaret/organisasjon/sjoforsvaret/_/image/023a1c7a-c867-4057-9403-929640428761:28d5cddeeefae96e27e9d40054b4f594e0d5e117/block-2048-1024-/KV_JAN_MAYEN_I_BERGEN_JUNI_2023_4.jpeg.jpg?quality=70">
        Bilde 2
      </a>
      </Paragraph>
      <Paragraph topSpacing={true}>
      <a href="https://mediebank.ntb.no/p/forsvaret/album/2448/25756569">
        Bilde 3
      </a>
      </Paragraph>
      <Paragraph topSpacing={true}>
        <a href="https://media.snl.no/media/57443/standard_compressed_Garden_mai_97.t5551c036.m1200.x4DKakCYd.jpg">
          Bilde 4
        </a>
      </Paragraph>
    </Modal>
  );
};

export default PictureDialog;
