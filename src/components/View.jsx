import React from "react";


const View = ({ response }) => {
    return (
        <div>
            <h1>Infinite Scroll</h1>
            {response.map((resp, index) => (
                <div style={{border:"1px solid #111", padding:"4px", margin:"10px"}}>
                    <h2>{resp.title.substr(0,15)}</h2>
                    <p>{resp.body}</p>
                </div>
            ))}

        </div>
    )
}

export default View;