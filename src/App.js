import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Header } from './components/Header/Header';
import { GlobalProvider } from './context/GlobalContext';
import { HomePage } from './pages';
import { SingleJobPage } from './pages/singleJobPage';
import { GlobalStyle } from './styles/globalStyle';
import { Theme } from './styles/styles';

function App() {
   let location = useLocation();
   return (
      <GlobalProvider>
         <Theme>
            <GlobalStyle />
            <Header />
            <AnimatePresence exitBeforeEnter>
               <Routes location={location} key={location.key}>
                  <Route exact path='/' element={<HomePage />} />
                  <Route exact path='jobs/:id' element={<SingleJobPage />} />
               </Routes>
            </AnimatePresence>
         </Theme>
      </GlobalProvider>
   );
}

export default App;
