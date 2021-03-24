import './App.scss';
import Header from './components/Header';
import SubMenu from './components/SubMenu';
import Sidebar from './components/Sidebar';

const App = ():JSX.Element => {
  return (
    <div className="App">
      <Header />
      <SubMenu />
      <main className="main-content">
        <Sidebar />
      </main>
    </div>
  );
}

export default App;
