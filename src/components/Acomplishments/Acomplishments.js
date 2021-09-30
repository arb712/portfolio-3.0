import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

import { BlogCard } from "../Projects/ProjectsStyles";

import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "../Technologies/TechnologiesStyles";

const data = [
  { name: "Agile Scrum Foundation", issue: "December 2019" },
  { name: "MTA: Database Fundamentals", issue: "March 2021" },
  { name: "Project Management Associate", issue: "August 2021" },
  { name: "TOEIC", issue: "September 2020" },
];

const Acomplishments = () => (
  <Section id="certificates">
    <SectionDivider style={{ marginBottom: "58px" }} />
    <SectionTitle>Certificates</SectionTitle>
    <List>
      {data.map((card, index) => (
        <ListItem key={index}>
          <ListContainer>
            <ListTitle>{card.name}</ListTitle>
            <ListParagraph>{card.issue}</ListParagraph>
          </ListContainer>
        </ListItem>
      ))}
    </List>
  </Section>
);

export default Acomplishments;
