import Paragraph from "../../Paragraph";
import Quiz from "../../Quiz/Quiz";
import Screen from "../../Screen/Screen";

const Chapter7 = ({ style }) => {
  return (
    <Screen id="Chapter7" style={style}>
      <div>
        <h2>Oppsummering</h2>
        <Paragraph>
          Konsekvensene for posisjonslekasje er stor, og liv kan gå tapt om det
          skulle skjedd. Derfor er det viktig for hver enkel soldat å forstå
          hvordan slike angrep kan skje. Sannheten er at de fleste soldater ikke
          vet hvorfor man ikke burde ha med mobil på vakt, felt eller øvelse. De
          fleste vil tro at man ikke har med mobilen kun fordi man blir
          distrahert av den, men som vi har prøvd å formidle, så er ikke det den
          eneste grunnen. Det har blitt et verktøy til fienden.
        </Paragraph>
        <Paragraph
          topSpacing={true}
          style={{
            fontSize: "2em",
          }}
        >
          God vakt 🫡
        </Paragraph>
      </div>
    </Screen>
  );
};

export default Chapter7;
