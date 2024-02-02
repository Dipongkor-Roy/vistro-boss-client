import useCart from "../../../Hooks/useCart";


const MyCart = () => {
    const [cart]=useCart();
    const total=cart.reduce((sum,item)=>item.price+sum,0) //here item traverse and total amount store in sum
    
    return (
        <div>
            <h2>Total Items: {cart.length}</h2>
            <h2>Total Price: {cart.length}</h2>
            <button className="btn btn-circle">Dj</button>
        </div>
    );
};

export default MyCart;