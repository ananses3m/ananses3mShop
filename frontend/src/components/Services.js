import React from 'react';
import { Container } from 'react-bootstrap';
import styled from "styled-components";
import breakpoint from '../breakpoints';
import LineMenu from './LineMenu';

const ExperiencesMainWrapper = styled.div`
    background: #343A40;
    padding: 3vw 0px 3vw 0px;
`;

const ExperiencesContentWrapper = styled.div`
    // display: flex;
`;

const Services = () => {
    return (
        <ExperiencesMainWrapper id="experiences">
                <Container>
                    <ExperiencesContentWrapper>
                        <LineMenu />
                    </ExperiencesContentWrapper>
                </Container>
        </ExperiencesMainWrapper>
    )
}

export default Services
