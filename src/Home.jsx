import React, { useEffect, useState } from "react";
import Popuplogin from "./Popuplogin";

function Home() {
    const [popup, setPopup] = useState(false);
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);
    }, []);

    
    return (
        <>
            <div className="container" id="blur">
            <button className="buttonpop"  onClick={setPopup.bind(this, true)}><img className="buttonpop" src="bg.jpg" alt="bg" /></button>
                    {popup && <Popuplogin setPopup={setPopup} />}

                <div className="top-left">
                    <img className="search" src="search.jpg" alt="search" />
                    <p>A glass of Cabenet Sauvignon can <br /> certainly be enjoyed without the <br /> benefit of a spectacular view.</p>
                </div>
                <div className="top-right">
                    <img className="camera" src="camera.jpg" alt="camera" />
                    <p>Like the image that you see?</p>
                </div>
                <div className="bottom-right">
                    <svg style={{ marginRight: "1rem" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-wifi" viewBox="0 0 16 16">
                        <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z" />
                        <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-battery-half" viewBox="0 0 16 16">
                        <path d="M2 6h5v4H2V6z" />
                        <path d="M2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2zm10 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10zm4 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z" />
                    </svg>
                </div>
                {/* date and time */}
                <div className="centered">
                    <h1 style={{ fontSize: "7rem" }}>{dateState.toLocaleString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true,
                    })}</h1>
                    <h4 className="center2">{dateState.toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                    })} </h4><br /><br /><br />
                    {/* date and time */}
                    <img className="search" src="search.jpg" alt="search" /> 
                    <p>A glass of Cabenet Sauvignon can <br /> certainly be enjoyed without the <br /> benefit of a spectacular view.</p>
                </div>
            </div>
        </>
    )
}

export default Home;