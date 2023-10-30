import Paragraph from "../../Paragraph"
import Quiz from "../../Quiz/Quiz"
import Screen from "../../Screen/Screen";

const Chapter5 = ({ style }) => {
    return (
        <Screen id="Chapter5" style={style}>
            <div>
                <h2>Kapittel 5</h2>
                <Paragraph>
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
                <Paragraph topSpacing={true}>
                    hallaballa
                </Paragraph>
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
                    Spørsmålet
                </Quiz>
            </div>
        </Screen>
    );
};

export default Chapter5;