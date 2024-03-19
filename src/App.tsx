import React from 'react';
import TrucksList from '../src/app/features/trucks/TrucksList';
import PageLayout from './app/features/PageLayout';

const App: React.FC = () => {
  return (
    <PageLayout childrenComponent={ <TrucksList />} title="Trucks List Page" />
  );
};

export default App;