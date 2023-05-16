import { PrismicRichText } from "@prismicio/react";

function Text({ slice }) {
  return <PrismicRichText field={slice.primary.text} />;
}

export default Text;
