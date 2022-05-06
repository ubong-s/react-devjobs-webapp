import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { GlobalProvider } from './context/GlobalContext';
import { HomePage } from './pages/home';
import { GlobalStyle } from './styles/globalStyle';
import { Theme } from './styles/styles';

function App() {
   return (
      <GlobalProvider>
         <Theme>
            <GlobalStyle />
            <Header />
            <Router>
               <Routes>
                  <Route path='/' element={<HomePage />} />
               </Routes>
            </Router>
         </Theme>
      </GlobalProvider>
   );
}

export default App;
