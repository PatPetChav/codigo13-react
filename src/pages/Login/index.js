import { useContext,useState } from "react";
import { Navigate } from "react-router-dom";
import { Button, Grid, Card, CardContent, TextField } from "@mui/material";
import bglogin from "../../assets/bg-login.png"
import { UserContext } from "../../Context/UserContext";
import swal from "sweetalert";

const Login = () => {
    const { user, storeUser } = useContext(UserContext);

  const handleClickLoginAntes = () => {
    storeUser({
      name: "Patricia",
      last_name: "Perez",


    });
  };

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleClickLoginAntes2 = () => {
    storeUser(userData);
  };

  const handleClickLogin = () => {
    storeUser(userData);
    if (userData.email === "pepe@gmail.com" && userData.password === "123456") {
      const user = {
        nombre: "Pepe",
        apellido: "Zapata",
        correo: userData.email,
        edad: 21,
        trabajo: "Software Developer",
        dni: "123456",
        cel: "999999",
      };
      storeUser(user);

      window.location.href = "/youtube/administrador"
    } else {
      swal({
        icon: "error",
        title: "Error",
        text: "Email or Password incorrect",
      });
    }
  };

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-around"
      sx={{ height: "100vh", padding: 20, backgroundColor: "#FFD885" }}
    >
      <Grid item md={6}>
      <h4>
      {user?.name} {user?.last_name}
        </h4>
        <img src={bglogin} width={600} alt="" />
      </Grid>
      <Grid item md={6}>
        <Card sx={{ width: 500 }}>
          <CardContent>
            <h5>Welcome to</h5>
            <h3>Tecsup - Codigo</h3>
            <p>
              Bienvenido a la comunidad de CodiGo, juntos aprenderemos a
              programas paginas web.
            </p>
            <Grid container spacing={3} mt={5}>
              <Grid item md={12}>
                <TextField label="Email" 
                fullWidth  onChange={handleChangeInput} name="email"/>
              </Grid>
              <Grid item md={12}>
                <TextField label="Password" type="password"
                fullWidth onChange={handleChangeInput} name="password"/>
              </Grid>
              <Grid item md={12}>
                <Button
                  sx={{ backgroundColor: "#000" }}
                  variant="contained"
                  fullWidth
                  size="large"
                  onClick={handleClickLogin}
                >
                  Iniciar Session
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;