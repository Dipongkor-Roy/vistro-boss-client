
const MenuIteam = ({iteam}) => {
 
    const {name,image,price,recipe}=iteam;
    return (
        <section className="flex  gap-x-7">
            <img style={{borderRadius:"0 200px 200px 200px"}} className="w-[120px]" src={image} alt="" />
            <div>
                <h2 className=" uppercase">{name}----------</h2>
                <p className="text-sm font-light"> {recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </section>
    );
};

export default MenuIteam; 