import Header from './components/header'
import Sidebar from './components/sidebar'
import Main from './components/main'
import './App.css';
import ThemeContextProvider from './context/theme';

function App() {
  return (
    <ThemeContextProvider>
      <div className="App">
        <Header />
        <div>
          <Sidebar />
          <Main />
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
