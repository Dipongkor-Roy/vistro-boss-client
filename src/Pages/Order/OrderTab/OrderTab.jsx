import MenuCard from "../../../Components/MenuCard/MenuCard";

const OrderTab = ({item}) => {
    return (
        <div className="grid md:grid-cols-2 gap-44 mx-5">
        {
            item.map(item=><MenuCard key={item._id} item={item}></MenuCard>)
          }
        </div>
    );
};

export default OrderTab;