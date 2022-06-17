import { usePermalinks } from "@gwdevs/permalinks-hooks"
import { TsvFile } from "translation-helps-print-preview-rcl";

import useFile from "../hooks/useFile";
import usePreview from "../hooks/usePreview";

export default function Layout() {
  const { permalink } = usePermalinks({});
  const file = useFile(permalink);

  const component = file && <TsvFile file={file} />;
  const ready = !!file;
  
  const previewed = usePreview({ ready });
  console.log({ ready, previewed, file, component });

  return (
    <div className="Layout">
      {component}
    </div>
  );
};
