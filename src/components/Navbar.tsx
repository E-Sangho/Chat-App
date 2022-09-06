import styled from "styled-components";

const Top = styled.div`
	background-color: rgb(20, 20, 90);
	padding: 16px 8px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Logo = styled.span`
	font-size: 20px;
	font-weight: 600;
	color: rgb(205, 205, 205);
`;

const TopUserInfo = styled.div`
	display: flex;
	gap: 8px;
	align-items: center;
`;

const TopImage = styled.img`
	width: 24px;
	height: 24px;
	border-radius: 50%;
`;

const TopUserName = styled.div`
	font-size: 18px;
	color: rgb(205, 205, 205);
`;

const TopButton = styled.div`
	padding: 4px 8px;
	background-color: rgb(90, 70, 200);
	border: none;
	outline: none;
	cursor: pointer;
	color: rgb(200, 200, 200);
	font-size: 14px;
`;

function Navbar() {
	return (
		<Top>
			<Logo>Chatter</Logo>
			<TopUserInfo>
				<TopImage
					width="32px"
					height="32px"
					src="https://w7.pngwing.com/pngs/887/945/png-transparent-line-application-bear-illustration-kakaotalk-kakao-friends-emoticon-kakao-ryan-smiley-sticker-desktop-wallpaper.png"
					alt="user"
				/>
				<TopUserName>user name</TopUserName>
				<TopButton>logout</TopButton>
			</TopUserInfo>
		</Top>
	);
}

export default Navbar;
