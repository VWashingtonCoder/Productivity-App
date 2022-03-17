import { StyledButtons } from "./CalcStyles"

export default function Buttons({ className, value, onClick }){
    return(
     <StyledButtons className={className} onClick={onClick}>
         {value}
     </StyledButtons>
    )
}