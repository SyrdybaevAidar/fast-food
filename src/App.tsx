import { useState } from 'react'
import './App.css'
import { FoodComponent } from './food/Food';

const App = () => {
  return (
    <FoodComponent Name='Burger' Price={150}></FoodComponent>
  );
};

export default App
