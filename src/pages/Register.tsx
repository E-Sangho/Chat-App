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
	padding: 32px 0;
	border-radius: 12px;
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

const Label = styled.label`
	display: flex;
	align-items: center;
	margin-top: 24px;
	color: rgb(105, 125, 240);
	font-size: 14px;
	cursor: pointer;
	gap: 8px;

	svg {
		width: 32px;
		height: 32px;
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

function Register() {
	return (
		<FormContainer>
			<FormWrapper>
				<Logo>Chatter</Logo>
				<Title>Register</Title>
				<Form>
					<Input type="text" placeholder="display name" />
					<Input type="email" placeholder="email" />
					<Input type="password" placeholder="password" />
					<input type="file" id="file" style={{ display: "none" }} />
					<Label htmlFor="file">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							fill="currentColor"
						>
							<path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48z" />
						</svg>
						Add an avatar
					</Label>
					<Button>Sign Up</Button>
				</Form>
				<P>Do you have an account? Login</P>
			</FormWrapper>
		</FormContainer>
	);
}

export default Register;
