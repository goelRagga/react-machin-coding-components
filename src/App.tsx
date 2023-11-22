import { FC } from 'react';

import './style.css';
import Carousel from "./components/Carousel"

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
     <Carousel />
    </div>
  );
};
