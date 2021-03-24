import './App.scss';
import Header from './components/Header';
import SubMenu from './components/SubMenu';
import Sidebar from './components/Sidebar';
import Form from './components/Form';

const App = ():JSX.Element => {
  return (
    <div className="App">
      <Header />
      <SubMenu />
      <main className="main-content">
        <Sidebar />
        <Form />
      </main>
    </div>
  );
}

export default App;
