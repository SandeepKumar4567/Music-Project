import Flexpart3 from "./Flexpart3";

function Header2() {
    return (
        <div className="header-02">
            <Flexpart3></Flexpart3>
            <>
                <input
                    className="buttons"
                    type="text"
                    placeholder="What do you want to listen to?"
                />
                <div className="icon2">
                    <i className="fa-solid fa-magnifying-glass" disabled/>
                </div>
            </>

        </div>
    );
}

export default Header2;