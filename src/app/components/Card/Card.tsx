"use client";

type CardProps = {
  children: React.ReactNode;
  fullWidth?: boolean;
  fullBorder?: boolean;
};

const Card = ({ children, fullWidth, fullBorder }: CardProps) => {
  const widthStyles = fullWidth ? "w-full max-w-7xl" : "";
  const borderStyles = fullBorder ? "border-1" : "border-y-1";
  return (
    <div
      className={`card flex flex-col gap-y-3 items-center p-6 ${borderStyles} border-solid border-green-400 rounded-lg ${widthStyles}`}
    >
      {children}
    </div>
  );
};

export default Card;
