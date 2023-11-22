import React, { useEffect, useState } from "react"

const Carousel = () =>{

    const[activeSlide,setActiveSlide] = useState(0);

    const carouselObject = [

        {
            title:"Image 1",
            description:"Test Description of Image 1",
            imgUrl:"https://storage.googleapis.com/pai-images/52b82a3c9e044ec091d36c55ca4fb9d1.jpeg"
        },
        {
            title:"Image 2",
            description:"Test Description of Image 2",
            imgUrl:"https://storage.googleapis.com/pai-images/da927380b50344a7a7139c9f8f732100.jpeg"
        },
        {
            title:"Image 3",
            description:"Test Description of Image 3",
            imgUrl:"https://storage.googleapis.com/pai-images/6056e603210843bea82ddf80e21f5647.jpeg"
        },
      
        {
            title:"Image 4",
            description:"Test Description of Image 4",
            imgUrl:"https://storage.googleapis.com/pai-images/4000129ed1d54c8fa497bd1a71313b8d.jpeg"
        },
        {
            title:"Image 5",
            description:"Test Description of Image 5",
            imgUrl:"https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/6f4eefa2-a6ed-4f70-9c30-d99c8476b83a/width/u003d1536/00051-161668497-CircusPunkAI%20colorful%20circus%20tent,%20detailed,%20intricate.jpeg"
        }
    ]


    const handleNext =()=>{
        if(activeSlide==carouselObject.length-1){
            setActiveSlide(0)
        }
        else{
            setActiveSlide(prev=>prev+1)
        }
    }

    const handlePrev = () =>{
        if(activeSlide==0){
            setActiveSlide(carouselObject.length-1)
        }
        else{
            setActiveSlide(prev=>prev-1)
        }
    }


    useEffect(()=>{
        const timer = setInterval(() => {
            handleNext();
          }, 2000);
          return () => clearInterval(timer);
    },[activeSlide])

    return(
        <div style={{textAlign:"center"}}>
            <h1>Carousel Component</h1>
            <div>
            <h4>{carouselObject[activeSlide].title}</h4>
                 <img src={carouselObject[activeSlide].imgUrl} width={400} height={300}/>
                 <p><bold>Description: </bold>{carouselObject[activeSlide].description}</p>
            </div>
               
            <div style={{display:"flex", justifyContent:"center"}}>
            
              <button style={{padding:"5px", margin:"5px", borderRadius:"5px", cursor:"pointer"}}
              onClick={handlePrev}
              > Prev </button>
                <button style={{padding:"5px", margin:"5px", borderRadius:"5px", cursor:"pointer"}}
              onClick={handleNext}
              > Next </button>
            </div>
        </div>
    )
}


export default Carousel;