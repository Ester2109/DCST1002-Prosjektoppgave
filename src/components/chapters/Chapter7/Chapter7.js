import Paragraph from "../../Paragraph"
import Quiz from "../../Quiz/Quiz"
import Screen from "../../Screen/Screen";

const Chapter7 = ({ style }) => {
    return (
        <Screen style={style}>
            <div>
                <h2>Kapittel 7</h2>
                <Paragraph>
                ...
                </Paragraph>
                <Paragraph topSpacing={true}>
               ....
                </Paragraph>
                <Paragraph topSpacing={true}>
                    hallaballa
                </Paragraph>
            </div>
        </Screen>
    );
};

export default Chapter7;