import { Routes, Route } from "react-router-dom";

import Home from "./Routes/home/home.component";
import Navigation from "./Routes/navigation/navigation.component";
import SignIn from "./Routes/sign-in/signIn.component";
const Shop = () => {
  return <h2>I am the shop component.</h2>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation></Navigation>}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop></Shop>}></Route>
        <Route path="sign-in" element={<SignIn></SignIn>}></Route>
      </Route>
    </Routes>
  );
};

export default App;
