import { parseISO, format } from "date-fns";
import ja from "datefns/local/ja";

export default function ConvertDate({ dateISO }) {
  return (
    <time dateTime={dateISO}>
      {format(parseISO(dateISO), "yyyy年MM月dd日", { local: ja })}
    </time>
  );
}
