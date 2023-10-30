import Paragraph from "../../Paragraph";
import Screen from "../../Screen/Screen";
import Quiz from "../../Quiz/Quiz";

const Chapter3 = () => {
  return (
    <Screen id="Chapter3">
      <h2>Hva er posisjonsdeling?</h2>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Ut quis eleifend lectus, sed lobortis elit.
        Morbi aliquam nisl et augue vulputate rutrum. 
        Fusce in volutpat lorem. Nam vitae imperdiet massa. 
        Sed in velit eget leo pharetra rhoncus. Donec at metus mi. 
        Aliquam eget vehicula ipsum, eu commodo enim. Duis quis risus dui. 
        Pellentesque faucibus finibus malesuada. Vivamus ut tempor justo. 
        Duis in risus consectetur, interdum est ac, lobortis nibh. 
        Maecenas interdum, turpis vitae tempus vehicula, tortor lacus interdum nibh, 
        nec egestas elit diam quis lorem.
      </Paragraph>
      <Paragraph topSpacing={true}>hallaballa</Paragraph>
      <Paragraph topSpacing={true}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Ut quis eleifend lectus, sed lobortis elit.
        Morbi aliquam nisl et augue vulputate rutrum. 
        Fusce in volutpat lorem. Nam vitae imperdiet massa. 
        Sed in velit eget leo pharetra rhoncus. Donec at metus mi. 
        Aliquam eget vehicula ipsum, eu commodo enim. Duis quis risus dui. 
        Pellentesque faucibus finibus malesuada. Vivamus ut tempor justo. 
        Duis in risus consectetur, interdum est ac, lobortis nibh. 
        Maecenas interdum, turpis vitae tempus vehicula, tortor lacus interdum nibh, 
        nec egestas elit diam quis lorem.
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
