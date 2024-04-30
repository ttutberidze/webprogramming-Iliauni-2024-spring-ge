import './App.css';
import Header from './components/header'
import Sidebar from './components/sidebar'
import Main from './components/main'

function App() {
  return (
    <div className="App">
        <Header />
        <div className='wrapper'>
          <Sidebar />
          <Main />
        </div>
      </div>
  );
}

export default App;
