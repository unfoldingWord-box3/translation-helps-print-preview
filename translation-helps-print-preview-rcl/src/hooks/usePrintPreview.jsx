import React, { useLayoutEffect } from "react";
import { useDeepCompareCallback } from 'use-deep-compare';
import { Previewer } from 'pagedjs';

export default function usePrintPreview({component, embed}) {
  const previewPDF = useDeepCompareCallback(() => {
    const previewer = new Previewer();

    const callback = (flow) => {
      console.log("preview rendered, total pages", flow.total, { flow });
    };

    let options;
    if (embed) {
      previewer.preview(
        document.querySelector('#content').innerHTML,
        [],
        document.querySelector('#preview')
      ).then(flow => {
        callback(flow);
        document.querySelector('#content').style.display = 'none';
      });
    } else {
      previewer.preview(options).then(callback);
    };
  }, [component, embed]);

  useLayoutEffect(() => {
    previewPDF();
  }, [component, previewPDF, embed]);

  return (
    <>
      <div id="content">
        {component}
      </div>
      <div id="preview"></div>
    </>
  );
};