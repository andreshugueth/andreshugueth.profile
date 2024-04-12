type SectionProps = {
  title: string;
  content: string[] | JSX.Element[];
};

export default function Section({ title, content }: SectionProps) {
  return (
    <section className="p-4 m-4">
      <div className="text-2xl mb-2 text-white text-center">{title}</div>
      <div className="flex space-x-4 justify-center items-center">
        {content.map((element, index) => (
          <div key={index} className="my-1 text-white">
            {element}
          </div>
        ))}
      </div>
    </section>
  );
}
