import React from "react";
import { Header, Section, Footer } from "./components/UI";
import BasicInfo from "./sections/BasicInfo";
import Work from "./sections/Work";
import Skills from "./sections/Skills";
import Resources from "./sections/Resources";
import data from "./data";

export default function App(){
  return (
    <>
      <Header name="Cini Laki" />
      <Section id="basic" title="Basic Information">
        <BasicInfo info={data.basic} />
      </Section>
      <Section id="work" title="Work">
        <Work projects={data.work} />
      </Section>
      <Section id="skills" title="Skills">
        <Skills skills={data.skills} />
      </Section>
      <Section id="resources" title="Resources">
        <Resources resources={data.resources} />
      </Section>
      <Footer />
    </>
  );
}
