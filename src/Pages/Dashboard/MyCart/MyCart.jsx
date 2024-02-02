import useCart from "../../../Hooks/useCart";


const MyCart = () => {
    const [cart]=useCart();
    const total=cart.reduce((sum,item)=>item.price+sum,0) //here item traverse and total amount store in sum

    return (
        <div className="uppercase">
            <h2 className="text-2xl">Total Items: {cart.length}</h2>
            <h2 className="text-2xl">Total Price: {total}</h2>
            <button className="btn btn-warning btn-circle">Pay</button>
        </div>
    );
};

export default MyCart;