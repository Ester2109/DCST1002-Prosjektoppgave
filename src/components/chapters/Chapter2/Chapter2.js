import Screen from "../../Screen/Screen";
import Quote from "../../Quote/Quote";
import Paragraph from "../../Paragraph";

const Chapter2 = ({ style }) => {
  return (
    <Screen style={style}>
      <div>
        <h2>Bakgrunn for oppgaven</h2>
        <Paragraph>
          Vi er fire studenter som studerer bachelor i digital infrastruktur og
          cybersikkerhet ved fakultet for informasjonsteknologi og elektronikk
          ved NTNU i Trondheim. I emnet cybersikkerhet i teamarbeid (DCST1002)
          har vi fått en prosjektoppgave hvor vi skal presentere en
          problemstilling til en valgfri målgruppe gjennom et læringsobjekt. Vi
          har da valgt problemstillingen:
        </Paragraph>
        <Paragraph topSpacing={true}>
          <Quote>
            Hva er konsekvensene av posisjonsdeling på mobile enheter i tjeneste
            eller på Forsvarets områder?
          </Quote>
        </Paragraph>
        <Paragraph topSpacing={true}>
          I tilknytting til denne problemstillingen har vi valgt vernepliktige
          og ansatte i forsvaret som målgruppe. Vi har valgt å lage en
          interaktiv nettside som læringsobjekt, hvor enkeltman får informasjon
          tilknyttet posisjonsdeling
        </Paragraph>
      </div>
    </Screen>
  );
};

export default Chapter2;
