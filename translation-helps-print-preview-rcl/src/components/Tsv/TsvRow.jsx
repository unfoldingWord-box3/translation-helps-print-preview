import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TsvContent } from 'translation-helps-rcl';

export default function TsvRow ({
  item,
  filters: _filters,
  fontSize = '1.0em',
  markdownView=false,
}) {
  const [selectedQuote, setQuote] = useState({});
  const filters = _filters || Object.keys(item);

  return (
    <TsvContent
      item={item}
      filters={filters}
      fontSize={fontSize}
      markdownView={markdownView}
      selectedQuote={selectedQuote}
      setQuote={setQuote}
      showSaveChangesPrompt={false}
    />
  );
};

TsvRow.propTypes = {
  item: PropTypes.object,
  filters: PropTypes.array,
  fontSize: PropTypes.string,
  markdownView: PropTypes.bool,
};