import {Route,Routes} from "react-router-dom"

import Signup from "./components/Signup";
import Signin from "./components/Signin"
import Destination from "./components/Destinations";
import Hotel from "./components/Hotels";
import HotelDesc from "./components/HotelDesc";
import Bookings from "./components/Bookings";
import Signout from "./components/Signout";
import AdminDashboard from "./components/AdminDashboard";
import CreateHotel from "./components/CreateHotel";
import DeleteDestination from "./components/DeleteDestination";
import DeleteHotel from "./components/DeleteHotel";
import CreateDestination from "./components/CreateDestination";
// import Payment from "./components/Payment";

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
      <Route path="/signout" element={<Signin/>}/>
      <Route path="/admin" element={<AdminDashboard/>}/>
      <Route path="/admin/create/destination" element={<CreateDestination/>}/>
      <Route path="/admin/delete/destination" element={<DeleteDestination/>}/>
      <Route path="/admin/create/hotel" element={<CreateHotel/>}/>
      <Route path="/admin/delete/hotel" element={<DeleteHotel/>}/>
      {/* <Route path="/user/payment" element={<Payment/>}/> */}

      {/* <Route path="/" element={<Signup/>}/>
      <Route path="/" element={<Signup/>}/> */}
    </Routes>
  );
}
export default App;