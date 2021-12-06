import './App.css';
import Button from "@mui/material/Button";
import { ThemeProvider, Typography, Container, Fab } from '@mui/material';
import { theme } from './theme';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import Form from './components/Form';
import { Box } from '@mui/system';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        {/* Typograophy  */}
        <h1>Typography in material UI </h1>
        <Typography variant='h1' > I am h1 </Typography>
        <Typography variant='h2' display='inline'> I am h2 </Typography>
        <Typography variant='h3' display="inline"> I am h3 </Typography>
        <Typography variant='h4'  > I am h4 </Typography>
        <Typography variant='p' component='div' > I am p tag </Typography>
        {/* Button  */}
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="outlined" size="large">Outlined</Button>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
        <Fab color="secondary" aria-label="edit">
          <EditIcon />
        </Fab>
        <Fab variant="extended">
          <NavigationIcon sx={{ mr: 1 }} />
          Navigate
        </Fab>
        <Fab disabled aria-label="like">
          <FavoriteIcon />
        </Fab>
        {/* Forms  */}
        <Form />
      <Box  height="100px" />
      </ Container>
    </ThemeProvider>
  );
}

export default App;
