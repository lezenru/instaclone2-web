import styled, {css} from "styled-components";
import {
    faFacebookSquare,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import AuthLayout from "../components/auth/Container";
import {BaseBox} from "../components/shared";
import Button from "../components/auth/Button";
import Separator from "../components/auth/Separator";
import Input from "../components/auth/Input";
import FormBox from "../components/auth/FormBox";
import BottomBox from "../components/auth/BottomBox";
import routes from "../routes";
import {Helmet} from "react-helmet-async";
import PageTitle from "../components/auth/PageTitle";
import {useForm} from "react-hook-form";
import FormError from "../components/auth/FormError";

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

/*
const Title = styled.h1`
  color: ${props => props.theme.fontcolor};
`

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
`;
*/


const Title = styled.h1`
  color: ${(props) => props.theme.fontColor};
`;


const FacebookLogin = styled.div`
  color: #385285;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

function Login() {
    const {register,  handleSubmit, formState} = useForm({
        mode: "onBlur"
    });
    const onSubmitValid = (data) => {
        console.log(data, "Valid")
    };
    const onSubmitInvalid = (data) => {
        console.log(data, "Invalid")
    };


    return (
        <AuthLayout>
            <PageTitle title="Login"/>
                <FormBox>
                    <div>
                        <FontAwesomeIcon icon={faInstagram} size="3x" />
                    </div>
                    <form onSubmit={handleSubmit(onSubmitValid, onSubmitInvalid)}>
                        <Input
                            {...register("username",
                                {
                                    required: "Username is Required",
                                    minLength: {
                                        value: 5,
                                        message: "up 5",
                                    },
                                    //validate: (currentValue) => currentValue.includes("Potato"),
                                })}
                            name={"username"}
                            type="text"
                            placeholder="Username"
                            hasError={Boolean(formState.errors?.username?.message)}/>
                        <FormError message={formState.errors?.username?.message} />
                        <Input
                            {...register("password",
                                {
                                    required:"Password is Required"
                                })}
                            name="password"
                            type="password"
                            placeholder="Password"
                            hasError={Boolean(formState.errors?.password?.message)}/>
                        <FormError message={formState.errors?.password?.message} />
                        <Button type="submit" value="Log in" disabled={!formState.isValid} />
                    </form>
                    <Separator/>
                    <FacebookLogin>
                        <FontAwesomeIcon icon={faFacebookSquare} />
                        <span>Log in with Facebook</span>
                    </FacebookLogin>
                </FormBox>
                <BottomBox cta="Don't have an account?" link={routes.signUp} linkText="Sign up"/>


        </AuthLayout>
    );
}

export default Login;