import React from 'react';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider} from 'baseui';
import MainPage from "./views/MainPage";

const engine = new Styletron();

function App() {
  return (
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
            <MainPage />
        </BaseProvider>
      </StyletronProvider>
  );
}

export default App;
