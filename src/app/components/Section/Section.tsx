type SectionProps = {
  children: React.ReactNode;
  id: string;
  align?: "start" | "end";
};

const Section = ({ children, id, align = "start" }: SectionProps) => (
  <section
    id={id}
    className={`${
      align === "start" ? "sm:items-start" : "sm:items-end"
    } flex w-full justify-center flex-col h-screen p-[clamp(1rem,2.5vw+0.5rem,4rem)]
    `}
  >
    {children}
  </section>
);

export default Section;
