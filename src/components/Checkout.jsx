import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const Checkout = () => {
    const service = useLoaderData();
    const {_id,brand, price ,image_url} = service;
    const{user} =useContext(AuthContext);

const handlecheckout = event =>{
    event.preventDefault();

    const form = event.target;
    const name = form.name.value; 
    const date= form.date.value;
    const email = user?.email;
    const booking ={
        customerName : name,
        email,
        date,
        image_url,
        service:brand,
        service_id:_id,
        price:price

    }
    console.log(booking);

    fetch('http://localhost:5000/bookings',{
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
}

    return (
        <div>
            <p>Book {brand}</p>
            <form onSubmit={handlecheckout} className="grid lg:grid-cols-3 sm:grid-cols-1 lg:m-[50px] sm:m-[10px]">

              <div className="form-control m-[50px]">
                <label className="label">
                  <span className="label-text text-[20px] text-black font-semibold">Name</span>
                </label>
                <input type="text" placeholder="Type name" defaultValue={user?.displayName} name="name" className="input input-bordered " style={{ border: "3px solid black" }} required />
              </div>

              <div className="form-control m-[50px]">
                <label className="label">
                  <span className="label-text text-[20px] text-black font-semibold">Email</span>
                </label>
                <input type="text" placeholder="Type email" defaultValue={user?.email} name="email" className="input input-bordered"  style={{ border: "3px solid black" }} required />
              </div>

              <div className="form-control m-[50px]">
                <label className="label">
                  <span className="label-text text-[20px] text-black font-semibold">Price</span>
                </label>
                <input type="text"  defaultValue={'$' + price}  className="input input-bordered" style={{ border: "3px solid black" }} required />
              </div>


              <div className="form-control m-[50px]">
                <label className="label">
                  <span className="label-text text-[20px] text-black font-semibold">Date</span>
                </label>
                <input type="date" name="date" className="input input-bordered" style={{ border: "3px solid black" }} required />
              </div>

          

              <input type="submit" value="ADD" className="btn bg-black text-white form-control lg:mt-[200px] sm:mt-[50px] w-[120px] h-[60px] ml-[300px]"  style={{ border: "3px solid black" }}/>
          
        </form> 
        </div>
    );
};

export default Checkout;