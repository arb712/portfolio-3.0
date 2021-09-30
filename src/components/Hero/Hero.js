import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopading>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>Enthusiastic ReactJS Developer.</SectionText>
      <Button onClick={() => (window.location = "https://github.com/arb712")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
