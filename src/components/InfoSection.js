import React, {Component} from "react"
import { Button } from './Button';
import styled from 'styled-components';
import { Switch } from "react-router";
import Route from "react-router-dom/Route";



const Section = styled.section `
    width: 100%;
    height: 100%;
    padding: 4rem 0rem;
`;

const Container = styled.div `
    padding: 3rem calc((100vw - 1300px) / 2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
`;

const ColumnLeft = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 1rem 2rem;
    order: ${({ reverse }) => ( reverse ? '2' : '1' )};

    h1{
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }
    p{
        marign-bottom: 2rem; 
    }
`;

const ColumnRight = styled.div `
    padding: 1rem 2rem;
    order: ${({ reverse }) => (reverse ?  '1' : '2' )};
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        order: ${({ reverse }) => (reverse ? '2' : '1' )}
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: ;

        @media screen and (max-width: 768p) {
            width:90%;
            height:90%;
        }
    }
`; 



const InfoSection = ( { heading, paragraphOne, paragraphTwo, buttonLabel, reverse, image, link}) => {
    return(
        <Section>
            <Container>
                <ColumnLeft>
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>    
                    <Button to={link}><p>{buttonLabel}</p></Button>                   
                </ColumnLeft>
                <ColumnRight reverse = { reverse }>
                    <img src={ image } alt="home"/>
                </ColumnRight>
                <Switch>
                    <Route path="/konstrukcje/konstrukcjedrewniane">
                        <Button><h1>Nowy tekst na pr??b??</h1></Button>
                    </Route>
                </Switch>
            </Container>
        </Section>
    );
};

export default InfoSection;