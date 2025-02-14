import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { ContainerAbout, Image, SubContainerAbout, SubTitle, Description, ContainerButtons, ContactButton, TextButton } from './styles';

import avatar from '../../assets/avatar.png';



interface Props {
    toggleTheme(): void;
}

const About: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);

    return (
        <ContainerAbout id="sobre">
            <Image src={avatar} alt="Enzo Mariotto" />

            <SubContainerAbout>
                <SubTitle>
                    Sobre mim
                </SubTitle>

                <Description>
                    Comecei minha jornada na programação em 2019, quando tinha 16 anos, de lá pra cá descobri sou um apaixonado por tecnologia.
                </Description>
                <Description>
                    Atualmente estou utilizando e aprimorando meus conhecimentos em: Javascript, TypeScript, React, nextJS, React Native, NodeJS entre outras tecnologias que uso para criar aplicações web/mobile de alto nível e valor.
                </Description>
                <Description>
                    Meu foco é sempre estar aprendendo e aprimorar ainda mais minhas habilidades, gosto sempre de estar em constante aprendizado e evoluindo dia após dia, e agregando muito valor.</Description>
                <ContainerButtons>
                    <ContactButton href="#contato">
                        <TextButton>
                            Contato
                        </TextButton>
                    </ContactButton>
                </ContainerButtons>
            </SubContainerAbout>
        </ContainerAbout>
    );
}

export default About;