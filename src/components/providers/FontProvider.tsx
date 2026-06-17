"use client";
import { inter, instrumentSerif } from "@packages/configs/config.fonts";

interface FontProviderProps {
  children: React.ReactNode;
}

const FontProvider = ({ children }: Readonly<FontProviderProps>) => {
  return (
    <>
      <style>{`
        html,
        body,
        p,
        span,
        div,
        li,
        td,
        th,
        label,
        input,
        textarea,
        select,
        button,
        small,
        strong,
        em,
        blockquote,
        code,
        pre {
          font-family: var(${inter.variable}), sans-serif;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: var(${instrumentSerif.variable}), serif;
        }
      `}</style>

      {children}
    </>
  );
};

export default FontProvider;
