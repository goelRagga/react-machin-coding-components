import React, { useEffect } from "react";
import View from "./View";

const InfiniteScroll = () => {

    const [response, setResponse] = useState([]);

    const getData =  async () =>{
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=0`)
        const data = await res.json();
        setResponse(data);
    }


    useEffect(()=>{
        getData();
    },[]);

    return (
        <div>
            <View  response={response}/>
        </div>
    )
}

export default InfiniteScroll;