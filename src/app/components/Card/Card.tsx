"use client";

type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children}: CardProps) => (
  <div
    className="card flex flex-col gap-y-3 items-center p-6 border-y-1 border-solid border-green-400 rounded-lg w-full max-w-7xl"
  >
    {children}
  </div>
);

export default Card;
