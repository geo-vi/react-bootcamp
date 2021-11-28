# React Bootcamp

#### Table of Contents

* Creating your first React project
* Installing common libraries
* The Skeleton
    - The Setup
    - Components and styles ft. Styled-Components
    - Component lifecycle
* Advanced states
* How global state looks like?
* How to Redux


#### Creating your first React project
For the example we're going to use IntelliJ IDEA

`New Project -> JavaScript -> React`   
Tick - Create TypeScript Project.

This will create our React template (Install React with preset configured webpack, jest, ...)

#### Installing common libraries
For this example we're going to need styled-components, baseui and react-router

`npm install styled-components`
`npm install @types/styled-components`
`npm install baseui styletron-engine-atomic styletron-react`
`npm install @types/styletron-standard @types/styletron-react @types/styletron-engine-atomic`
`npm install react-router-dom@6 history@5`


#### The Skeleton

##### The Setup
After the installation completes you should have the following folder structure present:

*Below are not listed the irrelevant **for now** files*
```
/node_modules
/public
/src
  - App.tsx
  - index.tsx
package.json
tsconfig.json
```

As we are going to use styled-components instead of plain CSS, we are going to ignore all the css files
and to reduce complexity we will skip the Unit Test part.

Lets delete the files that are going to be skipped so that we have a cleaner overview of the skeleton.
`App.test.tsx, App.css, index.css, logo.svg`

Now lets also correct our dependencies as we removed some imported files

index.tsx:
```tsx
 - import './index.css';
```

App.tsx
```tsx
- import logo from './logo.svg';
- import './App.css';
```

First as we installed baseui (BaseWeb by Uber) we need to declare it's dependencies within our App.tsx and lets
on the way also get rid of default CRA (Create React App) boilerplate and replace it with something more creative ✨.

App.tsx
```tsx
import React from 'react';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider} from 'baseui';

const engine = new Styletron();

function App() {
  return (
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
            <div />
        </BaseProvider>
      </StyletronProvider>
  );
}

export default App;
```

The initial setup stage is complete and its our turn to add something cool!

The way we maintain good and clean architecture over time is that we split our React Components into "two types" of components
- The main ones aka views aka pages
- The dummies that get implemented into our views aka components

So lets continue by adding a folder for our views and the folder structure should look like the following below:
```
/src
  /components
  /views
  - App.tsx
  - index.tsx
  ...
```  

And now lets add our first view component and call it MainPage(.tsx)
In lets write a basic function with a div and two Display (Display1, Display2) components (equivalent to h1,h2 just with Uber's custom styling).
The component should look like below:
```tsx
import React from "react";
import {Display1, Display2} from "baseui/typography";

function MainPage() {
    return (<div>
        <Display2>✨ Sparking up our</Display2>
        <Display1>Creativity</Display1>
    </div>)
}

export default MainPage;
```

Lets perhaps add it some style? 🎨
```tsx
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`
```

We just declared a Styled Component (Component which has style that replaced the default html div's).
Lets declare the component that we just created on top of our function within our MainPage render.
The MainPage.tsx result will be the following:
```tsx
import React from "react";
import {Display1, Display2} from "baseui/typography";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`

function MainPage() {
    return (<Container>
        <Display2>✨ Sparking up our</Display2>
        <Display1>Creativity</Display1>
    </Container>)
}

export default MainPage;
```

So congratulations 🎉  we just have built our first component and most important one as well
because thats going to be our landing page.

Currently if we look back into App.tsx we can see that below the baseui stuff underlaying we have just
one alone sitting `<div />`. That is all that is getting rendered and all that will be displayed into our screen.

Lets change that by declaring our cool view component MainPage that we just created.
Declaration is as simple as `<MainPage />` and make sure that you also imported it (usually Intellij prompts you to do so but if you didnt you can also manually write an `import MainPage from "./views/MainPage";` on the top

So our resulting App.tsx will look like that:
```tsx
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
```

Now lets try running our example and verify its working using the following script:
`npm run start`

##### Components and styles ft. Styled-Components

So that we can be better organized lets start by creating a dedicated folder for our components and call it `components`
Our source dir should look like that:
```
/src
  /components
  /views
    - MainPage.tsx
  - App.tsx
  - index.tsx
  ...
```  

Within our components folder lets add a folder for all our dummy Styled components (Those which replace HTML default styles, as example - divs, headings, lists, ...) and call it `Styled`

The source dir now will look:
```
  /components
    /Styled
  /views
    - MainPage.tsx
  - App.tsx
  - index.tsx
  ...
```

And within our new dir that we just created (Styled) lets also add the Container(.tsx) component.
```
  /components
    /Styled
+     - Container.tsx
  /views
    - MainPage.tsx
  - App.tsx
  - index.tsx
  ...
```

We can cut the Container declaration from MainPage(.tsx) and put it into our newly created component (file)
```tsx
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`
```

Resulting in the following contents of the Container(.tsx) styled component
```tsx
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`

// We should export it so that we can later import (reuse) it within our views or other components
export default Container;
```

*Don't forget the import on MainPage(.tsx)!;-)*

