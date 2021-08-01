import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Account from '../../components/Account';
import Adocoes from '../../components/Adocoes';
import Animais from '../../components/Animais';
import AnimalProfile from '../../components/AnimalProfile';
import ConfirmAdoption from '../../components/ConfirmAdoption';
import Container from '../../components/Container';
import Content from '../../components/Content';
import ContentDashboard from '../../components/ContentDashboard';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import UserProfile from '../../components/UserProfile';
import Users from '../../components/Users';

import './styles.css';

const Dashboard = () => {
  // const { path } = useRouteMatch();

  return (
    <Container>
      <Header />
      <Content>
        <Sidebar />
        <main className='main-container'>
          <Switch>
            <Route exact path='/dashboard' component={ContentDashboard} />
            <Route path='/dashboard/adocoes' component={Adocoes} />
            <Route
              path='/dashboard/confirm-adoption/:id'
              component={ConfirmAdoption}
            />
            <Route path='/dashboard/animais' component={Animais} />
            <Route
              path='/dashboard/animal-profile/:id'
              component={AnimalProfile}
            />
            <Route path='/dashboard/users' component={Users} />
            <Route path='/dashboard/user-profile/:id' component={UserProfile} />
            <Route path='/dashboard/conta' component={Account} />
          </Switch>
        </main>
      </Content>
    </Container>
  );
};

export default Dashboard;
