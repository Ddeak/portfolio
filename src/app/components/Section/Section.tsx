type SectionProps = {
  children: React.ReactNode;
  id: string;
};

const Section = ({ children, id }: SectionProps) => (
  <section
    id={id}
    className="items-center flex w-full justify-center flex-col md:h-screen p-[clamp(1rem,2.5vw+0.5rem,4rem)] h-fit min-h-screen"
  >
    {children}
  </section>
);

export default Section;
