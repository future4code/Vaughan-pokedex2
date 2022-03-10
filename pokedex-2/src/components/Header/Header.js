import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
//import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PokebolaNav from "../../assets/PokebolaNav.svg";
import pokemonHeader from "../../assets/pokemon-header.png";
import { HeaderImage } from "./styled";
import { goToHome, goToPokedex } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton>
              <img src={PokebolaNav} alt="Pokebola" />
            </IconButton> */}
            {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Pokédex
            </Typography> */}
            <Button onClick={() => goToHome(navigate)} color="inherit">
              <IconButton>
                <img src={PokebolaNav} alt="Pokebola" />
              </IconButton>
              Home
            </Button>
            <HeaderImage>
              <img src={pokemonHeader} alt="Pokemons arte" />
            </HeaderImage>

            <Button onClick={() => goToPokedex(navigate)} color="inherit">Pokédex</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
