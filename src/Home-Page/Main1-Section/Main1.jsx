import { useState } from "react";
import SwitchSongs from "../../SwitchSongs/SwitchSongs";
import Playlists1 from "./Playlists1";
import Songplay1 from "./Songplay1";
import Songs1 from "./Songs1";




function Main1() {
    // const [obj,setObj] = useState({ play: false, src : "" });
    const [play,setPlay]=useState("");


    return ( 
        <main>
        <h2 className="playlist-h2">Playlists</h2>
        <Playlists1></Playlists1>
        <Songs1  setPlay={setPlay}></Songs1>
        <Songplay1></Songplay1>
        <SwitchSongs play={play} />
        </main>
     );
}

export default Main1;