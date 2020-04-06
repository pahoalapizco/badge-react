import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Badges from './../pages/Badges';
import BadgesNew from './../pages/BadgeNew';
import NotFound from './../pages/NotFound';
import BadgeHome from './../pages/BadgeHome';
import BadgeEdit from './../pages/BadgeEdit';
import BadgeDetails from './../pages/BadgeDetails';
import Layout from './Layout';

const App = () => {
  return(
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={BadgeHome} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgesNew} />
          <Route exact path="/badges/:badgeId" component={BadgeDetails} />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
          <Route  component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
