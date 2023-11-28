import React, { useState } from "react";


const Accordion  = ( {folderData}) =>{

    const [expanded,setExpanded] = useState(false)
    console.log("Flie Data in component", folderData)
    if(folderData.folderItems ){
        return (
            <>
             
                <div onClick={()=> setExpanded((prev)=> !prev)} style={{cursor:"pointer"}}>  {expanded ? "📂":"📁"} {folderData.name}</div>
              
                <div style={{ display:expanded? "block":"none", cursor:"pointer", paddingLeft:"15px"}}>
                    {folderData.folderItems.map((item)=>(
                        <Accordion folderData={item} />
                    ))}
                </div>
            </>
        )
    }
    else{
        return <div>🏷️ {folderData.name}</div>
    }
}

export default Accordion;