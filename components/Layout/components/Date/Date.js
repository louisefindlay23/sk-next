import * as prismicH from "@prismicio/helpers";
import { format } from "date-fns";

export default function Date(postDate) {
  const formattedDate = format(
    prismicH.asDate(postDate.postDate),
    "dd/MM/yyyy"
  );
  return (
    <time dateTime={prismicH.asDate(postDate.postDate)}>{formattedDate}</time>
  );
}
