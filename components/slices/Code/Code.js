import { PrismicRichText } from "@prismicio/react";

function Code({ slice }) {
  const codeSerializer = {
    preformatted: ({ children }) => `<pre class="code">${children}</pre>`,
  };
  return (
    <PrismicRichText
      field={slice.primary.code}
      htmlSerializer={codeSerializer}
    />
  );
}

export default Code;
