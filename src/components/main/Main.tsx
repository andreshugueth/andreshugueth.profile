import { sectionElements } from "../../sectionElements";
import Section from "./Section";

export default function Main() {
  return (
    <main>
      {sectionElements.map((section) => {
        return (
          <Section
            key={section.id}
            title={section.title}
            content={section.content}
          />
        );
      })}
    </main>
  );
}
