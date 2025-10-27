"use client";

type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children}: CardProps) => (
  <div
    className="card flex flex-col gap-y-1 items-center p-6 border-1 border-solid rounded-lg w-full max-w-2xl"
  >
    {children}
  </div>
);

export default Card;
