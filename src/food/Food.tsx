interface IFoodProps extends React.PropsWithChildren {
    Name: string
    Price: number
}

export const FoodComponent = (props: IFoodProps) => {
    return (<>
        <p>{props.Name}</p>
        <p>Price: {props.Price}</p>
    </>);
};