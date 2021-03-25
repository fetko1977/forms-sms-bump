import './App.scss';
import React from 'react';
import Header from './components/Header';
import SubMenu from './components/SubMenu';
import Sidebar from './components/Sidebar';
import Form from './components/Form';
import { useFormState, useFormDispatch } from './context';

const App = ():JSX.Element => {
  const { selectedForm } = useFormState();
  const { selectedTool } = selectedForm;
  const dispatch = useFormDispatch();

  const closeToolbarMenu = () => {
    dispatch({ type: 'UPDATE_SELECTED_TOOL', payload: ''});
  }

  return (
    <div className="App">
      <Header />
      <SubMenu />
      <main className="main-content">
        <Sidebar />
        { selectedTool && selectedTool !== '' ? (<div className="sidebar__overlay" onClick={closeToolbarMenu}></div>) : null}
        <Form />
      </main>
    </div>
  );
}

export default App;
