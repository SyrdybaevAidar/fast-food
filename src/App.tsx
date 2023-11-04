import { useState } from 'react';
import { FoodComponent } from './food/Food.tsx';
import { FoodOrderComponent } from './food/FoodsOrder.tsx';
import { FoodCountModel } from './food/FoodsOrder.tsx';
import { FoodModel } from './food/FoodModel.ts';
import './App.css';

const App = () => {

  const addFood = (food: FoodModel) => {
    const ordersCopy = [...orders];
    const findItemIndex = ordersCopy.findIndex(it => it.Food.Name === food.Name);
    if(findItemIndex >= 0){
      ordersCopy[findItemIndex].Count++;
    } else{
      ordersCopy.push(new FoodCountModel(food));
    }
    setOrders(ordersCopy);
  };

  const removeFood = (name: string) => {
    const ordersCopy = [...orders].filter(it => it.Food.Name != name);
    setOrders(ordersCopy);
  };
  

  const foods: FoodModel[] = [
    new FoodModel("Fri", 10),
    new FoodModel("Pizza", 20),
    new FoodModel("Ice-Cream", 10),
    new FoodModel("Latte", 100),
    new FoodModel("Cacao", 150),
    new FoodModel("Chocolate", 90),
    new FoodModel("Water", 10),
    new FoodModel("Fish", 220),
    new FoodModel("Burger", 180),
    new FoodModel("Chicken", 340),
    new FoodModel("Ramen", 300),
    new FoodModel("Soup", 150)
  ];

  const foodComponents = foods.map(item => 
      (<FoodComponent Name={item.Name} Price={item.Price} AddEventHandler={() => addFood(item)}></FoodComponent>)
    );

  const [orders, setOrders] = useState(new Array<FoodCountModel>());

  return (
    <div className="container">
        <FoodOrderComponent Orders={orders} RemoveEventHandler={e => removeFood(e)}></FoodOrderComponent>
        <div className='foods'>
          {foodComponents}
        </div>
    </div>
  );
};

export default App
