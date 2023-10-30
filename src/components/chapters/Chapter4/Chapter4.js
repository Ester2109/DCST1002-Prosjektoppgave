import Paragraph from "../../Paragraph"
import Quiz from "../../Quiz/Quiz"
import Screen from "../../Screen/Screen";

const Chapter4 = ({ style }) => {
    return (
        <Screen style={style}>
            <div>
                <h2>Kapittel 4</h2>
                <Paragraph>
                    hallaballa
                </Paragraph>
                <Paragraph topSpacing={true}>
                    hallaballa
                </Paragraph>
                <Paragraph topSpacing={true}>
                    hallaballa
                </Paragraph>
                <Quiz>
                    Spørsmålet
                </Quiz>
            </div>
        </Screen>
    );
};

export default Chapter4;