import React from 'react'
import styled from 'styled-components'
import search from '../../img/search2.svg';
import account from '../../img/create_account.svg';
import add from '../../img/add.svg';
import { InnerLayout } from '../../Layouts';
import Title from './Title';
import ServiceItem from './ServiceItem';

function SectionService() {
    return (
        <SectionServiceStyled >
            <InnerLayout>
                <div className="title-con">
                    <Title name="Devenir Jobber" para={'Devenez jobber comme vous le souhaitez'} />
                </div>
                <div className="services-con">
                    <ServiceItem icon={account} name={'Inscrivez-vous'} para={"Complétez votre profil en sélectionnant vos compétences Choisissez l'option <alertes jobs> pour recevoir des jobs."} />
                    <ServiceItem icon={search} name={'Proposez vos services'} para={'Faites des propositions pour les offres de jobs qui vous intéressent. Proposez vos services en fonction de vos disponibilités. '} />
                    <ServiceItem icon={add} name={'Choisissez votre rémunération'} para={'Définissez votre rémunération horaire lorsque vous répondez à une offre de job. Vous touchez vos revenus immédiatement après réalisation du job.'} />
                </div>
            </InnerLayout>
        </SectionServiceStyled >
    )
}

const SectionServiceStyled = styled.section`
    .services-con{
        padding-top: 3rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        @media screen and (max-width: 972px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width: 673px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }

`;
export default SectionService;
