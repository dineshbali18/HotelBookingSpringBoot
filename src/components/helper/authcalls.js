import { API,API1,API2,API3,API4 } from "../../../src/backend";

export const signup = user => {
    console.log(user);
  return fetch(`${API4}/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const signin = user => {
  return fetch(`${API1}/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      // console.log("res",response.json());
      return response.json();
    })
    .catch((err)=>{
      console.log("err",err);
      // return err.json();
    });
};

export const getBookings=(id)=>{
  return fetch(`${API4}/user/bookings/${id}`,{
    method:'GET',
    headers:{
        Accept: "application/json",
        // Authorization: `Bearer ${token}`
    }
}).then(response => {
    return response.json();
  })
  .catch(err => console.log(err));
}

// export const getNameById=(id)=>{
//   return fetch(`${API}/user/${id}`,{
//     method:'GET',
//     headers:{
//         Accept: "application/json",
//         // Authorization: `Bearer ${token}`
//     }
// }).then(response => {
//     return response.json();
//   })
//   .catch(err => console.log(err));
// }


export const getAllBookings=()=>{
  return fetch(`${API4}/all/bookings`,{
    method:'GET',
    headers:{
        Accept: "application/json",
        // Authorization: `Bearer ${token}`
    }
}).then(response => {
    return response.json();
  })
  .catch(err => console.log(err));
}


export const getdestinations=()=>{
    return fetch(`${API3}/destinations`,{
        method:'GET',
        headers:{
            Accept: "application/json",
            // Authorization: `Bearer ${token}`
        }
    }).then(response => {
      console.log("Ressssssssssssssssssssss",response);
        return response.json();
      })
      .catch(err => console.log(err));
}

export const getHotelsByCity=(city)=>{
  return fetch(`${API2}/destination/${city.cityname}/hotels`,{
    method:'GET',
    headers:{
        Accept: "application/json",
        // Authorization: `Bearer ${token}`
    }
}).then(response => {
    return response.json();
  })
  .catch(err => console.log(err));

}
export const getHotelsByCity2=(city)=>{
  return fetch(`${API2}/destination/${city}/hotels`,{
    method:'GET',
    headers:{
        Accept: "application/json",
        // Authorization: `Bearer ${token}`
    }
}).then(response => {
    return response.json();
  })
  .catch(err => console.log(err));

}

export const addBooking=(bookdata)=>{
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
  console.log(bookdata);
  return fetch(`${API4}/user/create/booking`,{
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(bookdata)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
}
// export const authenticate = (data, next) => {
//   if (typeof window !== "undefined") {
//     localStorage.setItem("jwt", JSON.stringify(data));
//     next();
//   }
// };

export const signout = next => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    next();

    // return fetch(`${API}/signout`, {
    //   method: "GET"
    // })
    //   .then(response => console.log("signout success"))
    //   .catch(err => console.log(err));
  }
};

export const isAutheticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};

export const deleteHotel=(hotelid)=>{
  return fetch(`${API2}/destination/delete/hotel/${hotelid}`,{
    method:'DELETE'
  })
}

export const deleteDestinationback=(destinationid)=>{
  return fetch(`${API3}/admin/delete/destinations/${destinationid}`,{
    method:'DELETE'
  })
}

export const createDestination=(destData)=>{
  return fetch(`${API3}/admin/create/destination`,{
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(destData)
  })
    .then(response => {
      console.log(response);
      return response.json();
    })
    .catch(err => console.log(err));
}

export const createHotel=(hotelData)=>{
  return fetch(`${API2}/destination/create/hotels`,{
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(hotelData)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
}