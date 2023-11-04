import { FoodModel } from "./FoodModel";

interface IFoodProps extends React.PropsWithChildren {
    Name: string;
    Price: number;
    AddEventHandler(food: FoodModel): void
}

export const FoodComponent = (props: IFoodProps) => {
    return (<div className="food" onClick={() => props.AddEventHandler(new FoodModel(props.Name, props.Price))}>
        <p>{props.Name}</p>
        <p>Price: {props.Price}</p>
    </div>);
};