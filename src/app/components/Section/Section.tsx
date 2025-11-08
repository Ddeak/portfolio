type SectionProps = {
  children: React.ReactNode;
  id: string;
};

const Section = ({ children, id }: SectionProps) => (
  <section
    id={id}
    className="items-start flex justify-center flex-col h-[80%] px-[clamp(1rem,2.5vw+0.5rem,4rem)]"
  >
    {children}
  </section>
);

export default Section;
