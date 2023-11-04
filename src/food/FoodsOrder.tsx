import { FoodModel } from "./FoodModel.ts";

interface IFoodOrderProps  extends React.PropsWithChildren {
    Orders: FoodModel[];
    RemoveEventHandler(name: string): void;
}

export const FoodOrderComponent = (props: IFoodOrderProps) => {
    const listItems = props.Orders.map(item => (
    <>
        <p>{item.Name}</p>
        <p>{item.Price}</p>
        <button onClick={() => props.RemoveEventHandler(item.Name)}>x</button>
    </>));

    const total = props.Orders.reduce((sum, current) => sum + current.Price, 0);
        return <div>
        <div>{listItems}</div>
        <div>total: {total}</div>
    </div>
};