import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Account from '../../components/Account';
import Adocoes from '../../components/Adocoes';
import Animais from '../../components/Animais';
import Container from '../../components/Container';
import Content from '../../components/Content';
import ContentDashboard from '../../components/ContentDashboard';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Users from '../../components/Users';

const Dashboard = () => {
  // const { path } = useRouteMatch();

  return (
    <Container>
      <Header />
      <Content>
        <Sidebar />
        <main>
          <Switch>
            <Route exact path='/dashboard' component={ContentDashboard} />
            <Route path='/dashboard/adocoes' component={Adocoes} />
            <Route path='/dashboard/animais' component={Animais} />
            <Route path='/dashboard/users' component={Users} />
            <Route path='/dashboard/conta' component={Account} />
          </Switch>
        </main>
      </Content>
    </Container>
  );
};

export default Dashboard;
