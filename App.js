import React from 'react';
import RulesPage from './pages/RulesPage';
import VariablesPage from './pages/VariablesPage';

const App = () => {
  const [page, setPage] = React.useState('home');

  const handlePageChange = (selectedPage) => {
    setPage(selectedPage);
  };

  return (
    <div>
      <h2>Hello, React!</h2>
      <button onClick={() => handlePageChange('rules')}>Rules</button>
      <button onClick={() => handlePageChange('variables')}>Variables</button>
      {page === 'rules' && <RulesPage />}
      {page === 'variables' && <VariablesPage />}
    </div>
  );
};

export default App;
