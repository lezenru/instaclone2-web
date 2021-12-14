import styled, {css} from "styled-components";
import {
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthLayout from "../components/auth/Container";
import {BaseBox, FatLink} from "../components/shared";
import Button from "../components/auth/Button";
import Separator from "../components/auth/Separator";
import Input from "../components/auth/Input";
import FormBox from "../components/auth/FormBox";
import BottomBox from "../components/auth/BottomBox";
import routes from "../routes";
import PageTitle from "../components/auth/PageTitle";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Subtitle = styled(FatLink)`
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
`;





function SignUp() {
    return (
        <AuthLayout>
            <PageTitle title="SignUp"/>
            <FormBox>

                <HeaderContainer>
                    <FontAwesomeIcon icon={faInstagram} size="3x" />
                    <Subtitle>
                        Sign up to see photos and videos from your friends.
                    </Subtitle>
                </HeaderContainer>

                <form>
                    <Input type="text" placeholder="Name" />
                    <Input type="text" placeholder="Email" />
                    <Input type="text" placeholder="Username" />
                    <Input type="password" placeholder="Password" />
                    <Button type="submit" value="Sign up" />
                </form>

            </FormBox>
            <BottomBox cta="Have an account?" linkText="Log in" link={routes.home} />


        </AuthLayout>
    );
}

export default SignUp;