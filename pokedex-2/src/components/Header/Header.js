import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PokebolaNav from "../../assets/PokebolaNav.svg";
import pokedex from "../../assets/pokedex.jpg";
import { HeaderImage } from "./styled";
import { goToHome, goToPokedex } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom";
import Badge from '@mui/material/Badge';
import GlobalStateContext from "../../global/GlobalStateContext";
import { useContext } from "react";

export const Header = () => {
  const { states} = useContext(GlobalStateContext);
  const navigate = useNavigate()

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Button onClick={() => goToHome(navigate)} color="inherit">
              <IconButton>
                <img src={PokebolaNav} alt="Pokebola" />
              </IconButton>
              Home
            </Button>
            <HeaderImage>
              <img src={pokedex} alt="Pokemons arte" />
            </HeaderImage>

            
      <Badge color="secondary" badgeContent={states.count} showZero>
      <Button onClick={() => goToPokedex(navigate)} color="inherit">Pokédex</Button>
      </Badge>
            
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
