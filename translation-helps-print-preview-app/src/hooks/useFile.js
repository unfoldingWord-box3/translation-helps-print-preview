import { useEffect, useMemo, useState } from 'react'

export default function useFile(permalink) {
  const { owner, repository, branch, filePath } = permalink || {};
  const [file, setFile] = useState();

  const basePath = "https://git.door43.org";

  const url = useMemo(() => permalink && [basePath, owner, repository, "raw", "branch", branch, filePath].filter(Boolean).join("/"), [owner, repository, branch, filePath, permalink]);
  
  useEffect(() => {
    if(url)
    fetch(url)
    .then(response => response.text())
    .then(_file => setFile(_file));

    return (() => {
      setFile();
    });
  }, [url]);


  return file;
};
