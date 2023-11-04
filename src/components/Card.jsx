import { Link } from "react-router-dom";


const Card = ({user}) => {
    const {_id, image_url, brand} = user;
    return (
        <div>
           <div className="card w-[450px] bg-base-100 shadow-xl my-[100px] lg:ml-[30px] sm:ml-[100px]">
               <figure><img className="w-[450px] h-[650px]" src={image_url} /></figure>
                <div className="card-body">
                        <h2 className="card-title">Name :{brand}</h2>
                        
                       
                    <div className="card-actions flex justify-around items-center">
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn">Details</button>
                    </Link>
                    
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Card;