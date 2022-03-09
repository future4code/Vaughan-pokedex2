import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { ImgCard } from "./styled";

import { Button, CardActionArea, CardActions } from "@mui/material";

const PokeCard = (props) => {
  const pokemon = useRequestData({}, `${BASE_URL}${props.name}`)[0];

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        onClick={props.onClickCard}
      >
        <ImgCard src={pokemon.sprites && pokemon.sprites.other["official-artwork"].front_default} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="secondary"
          >
            {pokemon.name &&
              pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
        <Button size="small" color="secondary" variant="contained">
          Adicionar a Pokedéx
        </Button>
      </CardActions>
    </Card>
  );
};

export default PokeCard;
