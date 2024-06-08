import Flexpart4 from "./Flexpart4";

function Header3() {
    return (
        <div className="header-03">
            <Flexpart4></Flexpart4>
            <>
                <button className="buttons" disabled>Playlists</button>
                <button className="buttons" disabled>Songs</button>
            </>

        </div>
    );
}

export default Header3;