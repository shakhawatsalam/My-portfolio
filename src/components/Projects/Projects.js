import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id='project'>
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {
        projects.map(({id, image, title, description, tags, source, visit}) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr/>
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {
                  tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))
                }
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks key={visit}>Code</ExternalLinks>
              <ExternalLinks key={source}>Source</ExternalLinks>
            </UtilityList>
         </BlogCard>
        ))
      }
    </GridContainer>
  </Section>
);

export default Projects;