import {ApolloClient, HttpLink, InMemoryCache, makeVar} from "@apollo/client";


const TOKEN = "TOKEN";
const DARK_MODE = "DARK_MODE"

//토큰에 내용이 있으면 true, 없으면 false
export const isLoggedInVar = makeVar(Boolean(localStorage.getItem(TOKEN)));
export const darkModeVar = makeVar(Boolean(localStorage.getItem(DARK_MODE) === "enabled"));

export const enableDarkMode = () => {
    localStorage.setItem(DARK_MODE, "enabled");
    darkModeVar(true)
};

export const disableDarkMode = () => {
    localStorage.removeItem(DARK_MODE);
    darkModeVar(false)

}



export const logUserIn = (token) => {
    localStorage.setItem(TOKEN, token);
    isLoggedInVar(true);
}

export const logUserOut = () => {
    localStorage.removeItem(TOKEN);
    isLoggedInVar(false);
    window.location.reload();
}

const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' });

export const client = new ApolloClient({
    link: httpLink,
    //url: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),

})