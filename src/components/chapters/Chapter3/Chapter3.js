import Paragraph from "../../Paragraph";
import Screen from "../../Screen/Screen";
import Quiz from "../../Quiz/Quiz";

const Chapter3 = () => {
  return (
    <Screen>
      <h2>Hva er posisjonsdeling?</h2>
      <Paragraph>hallaballa</Paragraph>
      <Paragraph topSpacing={true}>hallaballa</Paragraph>
      <Paragraph topSpacing={true}>hallaballa</Paragraph>
      <Quiz>
        <Paragraph>
        Larsen liker ikke kaffe fordi han
        er en taper
        Larsen er en guttefløyte
        </Paragraph>
        <Paragraph>
        jsdhf
        jsdhf
        </Paragraph>
      </Quiz>
    </Screen>
  );
};

export default Chapter3;
