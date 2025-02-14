import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { ContainerAbout, SubtitleContainer, SubTitle, ContainerTech, BoxTech, TextTech } from './styles';
import TechlogiesData from '../../techlogies';

import { ImRadioChecked } from "react-icons/im";

interface Props {
    toggleTheme(): void;
}

const Technologies: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);

    return (
        <ContainerAbout>
            <SubtitleContainer>
                <SubTitle>
                    Linguagens e tecnologias
                </SubTitle>
            </SubtitleContainer>
            <ContainerTech>
                {TechlogiesData.map((item)=>{
                    const { id, name } = item;
                    return(
                        <BoxTech key={id}>
                            <ImRadioChecked color="#fff" size={30}/>
                            <TextTech>{name}</TextTech>
                        </BoxTech>
                    );
                })}        
            </ContainerTech>
        </ContainerAbout>
    );
}

export default Technologies;