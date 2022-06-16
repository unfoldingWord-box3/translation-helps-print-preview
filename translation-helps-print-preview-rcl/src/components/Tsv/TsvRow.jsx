import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
// import { useDeepCompareEffect } from 'use-deep-compare';

export default function TsvRow ({
  row,
  component: Component,
}) {

  return <Component row={row} />;
};

TsvRow.propTypes = {
  row: PropTypes.object,
};

TsvRow.defaultProps = {
  component: ({ row, ...props}) => (
    <div className='tsvRow'>
      <h3>{row.Reference} - "{row?.GlQuote || row?.Quote}"</h3>
      <ReactMarkdown>
        {row.Note}
      </ReactMarkdown>
    </div>
  ),
}