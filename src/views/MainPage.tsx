import React from "react";
import {Display1, Display2} from "baseui/typography";
import Container from "../components/Styled/Container";
import DummyCounter from "../components/DummyCounter";

function MainPage() {
    return (<Container>
        <Display2>✨ Sparking up our</Display2>
        <Display1>Creativity</Display1>
        <DummyCounter />
    </Container>)
}

export default MainPage;
