import React from 'react';
import VlqPlayer from './VlqPlayer';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from '../styles/GlobalStyle';

const App = () => (
  <BrowserRouter>
    <>
    <Switch>
      <Route exact path="/" component={VlqPlayer} />
      <Route exact path="/:activeVideo" component={VlqPlayer} />
    </Switch>
    <GlobalStyle />
  </>
  </BrowserRouter>
)

export default App;
