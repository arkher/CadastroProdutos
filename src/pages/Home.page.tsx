import React from 'react';
import network from '../utils/check-network';
import { RevisaoCadastro } from './RevisaoCadastro/RevisaoCadastro';

const renderStubContent = () => <RevisaoCadastro />;
const Home: React.FC = () => {
  return network() ? renderStubContent() : <h1>Sem conexão</h1>;
};

export default Home;
