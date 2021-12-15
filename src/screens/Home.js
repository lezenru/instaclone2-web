import {isLoggedInVar, logUserOut} from "../apollo";

function Home() {
    return (
        <div>

            <h1>Welcom we did it!</h1>
            <button onClick={() => logUserOut()}>Logout in now!</button>

        </div>
    );
}

export default Home;