import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';

import Header from './comopnant/Header.jsx';
import MainHero from './comopnant/MainHero.jsx';
import Supports from './comopnant/Supports.jsx';
import About from './comopnant/About.jsx';
import Prodact from './comopnant/Prodact.jsx';
import Prodactright from './comopnant/Prodactright.jsx';
import Reviews from './comopnant/Reviews.jsx';
function App() {



  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
           <Header/>
          <MainHero/>
          <Supports/>
          <About/>
          <Prodact/>
          <Prodactright/>
          <Reviews/>
    </ThemeProvider>
  );
}

export default App;
