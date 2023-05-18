import { PrismicRichText } from "@prismicio/react";

function Heading({ slice }) {
  // TODO: Add PigLatin etc.
  return <PrismicRichText field={slice.primary.text} />;
}

export default Heading;
