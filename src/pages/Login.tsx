import styled from "styled-components";

const FormContainer = styled.div`
	background-color: #a7bcff;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const FormWrapper = styled.div`
	width: 30%;
	border-radius: 12px;
	padding: 32px 0;
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Logo = styled.span`
	color: rgb(60, 0, 150);
	font-size: 40px;
	font-weight: 600;
`;

const Title = styled.span`
	font-size: 14px;
	font-weight: 400;
	color: rgb(120, 120, 180);

	margin-top: 8px;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
	box-sizing: border-box;

	padding: 16px 64px;
`;

const Input = styled.input`
	height: 32px;
	border: none;
	border-bottom: 2px solid rgb(215, 215, 215);
	margin-top: 16px;
	padding: 4px 0px 4px 0px;
	outline: none;

	font-size: 15px;
	::placeholder {
		color: rgb(192, 192, 192);
	}
`;

const Button = styled.button`
	background-color: rgb(105, 125, 240);
	color: white;
	border: none;

	cursor: pointer;
	height: 40px;
	margin-top: 16px;
`;

const P = styled.p`
	font-size: 14px;
	margin-top: 8px;
`;

function Login() {
	return (
		<FormContainer>
			<FormWrapper>
				<Logo>Chatter</Logo>
				<Title>Register</Title>
				<Form>
					<Input type="email" placeholder="email" />
					<Input type="password" placeholder="password" />
					<Button>Sign in</Button>
				</Form>
				<P>Don't you have an account? Register</P>
			</FormWrapper>
		</FormContainer>
	);
}

export default Login;
