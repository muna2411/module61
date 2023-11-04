
import Card from "./Card";
import { useEffect, useState } from "react";


const Home = () => {
   
    const [users,setUsers] = useState([]);

    useEffect(() =>{
      fetch('http://localhost:5000/B')
      .then(res => res.json())
      .then(data => setUsers(data))
    },[])

    return (
        <div>
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:mx-[80px] mb-[200px] ">
                {
                    users.map(user => <Card key={user._id} user={user} ></Card>)
                }
            </div>
        </div>
    );
};

export default Home;