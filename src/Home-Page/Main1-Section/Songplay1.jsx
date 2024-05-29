import { useRef, useState } from "react";

function Songplay1() {
    
   // const [player,setPlayer]=useState(false);

    // function handleClick() {
    //     setPlayer(true);
    // }
    // if(player){
    //     return <Viewpage />
    // }
    return (
        <div className="songplay-section">
            <div href="./viewpage.html">
                <div className="song-pic">
                    <img src="./Photos/song-one-image.jpeg" alt="" height={45} width={45}/>
                </div>
            </div>
            <div>
                <div className="song">
                    <audio id="audio" src="http://localhost:3434/audios/song1.mp3"  controls></audio>
                </div>
            </div>
        </div>

    );
}

export default Songplay1;