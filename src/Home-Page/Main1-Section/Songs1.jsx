// const arr = [
//     {
//         img: <img src="./Photos/song-one-image.jpeg" height={1000}></img>,
//         para1: "Muttu Muttu",
//         para2: "Teejay",
//     },
//     {
//         img: " ",
//         para1: "Enaku Oru Aasai",
//         para2: "Teejay",
//     },
//     {
//         img: " ",
//         para1: "Muttu Muttu",
//         para2: "Teejay",
//     },
//     {
//         img: " ",
//         para1: "Muttu Muttu",
//         para2: "Teejay",
//     },
//     {
//         img: " ",
//         para1: "Muttu Muttu",
//         para2: "Teejay",
//     },
//     {
//         img: " ",
//         para1: "Muttu Muttu",
//         para2: "Teejay",
//     },
//     {
//         img: " ",
//         para1: "Muttu Muttu",
//         para2: "Teejay",
//     },
//     {
//         img: " ",
//         para1: "Muttu Muttu",
//         para2: "Teejay",
//     },
//     {
//         img: " ",
//         para1: "Muttu Muttu",
//         para2: "Teejay",
//     },
//     {
//         img: " ",
//         para1: "Muttu Muttu",
//         para2: "Teejay",
//     },
//     {
//         img: " ",
//         para1: "Muttu Muttu",
//         para2: "Teejay",
//     },
//     {
//         img: " ",
//         para1: "Muttu Muttu",
//         para2: "Teejay",
//     },
//     {
//         img: " ",
//         para1: "Muttu Muttu",
//         para2: "Teejay",
//     },
//     {
//         img: " ",
//         para1: "Muttu Muttu",
//         para2: "Teejay",
//     }
// ]


// function CardComp() {

// }

function Songs1({ setPlay }) {


    function handleClick() {
        
    }


    return (
        // <>
        // {
        //     arr.map((value, index) => {
        //         return (
        //             <>
        //                 <div className="songplay-section">
        //                     <div className="song-section">
        //                         <h2>Song-Lists</h2>
        //                         <div className="sec2div">
        //                             <span className="sec2square">
        //                                 <span>{value.img}</span>
        //                             </span>
        //                             <div>
        //                                 <p key={index} className="para">{value.para1}</p>
        //                                 <p key={index} className="para2">{value.para2}</p>
        //                             </div>
        //                             <button>Play</button>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </>
        //         )
        //     })
        // }
        // </>
        <div className="song-section">
            <h2>Song-Lists</h2>
            <div className="sec2div">
                <span className="sec2square">
                    <img
                        src="./Photos/song-one-image.jpeg"
                        alt=""
                        height="60px"
                        width="60px"
                    />
                </span>
                <div>
                    <p className="para">Muttu Muttu</p>
                    <p className="para2">Teejay</p>
                </div>
                <button onClick={()=> setPlay("song1")}>Play</button>
            </div>

            <br />
            <br />

            <div className="sec2div">
                <span className="sec2square">
                    <img
                        src="./Photos/song-two-image.jpeg"
                        alt=""
                        height="60px"
                        width="60px"
                    />
                </span>
                <div>
                    <p className="para">Enaku Oru Aasai</p>
                    <p className="para2">Teejay</p>
                </div>
                <button>Play</button>
                {/* <audio src="http://localhost:3434/audios/song2.mp3" controls></audio> */}

            </div>
            <br />
            <br />
            <div className="sec2div">
                <span className="sec2square">
                    <img
                        src="./Photos/song-three-image.jpg"
                        alt=""
                        height="60px"
                        width="60px"
                    />
                </span>
                <div>
                    <p className="para">Enakenna Yaarum Illaye (From "Aakko")</p>
                    <p className="para2">Anirudh Ravichander</p>
                </div>
                <button>Play</button>
                {/* <audio src="http://localhost:3434/audios/song3.mp3" controls></audio> */}

            </div>
            <br />
            <br />
            <div className="sec2div">
                <span className="sec2square">
                    <img
                        src="./Photos/song-four-image.jpg"
                        alt=""
                        height="60px"
                        width="60px"
                    />
                </span>
                <div>
                    <p className="para">Orasaadha - Madra Gig</p>
                    <p className="para2">Vivek - Mervin</p>
                </div>
                <button>Play</button>
                {/* <audio src="http://localhost:3434/audios/song4.mp3" controls></audio> */}

            </div>
            <br />
            <br />
            <div className="sec2div">
                <span className="sec2square">
                    <img
                        src="./Photos/song-five-image.jpg"
                        alt=""
                        height="60px"
                        width="60px"
                    />
                </span>
                <div>
                    <p className="para">Ennai Kollathey</p>
                    <p className="para2">Kumaresh - Keshini</p>
                </div>
                <button>Play</button>
                {/* <audio src="http://localhost:3434/audios/song5.mp3" controls></audio> */}

            </div>
            <br />
            <br />
            <div className="sec2div">
                <span className="sec2square">
                    <img
                        src="./Photos/song-six-image.jpg"
                        alt=""
                        height="60px"
                        width="60px"
                    />
                </span>
                <div>
                    <p className="para">Raati - Madras Gig</p>
                    <p className="para2">Santhosh Dhayanidhi,Bamba Bakya</p>
                </div>
                <button>Play</button>
                {/* <audio src="http://localhost:3434/audios/song6.mp3" controls></audio> */}

            </div>
            <br />
            <br />
            <div className="sec2div">
                <span className="sec2square">
                    <img
                        src="./Photos/song-seven-image.jpg"
                        alt=""
                        height="60px"
                        width="60px"
                    />
                </span>
                <div>
                    <p className="para">Usuraiya Tholaichaen</p>
                    <p className="para2">Stephen Zechariah</p>
                </div>
                <button>Play</button>
                {/* <audio src="http://localhost:3434/audios/song7.mp3" controls></audio> */}

            </div>
            <br />
            <br />
            <div className="sec2div">
                <span className="sec2square">
                    <img
                        src="./Photos/song-eight-image.jpg"
                        alt=""
                        height="60px"
                        width="60px"
                    />
                </span>
                <div>
                    <p className="para">Vellai Poove</p>
                    <p className="para2">ADK Srirascol,Teejay</p>
                </div>
                <button>Play</button>
                {/* <audio src="http://localhost:3434/audios/song8.mp3" controls></audio> */}

            </div>
            <br />
            <br />
            <div className="sec2div">
                <span className="sec2square">
                    <img
                        src="./Photos/song-nine-image.jpg"
                        alt=""
                        height="60px"
                        width="60px"
                    />
                </span>
                <div>
                    <p className="para">Manasara Sollu</p>
                    <p className="para2">Teejay</p>
                </div>
                <button>Play</button>
                {/* <audio src="http://localhost:3434/audios/song9.mp3" controls></audio> */}

            </div>
            <br />
            <br />
            <div className="sec2div">
                <span className="sec2square">
                    <img
                        src="./Photos/song-ten-image.jpg"
                        alt=""
                        height="60px"
                        width="60px"
                    />
                </span>
                <div>
                    <p className="para">Maamadura - From "Jigarthanda Double X"</p>
                    <p className="para2">Santhosh Narayanan,Dhee,Vivek</p>
                </div>
                <button>Play</button>
                {/* <audio src="http://localhost:3434/audios/song10.mp3" controls></audio> */}

            </div>
            <br />
            <br />
            <div className="sec2div">
                <span className="sec2square">
                    <img
                        src="./Photos/song-eleven-image.jpg"
                        alt=""
                        height="60px"
                        width="60px"
                    />
                </span>
                <div>
                    <p className="para">Katchi Sera - From "Think iIndie"</p>
                    <p className="para2">Sai Abhyankkar</p>
                </div>
                <button>Play</button>
                {/* <audio src="http://localhost:3434/audios/song11.mp3" controls></audio> */}

            </div>
            <br />
            <br />
            <div className="sec2div">
                <span className="sec2square">
                    <img
                        src="./Photos/song-tweleve-image.jpg"
                        alt=""
                        height="60px"
                        width="60px"
                    />
                </span>
                <div>
                    <p className="para">Naa Ready From "Leo"</p>
                    <p className="para2">Anirudh Ravichander,Thalapathy Vijay</p>
                </div>
                <button>Play</button>
                {/* <audio src="http://localhost:3434/audios/song12.mp3" controls></audio> */}

            </div>
            <br />
            <br />
            <div className="sec2div">
                <span className="sec2square">
                    <img
                        src="./Photos/song-thirteen-image.jpg"
                        alt=""
                        height="60px"
                        width="60px"
                    />
                </span>
                <div>
                    <p className="para">Vantha Edam From "Jawan"</p>
                    <p className="para2">Anirudh Ravichander,Vivek</p>
                </div>
                <button>Play</button>
                {/* <audio src="http://localhost:3434/audios/song13.mp3" controls></audio> */}

            </div>
            <br />
            <br />
            <div className="sec2div">
                <span className="sec2square">
                    <img
                        src="./Photos/song-fourteen-image.jpg"
                        alt=""
                        height="60px"
                        width="60px"
                    />
                </span>
                <div>
                    <p className="para">Thaai Kelavi (From "Thiruchitrabalam")</p>
                    <p className="para2">Dhanush</p>
                </div>
                <button>Play</button>
                {/* <audio src="http://localhost:3434/audios/song14.mp3" controls></audio> */}

            </div>
            <br />
            <br />
        </div>
    );
}

export default Songs1;