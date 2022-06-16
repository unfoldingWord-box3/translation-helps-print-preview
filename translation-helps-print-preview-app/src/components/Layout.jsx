import { usePermalinks } from "@gwdevs/permalinks-hooks"
import { TsvFile } from "translation-helps-print-preview-rcl";
import useFile from "../hooks/useFile";

export default function Layout() {
  const { permalink } = usePermalinks({});
  const file = useFile(permalink)
  return (
    <div className="Layout">
      <TsvFile file={file} />
    </div>
  );
};
