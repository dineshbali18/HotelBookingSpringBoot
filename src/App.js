import {Route,Routes} from "react-router-dom"

import Signup from "./components/Signup";
import Signin from "./components/Signin"
import Destination from "./components/Destinations";
import Hotel from "./components/Hotels";
import HotelDesc from "./components/HotelDesc";
import Bookings from "./components/Bookings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/destination" element={<Destination/>}/>
      <Route path="/hotels/:cityname" element={<Hotel/>}/>
      <Route path="/hotel/description" element={<HotelDesc/>}/>
      <Route path="/bookings" element={<Bookings/>}/>
      {/* <Route path="/" element={<Signup/>}/>
      <Route path="/" element={<Signup/>}/> */}
    </Routes>
  );
}
export default App;