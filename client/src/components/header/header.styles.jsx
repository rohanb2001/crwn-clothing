import styled from "styled-components";
import { Link } from "react-router-dom";

// const OptionContainerStyles = css`
//     padding: 10px 15px;
//     cursor: pointer;
// `;

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    @media only screen and (max-width: 600px) {
        height: 60px;
        padding: 5px;
        margin-bottom: 20px;
    }
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;

    @media only screen and (max-width: 600px) {
        width: 50px;
        padding: 0;
        margin: 5px 0 0 20px;
    }
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media only screen and (max-width: 600px) {
        width: 90%;
    }
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;

// export const OptionDiv = styled.div`
//     ${OptionContainerStyles}
// `;