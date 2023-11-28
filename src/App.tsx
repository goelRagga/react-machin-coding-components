import { FC } from 'react';

import './style.css';
import Carousel from "./components/Carousel"
import Stopwatch from "./components/Stopwatch"
import Todo from "./components/Todo";

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
     <Carousel />
     <Stopwatch />
     <Todo />
    </div>
  );
};
