const URL = "https://restcountries.com/v3.1/name";


export const getFlagDetail = async (name) => {
  console.log("nombre",name)
  console.log("nombre",`${URL}/${name}`)
    try {
      const response = await fetch(`${URL}/${name}`);
      const data = await response.json();
      console.log("aqui todo",data)
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };