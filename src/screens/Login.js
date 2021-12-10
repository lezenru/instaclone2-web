import {darkModeVar, isLoggedInVar} from "../apollo";
import styled, {css} from "styled-components";
import {useState} from "react";

/*

스타일 컴포넌트 props 사용법
두가지 방법 다 사용해도 됨
color: ${(props) =>
            (props.potato ? "white" : "red")};

    ${props => props.potato
            ? css`
              font-size: 49px;
            `
            : css`
             text-decoration: underline;
            `}
* */


const TogglePotato = styled.button`
  color: brown;
  font-size: 10px;
`;


/*
const Title = styled.h1`
  color: ${props => props.theme.fontcolor};
`

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
`;
*/


function Login() {
    const [potato, setPotato] = useState(false)
    const togglePotato = () => setPotato(current => !current)
    return (
        <div>

            <h1 potato={potato}>Login</h1>
            <button onClick={() => isLoggedInVar(true)}>Log in now!</button>
            <br/>
            <button onClick={() => darkModeVar(true)}>to dark</button>
            <button onClick={() => darkModeVar(false)}>to light</button>

        </div>
        );


}


export default Login;