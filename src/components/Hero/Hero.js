import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          My portfolio's goal is to assist aspiring and experienced developers
          in taking their programming talents to the next level and creating
          fantastic apps.
        </SectionText>
        <Button onClick={() => (window.location = "#projects")}>
          Learn More
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
