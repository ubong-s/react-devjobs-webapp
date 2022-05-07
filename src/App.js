import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { GlobalProvider } from './context/GlobalContext';
import { HomePage } from './pages';
import { SingleJobPage } from './pages/singleJobPage';
import { GlobalStyle } from './styles/globalStyle';
import { Theme } from './styles/styles';

function App() {
   return (
      <GlobalProvider>
         <Theme>
            <GlobalStyle />
            <Router>
               <Header />
               <Routes>
                  <Route exact path='/' element={<HomePage />} />
               </Routes>
               <Routes>
                  <Route exact path='jobs/:id' element={<SingleJobPage />} />
               </Routes>
            </Router>
         </Theme>
      </GlobalProvider>
   );
}

export default App;
