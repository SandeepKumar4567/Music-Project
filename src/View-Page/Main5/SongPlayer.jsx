import { useState } from "react";
// import Homepage from "../../Home-Page/Homepage";

function SongPlayer({ songObj }) {
    // const [back,setBack]=useState(false);

    // function handleClick() {
    //     setBack(true)
    // }

    // if(back){
    //     <Homepage />
    // }

    return (
        <div className="song-player-section">
            <div className="song-template">
                <img src={songObj.imageUrl} alt="" height={45} width={45} />
            </div>
            <br />
            <div className="song-name">
                <p>
                    <marquee direction="" scrollamount={3}>
                        Song Name Goes Here
                    </marquee>
                    <br /> Singer Name Goes Here
                </p>
            </div>
            <br />
            <div className="song">
                <audio id="audio" src={songObj.audioUrl} controls></audio>
            </div>
            <br />
            <br />
            <div>
                <button>Go BACK</button>
            </div>
        </div>

    );
}

export default SongPlayer;