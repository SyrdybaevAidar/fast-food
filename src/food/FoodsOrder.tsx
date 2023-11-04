import { FoodModel } from "./FoodModel.ts";
import './FoodOrder.css';

export class FoodCountModel {
    Food: FoodModel;
    Count: number;
    constructor(food: FoodModel, count:number = 1){
      this.Food = food;
      this.Count = count;
    };

    getSum():number{
        return this.Count * this.Food.Price;
    }
  }

interface IFoodOrderProps  extends React.PropsWithChildren {
    Orders: FoodCountModel[];
    RemoveEventHandler(name: string): void;
}

export const FoodOrderComponent = (props: IFoodOrderProps) => {
    const listItems = props.Orders.map(item => (
    <div className="order">
        <p>{item.Food.Name}</p>
        <p className="price">{item.Food.Price} KGS * {item.Count}</p>
        <button className="remove-btn" onClick={() => props.RemoveEventHandler(item.Food.Name)}>x</button>
    </div>));

    const total = props.Orders.reduce((sum, current) => sum + current.getSum(), 0);
        return <div>
        <div className="orders">{listItems}
        <div>total: {total}</div></div>
    </div>
};