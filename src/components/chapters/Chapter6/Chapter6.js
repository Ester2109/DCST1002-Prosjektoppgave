import Paragraph from "../../Paragraph";
import Screen from "../../Screen/Screen";
import Image from "../../Image/Image";

const Chapter6 = ({ style }) => {
  return (
    <Screen id="Chapter6" style={style}>
      <div>
        <h2>Hva kan enkeltmann gjøre?</h2>

        <Paragraph>
          Hva må vi gjøre for å forhindre posisjonslekkasje? Som tidligere
          nevnt, har vi funnet ut at telefonen din konstant blir sporet.
          Telefonen vil gi fra seg posisjonsdata til tredjeparter, nettsider og
          tek-giganter, uansett om du har skrudd av posisjonsdeling eller ikke.
          Til og med når mobilen din er skrudd av, så har man mulighet til å
          finne ut posisjonen din. Realiteten er hvis en trusselaktør har evnen
          til å finne ut posisjonsdataen din og vil bruke den mot deg, trenger
          de bare en mobilenhet for å gjøre dette. Derfor vil det beste tiltaket
          enkeltmann kan gjøre for å hindre posisjonslekasje er å ikke ha med
          mobilen på øvelse eller oppdrag.
        </Paragraph>
        <Image src="/images/Bilde_12.jpg" alt="Gardist" />
      </div>
    </Screen>
  );
};

export default Chapter6;
