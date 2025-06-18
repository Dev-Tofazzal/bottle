import './Bottle.css'
const Bottle = ({bottle}) => {
    console.log(bottle);
    const {name,img,price} = bottle;
    
    return (
        <div className="bottle">
         <h2>Name:{name}</h2>   
         <img src={img} alt="" />
         <p>price: {price}</p>
        </div>
    );
};

export default Bottle;