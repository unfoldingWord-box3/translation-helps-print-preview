import { useEffect, useState } from "react";
import { TsvFile } from "translation-helps-print-preview-rcl";

export default function Layout({url}) {
  const [file, setFile] = useState();

  useEffect(() => {
    fetch(url)
    .then(response => response.text())
    .then(_file => setFile(_file));

    return (() => {
      setFile();
    });
  }, [url]);

  return (
    <div className="Layout">
      <TsvFile file={file} />
    </div>
  );
};
