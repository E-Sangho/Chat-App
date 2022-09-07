import styled from "styled-components";

const Container = styled.div`
	display: flex;
`;

const Texter = styled.input`
	width: 100%;
	height: 48px;
	box-sizing: border-box;
	border: none;
	outline: none;
	padding-left: 8px;
	&::placeholder {
		color: rgb(200, 200, 200);
		font-size: 16px;
	}
`;

const Interaction = styled.div`
	display: flex;
	gap: 8px;
	align-items: center;
	background-color: white;
	padding-right: 8px;
`;

const Svg = styled.svg`
	width: 32px;
	height: 32px;
	color: rgb(200, 200, 200);
`;

const Button = styled.button`
	background-color: rgb(100, 100, 210);
	border: none;
	outline: none;
	color: white;
	padding: 12px 24px;
`;
function Input() {
	return (
		<Container>
			<Texter placeholder="Type here" />
			<Interaction>
				<Svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					fill="currentColor"
				>
					<path d="M396.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z" />
				</Svg>
				<Svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					fill="currentColor"
				>
					<path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48z" />
				</Svg>
				<Button>Send</Button>
			</Interaction>
		</Container>
	);
}

export default Input;
