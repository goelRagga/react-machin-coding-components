import { FC } from 'react';

import './style.css';
import Carousel from "./components/Carousel"
import Stopwatch from "./components/Stopwatch"

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
     <Carousel />
     <Stopwatch />
    </div>
  );
};
