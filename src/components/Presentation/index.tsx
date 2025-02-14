import React, { useContext} from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { FaMoon } from "react-icons/fa";


import Typewriter from 'typewriter-effect';

import { ContainerPresentation, ContainerMe, TextName, SubText, Navigations, TextNavs } from './styles';



interface Props {
    toggleTheme(): void;
}

const Presentation: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);

    return (
        <ContainerPresentation>
            <ContainerMe>
                <TextName>
                    Enzo Mariotto
                </TextName>
                <SubText>
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 30,
                            strings: [
                                "< FullStack Developer />",
                                "< Desenvolvedor FullStack />"
                            ]
                        }}
                    />
                </SubText>

            </ContainerMe>

            <Navigations>
                <TextNavs href="#sobre">Sobre</TextNavs>
                <TextNavs href="https://github.com/m4riott0">Projetos</TextNavs>
                <TextNavs href="#contato">Contato</TextNavs>
                <li className='switchCenter'>
                    <Switch
                        onChange={toggleTheme}
                        checked={title === 'light'}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        handleDiameter={20}
                        offHandleColor=""
                        uncheckedHandleIcon={<FaMoon color='#2E2F31' size={20} />}
                        onHandleColor="#DCE0E2"
                        offColor="#DCE0E2"
                        onColor="#2E2F31"
                        activeBoxShadow="0 0 2px 3px #33bbff0"
                    />
                </li>
            </Navigations>
 
        </ContainerPresentation >
    );
}

export default Presentation;