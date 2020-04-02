import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Badges from './../pages/Badges';
import BadgesNew from './../pages/BadgeNew';
import NotFound from './../pages/NotFound';
import BadgeHome from './../pages/BadgeHome';
import Layout from './Layout';

const App = () => {
  return(
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={BadgeHome} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgesNew} />
          <Route  component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
