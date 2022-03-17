import { Textfit } from "react-textfit";
import { StyledScreen } from "./CalcStyles";

const Screen = ({ value }) => {
    return (
        <StyledScreen>
            <Textfit className="screen" mode="single" max={70}> 
                {value}
            </Textfit>
        </StyledScreen>
    )
}

export default Screen