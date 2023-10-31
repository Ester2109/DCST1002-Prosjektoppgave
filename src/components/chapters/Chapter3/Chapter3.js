import Paragraph from "../../Paragraph";
import Screen from "../../Screen/Screen";
import Quiz from "../../Quiz/Quiz";

const Chapter3 = () => {
  return (
    <Screen id="Chapter3">
      <h2>Hva er posisjonsdeling?</h2>
      <Paragraph>De fleste vet hva posisjonsdeling er, og hva det å gi sin stedsinformasjon innebærer. 
        Posisjonsdeling er en funksjon som alle moderne mobilenheter bruker 
        for å beregne din stedsinformasjon og hvor enheten din er geografisk. 
        Du kan skru det av og på innstillinger, og de fleste apper spør om du 
        vil skru det på hver gang man bruker en app. 
        Stedsinformasjon er data som innsamles av et nettverk eller tjenester for å fastslå hvor 
        brukerens mobiltelefon eller andre enheter befinner seg, i henhold til definisjonen fra Information 
        Commissioners Office (ICO, 2023). Stedsinformasjon kommer vanligvis fra mobiltelefoner, mobiltårn, 
        internett, biler og andre enheter som har posisjonsdeling. Med andre ord, fungerer det som et 
        digitalt fotspor hvor dataen produseres gjennom bevegelsen av personer og ting.
      </Paragraph>
      <Paragraph topSpacing={true}>
      Det er mye positivt og praktisk grunner til å bruke posisjonsdeling og stedsinformasjon, 
      som blant annet økt brukeropplevelse og sikkerhet i private sammenhenger. Et eksempel kan 
      være når man skal finne fram til et sted man ikke er kjent med. Da kan man bruke en applikasjon 
      som Google Maps til å finne destinasjonen for deg. Et annet nyttig verktøy som Find My iPhone gjør 
      det enklere å finne igjen dine Apple-enheter som iPhone, Mac også videre (Apple Inc., 2023), 
      dette bidrar med å forbedre brukeropplevelsen og sikkerheten for sluttbrukeren.
      </Paragraph>
      <Paragraph topSpacing={true}>
      Hvordan funker det helt teknisk? Posisjonsdeling og stedsinformasjon bruker GNSS 
      (Global Navigation Satellite System). GNSS er satellitt baserte systemer. 
      Europa sitt satellittsystem kalles for Galileo, mens det mer kjente navnet GPS er 
      faktisk for Nord-Amerika (EUSPA, 2023). Stedsinformasjonen samles via ping fra flere 
      satellitt systemer som blir samlet og lest inn for å gi innsikt i dataen. Vi kan prøve 
      å visualisere prosessen:
        </Paragraph>
      <Quiz>
        <Paragraph>
        Larsen liker ikke kaffe fordi han
        er en taper
        Larsen er en guttefløyte
        </Paragraph>
        <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        </Paragraph>
      </Quiz>
    </Screen>
  );
};

export default Chapter3;
