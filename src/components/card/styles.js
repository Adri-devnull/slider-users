import styled from 'styled-components';

const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
`;

const StyledImg = styled.img`
	width: 130px;
	height: 130px;
`;

const StyledName = styled.h2`
	font-size: 2em;
	font-weight: bold;
`;

const StyledUsername = styled.h3`
	font-size: 1.1em;
	font-weight: 100;
	margin: 0;
`;

const StyledEmail = styled.h3`
	font-size: 1.1em;
	font-weight: 100;
	margin: 0;
	margin-top: 10px;
	margin-bottom: 10px;
`;

const StyledBtnContainer = styled.div`
	display: flex;
`;

const StyledButton = styled.button`
	border-radius: 5px;
	border: none;
	border: 1px solid grey;
`;

export {
	StyledCard,
	StyledImg,
	StyledName,
	StyledUsername,
	StyledEmail,
	StyledBtnContainer,
	StyledButton
};
