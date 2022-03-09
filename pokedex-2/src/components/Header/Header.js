import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton'
import PokebolaNav from '../../assets/PokebolaNav.svg'
import pokemonHeader from '../../assets/pokemon-header.png'
import { HeaderImage, HeaderDiv } from './styled'
//import {goToPokedex} from '../../routes/coordinator'

export const Header = () => {
  return (
    <HeaderDiv>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton>
            <img src={PokebolaNav} alt="Pokebola"/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pokédex
          </Typography>
          <HeaderImage>
            <img src={pokemonHeader} alt="Pokemons arte" />
          </HeaderImage>

          <Button color="inherit">Pokédex</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </HeaderDiv>
  );
}