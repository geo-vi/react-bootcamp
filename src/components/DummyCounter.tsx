import React, {useCallback, useState} from "react";
import {Button} from "baseui/button";
import {H6} from "baseui/typography";
import CenteredContainer from "./Styled/CenteredContainer";
import ModifiedInlineContainer from "./Styled/ModifiedInlineContainer";

function DummyCounter() {
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);

    const reset = useCallback(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setCount(0);
        }, 3000)
    }, []);

    return (<CenteredContainer>
        <H6>Our count so far is {count}</H6>
        <ModifiedInlineContainer>
            <Button isLoading={loading}
                    disabled={loading}
                    size={"large"}
                    shape={"pill"}
                    onClick={() => setCount(prevCount => prevCount + 1)}>
                Increment
            </Button>
            <Button isLoading={loading}
                    disabled={loading}
                    size={"large"}
                    shape={"pill"}
                    onClick={() => setCount(prevCount => prevCount - 1)}>
                Decrease
            </Button>
            <Button isLoading={loading} size={"large"} shape={"pill"} onClick={reset}>
                Reset
            </Button>
        </ModifiedInlineContainer>
    </CenteredContainer>)
}

export default DummyCounter;
