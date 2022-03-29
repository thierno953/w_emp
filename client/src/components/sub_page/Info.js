import React from 'react'
import styled from 'styled-components'
import ServiceItem from './ServiceItem';
import Title from './Title';
import search from '../../img/search2.svg';
import account from '../../img/create_account.svg';
import add from '../../img/add.svg';
import { InnerLayout } from '../../Layouts';

function Info() {
    return (
        <SectionServiceStyled >
            <InnerLayout>
                <div className="title-con">
                    <Title name="Devenir Jobber" para={'Comment ça marche ?'} />
                </div>
                <div className="services-con">
                    <ServiceItem icon={account} name={'Demander un service'} para={"décrivez votre besoin dans un formulaire"} />
                    <ServiceItem icon={search} name={'Sélectionner votre jobbeur'} para={'les jobbeurs compétents vous proposent leurs services'} />
                    <ServiceItem icon={add} name={'Le job se réalise'} para={'Le jobbeur vous rend service comme convenus'} />
                </div>
            </InnerLayout>
        </SectionServiceStyled >
    )
}

const SectionServiceStyled = styled.section`
    .services-con{
        padding-top: 1rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        @media screen and (max-width: 972px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width: 673px) {
            grid-template-columns: 1fr;
        }
    }
`;
export default Info;
