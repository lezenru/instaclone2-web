import {isLoggedInVar} from "../apollo";

function Home() {
    return (
        <div>

            <h1>Home</h1>
            <button onClick={() => isLoggedInVar(false)}>Logout in now!</button>

        </div>
    );
}

export default Home;