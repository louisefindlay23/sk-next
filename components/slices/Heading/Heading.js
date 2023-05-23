import { PrismicRichText } from "@prismicio/react";
import pigLatin from "piglatin";
// Convert h2s into Pig Latin
const pigLatinSerializer = {
  heading2: ({ text }) => <h2>{pigLatin(text)}</h2>,
};
function Heading({ slice }) {
  return (
    <PrismicRichText
      field={slice.primary.heading}
      components={pigLatinSerializer}
    />
  );
}

export default Heading;
