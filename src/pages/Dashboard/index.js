import React from 'react';
import Container from '../../components/Container';
import Content from '../../components/Content';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

const Dashboard = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Sidebar />
        <main>
          <p>Dashboard</p>
        </main>
      </Content>
    </Container>
  );
};

export default Dashboard;
