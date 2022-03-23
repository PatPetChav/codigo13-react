import { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { Button,Card,CardContent,CardMedia,Container,Grid } from "@mui/material";
import { getFlagDetail } from "../../service/flags";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';


const FlagsDetalle = () => {
    const { name } = useParams();

    const history = useNavigate()

    const [values, setValues] = useState({
        nativeName: "",
        population: "",
        region: "",
        subregion: "",
        capital: "",
        svg:"",
      });

     

    const fetchDetailFlag = async () => {
      console.log("Aqui mi pais",name)
        const response = await getFlagDetail(name);
        // cuando hacemos la peticion podemos llenar a values usando setValues
        setValues({
            nativeName: response[0].name.common,
            population: response[0].population,
            region: response[0].region,
            subregion: response[0].subregion,
            capital: response[0].capital,
            svg: response[0].flags.svg,           
        });
      };

      useEffect(() => {
        fetchDetailFlag();
      }, []);

      console.log("datos",values)
           
      const miArray = []
      miArray[0] = values
      console.log("lenggg", miArray.length)
      console.log("myarray", miArray)

      return (
        <Container>
          <Button variant="outlined" onClick={() =>history(-1)}>
            <ArrowBackRoundedIcon/>
            Back
          </Button>
          <h4>Detalle de País</h4>
          {miArray.length > 0 && 
           
            <Grid container spacing={3}>
             
                <Grid item md={4}>
                  <img src={miArray[0].svg} height={250} width={350}/>                    
                </Grid>
                <Grid item md={4}>
                    <h4>{values.name}</h4>
         
                    <p>Native Name: {miArray[0].nativeName}</p>
                    <p>Population: {miArray[0].population}</p>
                    <p>Region:     {miArray[0].region}</p>
                    <p>Sub Region: {miArray[0].subregion}</p>
                    <p>Capital:    {miArray[0].capital}</p>
                </Grid>              
                
            </Grid>
          }
        </Container> 
      )
}

export default FlagsDetalle;