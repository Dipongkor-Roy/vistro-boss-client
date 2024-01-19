import Cover from "../Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import orderImage from "../../assets/shop/banner2.jpg";
import { useState } from "react";
import useMenu from "../../Hooks/useMenu/useMenu";
import OrderTab from '../../Pages/Order/OrderTab/OrderTab';

import { useParams } from "react-router-dom";

const Order = () => {
  const {category}=useParams();
  const categories=['Salad','Pizza','Soup','Dessert','Drinks'];
  const initalIndex=categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initalIndex);
 
   //to get params
  
  const [menu]=useMenu();
  
  const drinks= menu.filter((item) => item.category === "drinks");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  return (
    <div>
      <Cover title="Order Menu" image={orderImage}></Cover>
     <div className="flex justify-center items-center mb-[35px]">
     <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel >
      <OrderTab item={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab item={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab item={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab item={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab item={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
     </div>
     
    </div>
  );
};

export default Order;
