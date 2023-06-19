import styled from 'styled-components';
import ApplicationText from './ApplicationText';
import ApplicationContent from '../../static/json/application';

interface Application {
  title: string;
  body: string;
  id: string;
  linkText: string;
}

interface ContentSchema {
  openRoles: Application[];
}

const ApplicationType = () => {
  const content: ContentSchema = ApplicationContent['Student'];

  return (
    <Container>
      <Title>Our Openings</Title>
      <Subtitle>
        Here are our openings for students. Select whatever you want to apply
        to!
      </Subtitle>

      <ApplicationLists>
        {content?.openRoles?.map((role, index) => {
          return (
            <ApplicationText
              key={index}
              title={role.title}
              body={role.body}
              id={role.id}
              linkText={role.linkText}
              last={index + 1 !== content.openRoles.length}
            />
          );
        })}
      </ApplicationLists>
    </Container>
  );
};

const Container = styled.div`
  margin: auto;
  width: 80vw;
  padding: 50px 0;

  @media ${(props) => props.theme.viewport.monitor} {
    width: 1280px;
  }
  @media ${(props) => props.theme.viewport.xlmonitor} {
    width: 1720px;
  }
`;

const Title = styled.h1`
  grid-area: Title;
  margin: 0;
  color: ${(props) => props.theme.colors.primaryBlue};
  font-family: ${(props) => props.theme.fonts.heading};
  font-style: bold;
  font-size: 50px;
`;

const Subtitle = styled.p`
  grid-area: Subtitle;
  margin: 0;
`;
const ApplicationLists = styled.div`
  width: 100%;
  padding-top: 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 50px 40px;
  justify-content: space-between;
`;

export default ApplicationType;
