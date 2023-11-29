import React from "react";


const View = ({ response }) => {
    return (
        <div style={{border:"2px solid #111"}}>
            <h1>Infinite Scroll</h1>
            {response.map((resp, index) => (
                <div>
                    <h2>{resp.title.substr(0,15)}</h2>
                    <p>{resp.body}</p>
                </div>
            ))}

        </div>
    )
}

export default View;