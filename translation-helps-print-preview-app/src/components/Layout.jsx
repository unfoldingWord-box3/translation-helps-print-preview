import { useEffect, useState } from "react";
import { TsvFile } from "translation-helps-print-preview-rcl";

export default function Layout() {
  const [file, setFile] = useState();

  useEffect(() => {
    fetch('https://git.door43.org/test_org2/ml_tn/raw/branch/master/tn_3JN.tsv')
    .then(response => response.text())
    .then(_file => setFile(_file));
  }, []);

  return (
    <div className="Layout">
      <TsvFile file={file} />
    </div>
  );
};
