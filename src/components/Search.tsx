import styled from "styled-components";

const FindaUser = styled.div`
	color: rgb(150, 150, 150);
	padding: 12px 8px;
	border-bottom: 1px solid rgb(100, 100, 100);
	font-size: 14px;
`;

function Search() {
	return <FindaUser>Find a user</FindaUser>;
}

export default Search;
