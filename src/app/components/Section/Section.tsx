type SectionProps = {
  children: React.ReactNode;
  id: string;
};

const Section = ({ children, id }: SectionProps) => (
  <section
    id={id}
    className="items-center flex w-full justify-center flex-col h-screen p-[clamp(1rem,2.5vw+0.5rem,4rem)]"
  >
    {children}
  </section>
);

export default Section;
