const MenuCard = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div className="card w-96 bg-base-100 shadow-xl  ">
      <figure>
        <img
          src={image}
          alt='img'
        />
         
      </figure>
      <p className="absolute right-0 bg-slate-900  px-3 rounded-md my-3 mr-4">$ {price}</p>
   
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to Card</button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
