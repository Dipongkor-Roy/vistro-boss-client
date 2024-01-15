
const MenuIteam = ({iteam}) => {
 
    const {name,image,price,recipe}=iteam;
    return (
        <section>
            <img src={image} alt="" />
            <div>
                <h2 className=" uppercase">{name}----------</h2>
                <p className="text-sm font-light"> {recipe}</p>
            </div>
            <p>{price}</p>
        </section>
    );
};

export default MenuIteam;