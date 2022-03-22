import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container,Grid } from "@mui/material";
import { getFlagDetail } from "../../service/flags";


const FlagsDetalle = () => {
    const { name } = useParams();

    const [values, setValues] = useState({
        nativeName: "",
        population: "",
        region: "",
        subregion: "",
        capital: "",
        svg:"",
      });

      const handleChangeInput = (e) => {
        const { value, name } = e.target;
    
        setValues({
          ...values,
          [name]: value,
        });
      };

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

      return (
        <Container>
           <h4>Detalle</h4>
           {values.length > 0 &&
            <Grid container spacing={3}>
             
                <Grid item md={4}>
                  <img src={values.svg}/>                    
                </Grid>
                <Grid item md={4}>
                    <h4>{values.name}</h4>
         
                    <p>Native Name: {values.nativeName}</p>
                    <p>Population: {values.population}</p>
                    <p>Region: {values.region}</p>
                    <p>Sub Region: {values.subregion}</p>
                    <p>Capital: {values.capital}</p>
                </Grid>
                <Grid item md={4}>
                    <p>Languajes: {values.languages}</p>
                </Grid>
                
            </Grid>
          }
        </Container> 
      )

}

export default FlagsDetalle;