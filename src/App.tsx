import { FC } from 'react';
import folderData from "./folderData"
import './style.css';
import Carousel from "./components/Carousel"
import Stopwatch from "./components/Stopwatch"
import Todo from "./components/Todo";
import Accordion from "./components/Accordion"
import InfiniteScroll from "./components/InfiniteScroll";

export const App: FC<{ name: string }> = ({ name }) => {

  return (
    <div>
     <Carousel />
     <Stopwatch />
     <Todo />
     <h3 style={{textAlign:"center"}}>Folder Structure / Nested Accordion </h3>
     <Accordion folderData={folderData}/>
     <InfiniteScroll />
    </div>
  );
};
