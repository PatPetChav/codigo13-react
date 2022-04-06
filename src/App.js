import Router from "./router"
import { UserProvider } from "./Context/UserContext";

//verificaremos mi branch
const App = () => {
  return (
    <UserProvider>
      <div>
        <Router />
      </div>
    </UserProvider>
  );
};

export default App