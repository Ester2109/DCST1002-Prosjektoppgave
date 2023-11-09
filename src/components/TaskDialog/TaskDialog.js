import Modal from "../Modal/Modal";
import Paragraph from "../Paragraph";

const TaskDialog = ({ onClose, open }) => {
  return (
    <Modal onClose={onClose} open={open}>
      <Paragraph>
        Vi er fire studenter som studerer bachelor i digital infrastruktur og
        cybersikkerhet ved fakultet for informasjonsteknologi og elektronikk ved
        NTNU i Trondheim. 
        <br />
        <br />
        I emnet cybersikkerhet i teamarbeid (DCST1002) har vi
        fått en prosjektoppgave hvor vi skal presentere en problemstilling til
        en valgfri målgruppe gjennom et læringsobjekt. Vi har da valgt
        problemstillingen: Hva er konsekvensene av posisjonsdeling på mobile
        enheter i tjeneste eller på Forsvarets områder? I tilknytting til denne
        problemstillingen har vi valgt vernepliktige og ansatte i forsvaret som
        målgruppe. Vi har valgt å lage en interaktiv nettside som læringsobjekt,
        hvor enkeltman får informasjon tilknyttet posisjonsdeling.
      </Paragraph>
    </Modal>
  );
};

export default TaskDialog;
