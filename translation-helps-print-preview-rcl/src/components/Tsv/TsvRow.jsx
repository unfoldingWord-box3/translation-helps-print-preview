import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
// import { useDeepCompareEffect } from 'use-deep-compare';

export default function TsvRow ({
  row,
}) {

  return (
    <div>
      <h3>{row.Reference} - "{row.Quote}"</h3>
      <ReactMarkdown>
        {row.Note}
      </ReactMarkdown>
    </div>
  );
};

TsvRow.propTypes = {
  row: PropTypes.object,
};