import React, { useEffect, useState } from "react";


const TileProblem = () => {
    const initialColors = ["#CD5C5C", "#F08080", "#FFBF00", "#6495ED", "#40E0D0", "#9FE2BF", "#800080", "#FF0000", "#000000", "#808000"];


    const [tileColors, setTileColors] = useState(initialColors);
    const [changeHistory, setChangeHistory] = useState([]);



    const handleTileClick = (index) => {

        let randomColor;
        do {
            randomColor = initialColors[Math.floor(Math.random() * initialColors.length)];
        } while (randomColor === tileColors[index - 1]);


        setTileColors((prevColors) => {
            const newColors = [...prevColors];
            newColors[index] = randomColor;
            return newColors;
        });

        setChangeHistory((prevHistory) => [...prevHistory, [...tileColors]]);
    };
    console.log("PREVIOUS COLOURS", changeHistory)


    const handleReverseColors = () => {
        if (changeHistory.length > 1) {
            // Remove the last entry from the history
            const updatedHistory = [...changeHistory];
            updatedHistory.pop();

            // Get the previous colors from the updated history
            const previousColors = updatedHistory[updatedHistory.length - 1];

            // Update the current colors and history
            setTileColors(previousColors);
            setChangeHistory(updatedHistory);
        }
    };


    const tileArray = tileColors.map((color, index) => (
        <div
            key={index}
            style={{
                backgroundColor: color, width: "50px",
                height: "50px",
                border: "none",
                cursor: "pointer"
            }}
            onClick={() => handleTileClick(index)}
        />
    ));

    return (
        <div style={{ marginTop: "20px" }}>
            <h1> Tile Problem</h1>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 50px)",
                gridGap: 20,
                width: "100%"
            }}>
                {tileArray}
            </div>
            <button style={{ border: "1px solid black", padding: "10px", margin: "20px", cursor: "pointer" }} onClick={handleReverseColors}>Reverse Colours</button>

        </div>

    )
}

export default TileProblem;