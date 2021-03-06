import styled from "styled-components";

export const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    @media only screen and (max-width: 600px) {
        align-items: center;
    }
`;

export const TitleContainer = styled.h1`
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;

    &:hover {
        color: grey;
    }
`;

export const PreviewContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 600px)  {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 15px;
    }
`;

