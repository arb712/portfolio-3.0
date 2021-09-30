import React from "react";
import { DiFirebase, DiReact } from "react-icons/di";
import { FiMonitor, FiTrello } from "react-icons/fi";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="technologies">
    <SectionDivider style={{ marginBottom: "58px" }} />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I've worked with these technologies.</SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and databases.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FiMonitor size="2rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like figma.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FiTrello size="2rem" />
        <ListContainer>
          <ListTitle>Project Management</ListTitle>
          <ListParagraph>
            Experience with <br />
            project management tools like trello.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
