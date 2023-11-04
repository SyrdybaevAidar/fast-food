import { useState } from 'react';
import './App.css';
import { FoodComponent } from './food/Food.tsx';
import { FoodOrderComponent } from './food/FoodsOrder.tsx';
import { FoodModel } from './food/FoodModel.ts';

const App = () => {

  const addFood = (food: FoodModel) => {
    const ordersCopy = [...orders];
    ordersCopy.push(food);
    setOrders(ordersCopy);
  };

  const removeFood = (name: string) => {
    const ordersCopy = [...orders].filter(it => it.Name != name);
    setOrders(ordersCopy);
  };
  

  const foods: FoodModel[] = [
    new FoodModel("Fri", 0),
    new FoodModel("Pizza", 0),
    new FoodModel("Ice-Cream", 0),
    new FoodModel("Latte", 0),
    new FoodModel("Cacao", 0),
    new FoodModel("Chocolate", 0),
    new FoodModel("Water", 0),
    new FoodModel("Fish", 0),
    new FoodModel("Burger", 0),
    new FoodModel("Chicken", 0),
    new FoodModel("Ramen", 0),
    new FoodModel("Soup", 0)
  ];

  const foodComponents = foods.map(item => 
      (<FoodComponent Name={item.Name} Price={item.Price} AddEventHandler={() => addFood(item)}></FoodComponent>)
    );

  const [orders, setOrders] = useState(new Array<FoodModel>());

  return (
    <>
        <FoodOrderComponent Orders={orders} RemoveEventHandler={e => removeFood(e)}></FoodOrderComponent>
        <div className='foods'>
          {foodComponents}
        </div>
    </>
  );
};

export default App
