import Screen from "../../Screen/Screen";
import Quote from "../../Quote/Quote";
import Paragraph from "../../Paragraph";

const Chapter2 = ({ style }) => {
  return (
    <Screen id="Chapter2" style={style}>
      <div>
        <h2>Bakgrunn for oppgaven</h2>
        <Paragraph>
        Hva er konsekvensene av posisjonsdeling når man er i tjeneste 
        eller på Forsvarets områder? I dagens samfunn er vi så og si 
        «avhengig» av mobilen vår. For å få tinder-matcher i nærheten 
        av deg eller finne den nærmeste pizzarestauranten har vi som 
        mobilbrukere en tendens til å tillate posisjonsdeling for at 
        dette skal være mulig.
        </Paragraph>
        <Paragraph topSpacing={true}>
        Hver dag deler forsvarspersonell og vernepliktige informasjon om sin 
        posisjon og sine bevegelser uten at de selv er klar over det. For en 
        vanlig sivil person har det kanskje ikke så mye å si om noen apper på 
        telefonen har tilgang til informasjon om deres bevegelser, men 
        dersom det skulle oppstå tilspissede situasjoner vil 
        bevegelsesmønstrene til forsvarspersonell potensielt og vernepliktige 
        kunne avsløre viktig informasjon til uønskede aktører. Dette er noe 
        de fleste i Forsvaret tenker alt for lite på, og det krever 
        bevisstgjøring og opplæring av personellet for å innarbeide gode 
        prosedyrer og rutiner på dette området.
        </Paragraph>
        <Paragraph topSpacing={true}>
         <img
         src="/images/Bilde_9.png"
         alt="Kystvakt"
         style={{
          height: "40%",
         }}
         />
        </Paragraph>
      </div>
    </Screen>
  );
};

export default Chapter2;
