import Header from '../components/ui/Header';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

function App() {
  return (
    <ThemeProvider>
      <Header />
      Hello!
    </ThemeProvider>    
  );
}

export default App;
