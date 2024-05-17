import React from 'react';
import styled from "styled-components";
import JavaImage from '../assets/images/JavaImage.png';
import ThisSiteImage from '../assets/images/photo Software Developer.jpg'
import { inject } from '@vercel/analytics';

const cardProjects = [
  {
    title: "Este é a página do website",
    value: "thisWebSite",
    description: "Clique aqui e você consegue ver o website dessa página.",
    url: "https://github.com/Marcello-Matos",
    image: ThisSiteImage
  },
  {
    title: "Rodando em Java",
    value: "Roadmap Java",
    description: "Um repositório GitHub com um guia inicial em Java para começar sua carreira no mundo Java.",
    url: "https://github.com/Marcello-Matos/trabalho_oficial_html_css_js",
    image: JavaImage
  }
];

function Projects(){
  inject();
  return <Main>
              <Ul>
                  {cardProjects.map(project => (
                    <A target="_blank" rel="noreferrer" href={project.url}>
                      <Li key={project.value}>
                          <ImageLi src={project.image} alt="" />
                          <LiStrong>{project.title}</LiStrong>
                          <PCard>{project.description}</PCard>
                      </Li>
                    </A>
                  ))}
              </Ul>         
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

const A = styled.a`
  text-decoration: none;
  background: var(--current-line);
  border-radius: 20px;
  @media screen and (min-width: 600px) {
      opacity: 0.7;
      &:hover{
          opacity: 1;
      }
  }
`;

const Li = styled.li`
  width: 350px;
  height: auto;
  border-radius: 10px;
  list-style: none;
  margin: 20px 16px;
  animation: 1s showItens;
  @media screen and (min-width: 600px) {
    width: 550px;
    &:hover{
        transition-duration: 0.3s;
        opacity: 1;
    }
  }
  @keyframes showItens {
    from {
        opacity: 0;
    }
  }
`;

const LiStrong = styled.strong`
  color: var(--color-primary);
  font-size: 1.25rem;
  font-weight: 500;
  padding: 0px 12px;
`;

const ImageLi = styled.img`
  width: 100%;
  border-radius: 10px;
  &:hover{
      transition: 0.2s;
      transform-origin: center center;
      transform: scale(1.03) rotate(0.5deg);
      
  }
`;

const PCard = styled.p`
  text-align: center;
  opacity: 0.8;
  color: var(--color-primary);
`;

export default Projects;