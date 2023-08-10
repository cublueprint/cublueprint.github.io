import styled from 'styled-components';
import TitleBlock from '../../components/TitleBlock';
import AboutBlock from '../../components/AboutBlock';
import HomeProjectsBlock from './HomeProjectsBlock';

import content from '../../static/json/home';

const Home = () => (
  <PageBody>
    <TitleBlock content={content.titleBlock}></TitleBlock>
    <AboutBlock content={content.aboutBlock}></AboutBlock>
    <HomeProjectsBlock content={content.projectsBlock}></HomeProjectsBlock>
    <AboutBlock content={content.getInvolvedBlock}></AboutBlock>
  </PageBody>
);

const PageBody = styled.div`
  background-color: #F8FBFF;};
`;

export default Home;
