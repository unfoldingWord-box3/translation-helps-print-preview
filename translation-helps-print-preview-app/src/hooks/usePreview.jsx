import { useLayoutEffect, useCallback } from 'react';
import { Previewer } from 'pagedjs';

export default function usePreview({ready=false}) {
  const preview = useCallback(async () => {
    const previewer = new Previewer();
    let options;
    const flow = await previewer.preview(options);
    console.log("preview rendered, total pages", flow.total, { flow });
  }, []);

  useLayoutEffect(() => {
    if (ready) preview();
  }, [ready, preview]);

  return true;
};
