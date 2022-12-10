import styled, {css} from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    border: .1px solid #000;
    background-color: #787878;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 700;

    flex: 25%;
    
    &:hover {
        opacity: 0.6;
    }

    ${({variant}) => variant === "operation" && css`
    background-color: #FF9E0B;
    `}

    ${({variant}) => variant === "special" && css`
    background-color: #5E5E5E;
    `}

    ${({variant}) => variant === "zero" && css`
    flex: 50%;
    `}
`