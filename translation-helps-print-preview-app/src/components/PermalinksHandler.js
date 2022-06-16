import { usePermalinks, useNavigation, PermalinksConfig } from "@gwdevs/permalinks-hooks"
import { useEffect } from "react";

const routes = [
  {
    entry: "render",
    path: ["owner","repository","branch","filePath"]
  }
]

export function PermalinksHandler({children}) {
  const { pathname } = usePermalinks({ routes });
  const { push } = useNavigation();

  useEffect(() => {
    if(pathname === "/") push("/render/test_org2/ml_tn/master/tn_REV.tsv")
  }, [pathname, push])
  

  return <PermalinksConfig routes={routes}>{children}</PermalinksConfig>
}