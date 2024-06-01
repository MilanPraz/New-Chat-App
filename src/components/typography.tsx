import React from "react";
import { cn } from "@/lib/utils";

interface HeadingProps extends React.HTMLProps<HTMLHeadingElement> {
  className?: string;
}

interface ParagraphProps extends React.HTMLProps<HTMLParagraphElement> {
  className?: string;
}

export const H1: React.FC<HeadingProps> = ({ className, ...props }) => {
  return (
    <h1
      {...props}
      className={cn("text-5xl font-bold md:text-6xl lg:text-7xl", className)}
    />
  );
};

export const H2: React.FC<HeadingProps> = ({ className, ...props }) => {
  return (
    <h2
      {...props}
      className={cn("text-3xl font-semibold md:text-5xl", className)}
    />
  );
};

export const H3: React.FC<HeadingProps> = ({ className, ...props }) => {
  return (
    <h3
      {...props}
      className={cn("text-2xl font-semibold lg:text-3xl", className)}
    />
  );
};

export const H4: React.FC<HeadingProps> = ({ className, ...props }) => {
  return (
    <h4
      {...props}
      className={cn("text-xl font-semibold lg:text-2xl", className)}
    />
  );
};

export const H5: React.FC<HeadingProps> = ({ className, ...props }) => {
  return (
    <h3
      {...props}
      className={cn("text-lg font-semibold lg:text-xl", className)}
    />
  );
};

export const P: React.FC<ParagraphProps> = ({ className, ...props }) => {
  return <p {...props} className={cn("text-xl", className)}></p>;
};
