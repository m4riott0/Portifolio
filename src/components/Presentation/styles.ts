import styled from "styled-components";

export const ContainerPresentation = styled.div`
    display: flex;
    box-sizing: border-box;
    height: 100vh;
    justify-content: center;
    flex-direction: column;
    background: ${props => props.theme.colors.backgroundpresentation};
    gap: 20px;
    padding: 0 20%;

    @media screen and (max-width: 780px){  
        background: ${props => props.theme.colors.backgroundpresentation780};
    }

    @media screen and (max-width: 1560px){  
        padding: 0 10%;
    }
`;

export const ContainerMe = styled.div`
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    flex-direction: column;
`;

export const TextName = styled.span`
    color: ${props => props.theme.colors.text};
    font-weight: 700;
    font-size: 50px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    justify-content: center; 
    align-items: center; 
    text-align: center; 

    @media screen and (max-width: 536px){  
        font-size: 9.3vw;
    }
`;

export const SubText = styled.span`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    color: ${props => props.theme.colors.text};
    font-size: 25px;
    justify-content: center; 
    align-items: center; 
    text-align: center; 


    @media screen and (max-width: 536px){  
        font-size: 4.5vw;
    }
`;

export const Navigations = styled.div`
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center; 
    text-align: center; 
`;

export const TextNavs = styled.a`
    color: ${props => props.theme.colors.text};
    font-weight: 600;
    font-size: 15px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    justify-content: center; 
    align-items: center; 
    text-align: center; 

    &::after{
        content: "";
        background-color: #2E2F31;
        height: 3px;
        width: 0%;
        display: block;
        transition: .3s ease-in-out;
    }

    &:hover::after{
        content: "";
        background-color: #2E2F31;
        height: 3px;
        width: 70%;
        display: block;
    }
`;
