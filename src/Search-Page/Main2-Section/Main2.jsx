import Playlists2 from "./Playlists2";
import Songplay2 from "./Songplay2";
import Songs2 from "./Songs2";

function Main2() {
    return ( 
        <div className="main-02" >
            <Songs2></Songs2>
            <h2 className="playlist-h2">Playlists</h2>
            <Playlists2></Playlists2>
            <Songplay2></Songplay2>
        </div>
     );
}

export default Main2;