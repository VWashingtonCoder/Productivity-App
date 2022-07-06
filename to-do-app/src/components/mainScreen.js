import React from "react";
import styled from "styled-components";

const StyledMainScreen = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
`

export default function MainScreen() {
    return (
        <StyledMainScreen>
            <h2>Select An App Above To Begin Your Productive Session</h2>    
        </StyledMainScreen>
    )
}