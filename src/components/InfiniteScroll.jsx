import React, { useEffect, useState } from "react";
import View from "./View";

const InfiniteScroll = () => {

    const [response, setResponse] = useState([]);
    const [page,setPage] = useState(0)
    const [loading,setLoading] = useState(false)

    const getData =  async () =>{
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?` + new URLSearchParams({
            _limit:9,
            _page:page
        }))
        const data = await res.json();
        setResponse((oldData)=>[...oldData,...data]);
        setLoading(false)
    }


    useEffect(()=>{
        console.log("PAGE NUMBEr",page)
        getData();
    },[page]);

    const handleInfiniteScroll = () =>{
        const {
            scrollTop,
            scrollHeight,
            clientHeight
        } = document.documentElement;


        if( window.innerHeight + window.pageYOffset >= document.body.offsetHeight-5 ){
            console.log("TATTI")
            alert(1);
            setLoading(true);
            setPage((prev)=>prev+1)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',handleInfiniteScroll)
    },[])

    return (
        <div style={{marginTop:"20px"}}>
            <View  response={response}/>
        </div>
    )
}

export default InfiniteScroll;