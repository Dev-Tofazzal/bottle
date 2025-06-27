import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLs, getStoredCart } from "../../utilities/localStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch("bottles.json")
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    useEffect(() => {
       
        if(bottles.length){
            const storeCart = getStoredCart();
            const savedCart = [ ];
            for(const id of storeCart){
                const bottle = bottles.find(bottle => bottle.id === id )
                if(bottle){
                    savedCart.push(bottle)
                }
                setCart(savedCart)
                
                
            }
            
        }
        
    },[bottles])

    const handleAddToCart = bottle => {
        const newCart = [...cart,bottle];
        setCart(newCart)
        addToLs(bottle.id)
    }

    return (
        <div>
            <h1>Bottles Available : {bottles.length}</h1>
            <Cart cart={cart}></Cart>

            <div className="bottles_container">
                {
                    bottles.map(bottle => <Bottle 
                        key={bottle.id}
                         bottle={bottle} 
                         handleAddToCart={handleAddToCart}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;