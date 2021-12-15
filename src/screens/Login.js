import styled, {css} from "styled-components";
import {
    faFacebookSquare,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthLayout from "../components/auth/Container";
import Button from "../components/auth/Button";
import Separator from "../components/auth/Separator";
import Input from "../components/auth/Input";
import FormBox from "../components/auth/FormBox";
import BottomBox from "../components/auth/BottomBox";
import routes from "../routes";
import PageTitle from "../components/auth/PageTitle";
import {useForm} from "react-hook-form";
import FormError from "../components/auth/FormError";
import {gql, useMutation} from "@apollo/client";
import {logUserIn} from "../apollo";
import {useLocation} from "react-router-dom";

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

const Notification = styled.div`
  color: #2ecc71;
`;



const LOGIN_MUTATION = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            ok
            token
            error
        }
    }
`;



function Login() {

    const location = useLocation();
    console.log(location);

    const {register,  handleSubmit, formState, getValues, setError, clearErrors} = useForm({
        mode: "onChange",
        defaultValues: {
            username : location?.state?.username || "",
            password : location?.state?.password || "",
        }
    });

    const onCompleted = (data) => {
        const {
            login: { ok, error, token },
        } = data;
        if (!ok) {
            setError("result", {
                message: error,
            });
        }
        if(token) {
            logUserIn(token);
        }
    };

    const [login, { loading }] = useMutation(LOGIN_MUTATION, {
        onCompleted,
    });

    const onSubmitValid = (data) => {
        if (loading) {
            return;
        }
        const { username, password } = getValues();
        login({
            variables: { username, password },
        });
    };

    const clearLoginError = () => {
        clearErrors("result")
        }


    return (
        <AuthLayout>
            <PageTitle title="Login"/>
                <FormBox>
                    <div>
                        <FontAwesomeIcon icon={faInstagram} size="3x" />
                    </div>
                    <Notification>{location?.state?.message}</Notification>
                    <form onSubmit={handleSubmit(onSubmitValid)}>
                        <Input
                            {...register("username",
                                {
                                    required: "Username is Required",
                                    minLength: {
                                        value: 4,
                                        message: "up 4",
                                    },
                                    //validate: (currentValue) => currentValue.includes("Potato"),
                                })}
                            onFocus={clearLoginError}
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
                            onFocus={clearLoginError}
                            placeholder="Password"
                            hasError={Boolean(formState.errors?.password?.message)}/>
                        <FormError message={formState.errors?.password?.message} />
                        <Button type="submit"
                                value={loading ? "Loading..." : "Log in"}
                                disabled={!formState.isValid || loading} />
                        <FormError message={formState.errors?.result?.message} />
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