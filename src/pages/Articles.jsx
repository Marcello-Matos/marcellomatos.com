import React from 'react';
import CardList from '../components/CardList';
import DevTo from '../services/DevTo';
import { inject } from '@vercel/analytics';
import styled from 'styled-components';

function Articles(){
    inject();
    const articlesDevTo = DevTo();

    return <Main>
                <Ul>
                    {articlesDevTo.map(article => (
                        <CardList article = {article}/>
                    ))}
                </Ul>  
                <div>
                    <h1>Endereço Residencial:</h1>
                    <p> Endereço: Rua Ana Alves de Carvalho e Castro, 51, São Paulo - SP, CEP: 04644-040</p>
                    <p>E-mail: marcellomatosxads@gmail.com</p>
                    <p>Telefone: (11) 91422-2530</p>    
                    <p>WhatsApp: (11) 9 3802-8926</p>    
                    <p> ________________________________________</p>
                    <h1>Objetivo Profissional:</h1>
                    <p>Como profissional de Desenvolvimento Full Stack, busco ativamente oportunidades que me permitam aplicar minha experiência e habilidades de forma eficaz.<br/> Meu objetivo é colaborar com uma equipe dinâmica, onde possa contribuir para o crescimento e sucesso do projeto.<br/> Estou comprometido em utilizar minha expertise para impulsionar a inovação, alcançar metas ambiciosas e enfrentar desafios com determinação.<br/> Estou ansioso para fazer parte de um ambiente que valorize a excelência técnica e promova um espírito de colaboração e aprendizado contínuo.</p>
                    <p> ________________________________________</p>
                    <h1>Pretensão Salarial:</h1>
                    <p>A partir de R$ 1.000,00</p>
                    <p> ________________________________________</p>
                    <h1>Experiência Profissional:</h1>
                    <h3>Gerente de Vendas - Empresa: Equiágua</h3>
                    <p>Período: 03/2007 - 10/2014</p>
                    <p>Durante sete anos, liderei equipes de vendas, desenvolvendo estratégias eficazes que resultaram em aumentos consistentes nas receitas.<br/> Minha capacidade de compreender as nuances dos produtos químicos e traduzir informações técnicas para clientes e equipes de vendas foi fundamental<br/> para o sucesso das marcas que representei.</p>
                    <h3>Soldado - Exército Brasileiro</h3>
                    <p>Período: 04/1998 - 04/2004</p>
                    <p>Como militar, adquiri habilidades em liderança, disciplina, trabalho em equipe e tomada de decisões sob pressão.<br/> Participei de treinamentos intensivos em táticas militares e operações de campo, desenvolvendo uma mentalidade focada em cooperação e excelência.<br/>
                    <h3>Maroi Negócios Imobiliários e Serviços de Consultoria LTDA - Motorista Particular</h3>
                    <p>Período: 03/2017 - 12/2023</p>
                    <p>Responsável por levar e buscar os filhos da chefe no colégio, além de realizar trabalhos aleatórios conforme necessário.</p></p>
                    <p>________________________________________</p>
                    <h3>Formação Acadêmica:</h3>
                    <p>Graduação em Análise e Desenvolvimento de Software - Instituição: Uninter</p>
                    <p>Período: 03/2021 - Cursando - Conlusão do curso em 12/2024.</p>
                    Formação: 12/2024
                    <p>________________________________________</p>
                    <h3>Cursos e Especializações:</h3>
                    <p>•	Front-End - Escola: Impacta (2023)</p>
                    <p>•	Linguagem C - Estudonauta (2023)</p>
                    <p>•	Python - Curso em Vídeo (2023)</p>
                    <p>•	Java - Estudonauta (2023)</p>
                    <p>•	HTML 5, CSS, JavaScript - Curso em Vídeo (2023)</p>
                    <p>•	MySQL - Curso em Vídeo (2023)</p>
                    <p>•	Digitação Avançada - Cia Byte (2002)</p>
                    <p>•	Pacote Office - Cia Byte (2000)</p>
                    <p>•	Procreate - Inspiralisa (2024)</p>
                    <p>•	Sistema Operacional Linux - Cisco (2023)</p>
                    <p>•	Spring boot</p>
                    <p>•	Docker</p>
                    <p>•	Ci/ cd</p>
                    <p>•	Mockito Junit</p>
                    <p>•	Metodologia Ágil</p>
                    <p>•	SOAP</p>
                    <p>•	REST</p>
                    <p>•	AngularJS</p>
                    <p>•	Oracle PL/SQL</p>
                    <p>•	BOOT</p>
                    <p>•	PDFBox</p>
                    <p>•	FLEX</p>
                    <p>•	Git Hub</p>
                    <p>________________________________________</p>
                    <h3>Idioma:</h3>
                    <p>Inglês - Intermediário (Cultura Inglesa.)</p>
                    <p>________________________________________</p>
                    <h3>Resumo das Qualificações:</h3>
                    <p>Profissional Full Stack com experiência em liderança e vendas na indústria de produtos químicos. Graduando<br/> em Análise e Desenvolvimento de Software, com habilidades em linguagens de programação como:<br/> Python, Java e C, além de conhecimento em desenvolvimento web (HTML, CSS, JavaScript) e banco de dados MySQL.<br/> Proativo, dedicado e com habilidades adquiridas durante minha carreira militar, incluindo disciplina, trabalho em equipe e resolução de problemas sob pressão.<br/> Busco oportunidades para aplicar minhas habilidades e contribuir para o sucesso de uma equipe dinâmica e inovadora.</p>
                    <p>________________________________________</p>
                    <h3>Habilidades:</h3>
                    <p>•	Java</p>
                    <p>•	Github</p>
                    <p>•	Spring boot</p>
                    <p>•	Docker</p>
                    <p>•	Ci/Cd</p>
                    <p>•	Mockito Junit</p>
                    <p>•	Metodologia Ágil</p>
                    <p>Durante minha jornada profissional, tive a oportunidade de trabalhar em diferentes ambientes e adquirir experiência significativa em desenvolvimento de software.<br/> Minha paixão pela programação e minha habilidade em trabalhar em equipe me destacaram em cada uma dessas experiências.<br/>
                    Em uma das empresas em que atuei, concentrei meus esforços, onde mergulhei na intricada e crucial área de negócios.<br/> Especificamente, meu foco estava na área de Suprimentos, onde desenvolvi soluções inovadoras para otimizar processos e melhorar a eficiência operacional.<br/> Trabalhar em um ambiente tão desafiador me permitiu aprimorar minha compreensão da dinâmica e das necessidades únicas do setor.<br/>
                    Posteriormente, fiz parte da equipe de tecnologia, onde participei de projetos voltados para o setor financeiro.<br/> Aqui, minha capacidade de pensar de forma criativa e inovadora foi colocada em prática, enquanto colaborava com colegas talentosos para desenvolver soluções tecnológicas de ponta para os clientes.<br/> Essa experiência ampliou meu horizonte e me deu uma visão abrangente do mundo financeiro.<br/>
                    Como programador, estou sempre em busca de maneiras de melhorar e inovar.<br/> Minha capacidade de trabalhar em equipe e minha determinação em alcançar resultados excepcionais me tornam um ativo valioso em qualquer projeto.<br/> Estou comprometido em continuar aprendendo e crescendo profissionalmente, enquanto contribuo para o sucesso da equipe e da empresa como um todo.</p>
                   

</div>       
            </Main>
           
};

const Main = styled.main`
    margin-top: 3em;
`;

const Ul = styled.ul`
    height: 100%;
    flex-wrap: wrap;
    place-content: center;
    width: 80vw;
    gap: 16px;
    -webkit-box-pack: center;
    margin: 0px;
    padding: 0px;
    list-style: none;
    display: inline-flex;
    position: relative;
    top: 5px;
    justify-content: space-around;
    border-radius: 30px;
`;

export default Articles;