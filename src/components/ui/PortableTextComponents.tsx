import Link from "next/link";
import type { PortableTextComponents } from "@portabletext/react";

export const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl mb-6 mt-12 first:mt-0">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-heading text-2xl font-bold text-black sm:text-3xl mb-4 mt-8">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="text-lg leading-relaxed text-black mb-4">{children}</p>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href || "";
      const isInternal = href.startsWith("/");

      if (isInternal) {
        return (
          <Link
            href={href}
            className="text-black underline transition-colors hover:text-gray-700"
          >
            {children}
          </Link>
        );
      }

      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black underline transition-colors hover:text-gray-700"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => (
      <strong className="font-bold">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 ml-4 mb-4">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 ml-4 mb-4">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="text-lg leading-relaxed text-black">{children}</li>
    ),
    number: ({ children }) => (
      <li className="text-lg leading-relaxed text-black">{children}</li>
    ),
  },
};
