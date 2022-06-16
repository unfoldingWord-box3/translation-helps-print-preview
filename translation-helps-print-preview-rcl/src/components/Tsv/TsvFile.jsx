import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { tsvStringToTable } from 'uw-tsv-parser';

import TsvRow from './TsvRow';

export default function TsvFile ({ file, items: _items=[] }) {
  const [items, setItems] = useState(_items);

  useEffect(() => {
    const { header, data } = file ? tsvStringToTable(file) : {};

    let _items = [];

    data?.forEach((row) => {
      let item = {};
      
      header.forEach((column, index) => {
        item[column] = row[index];
      });
  
      _items = [..._items, item];
    });
  
    setItems(_items);
  }, [file]);


  const itemsComponents = items?.map((item, index) => (
    <TsvRow key={index} item={item} />
  ));
  
  return (
    <div id='fileContent'>
      {itemsComponents}
    </div>
  );
};

TsvFile.propTypes = {
  file: PropTypes.string,
  items: PropTypes.array,
};

TsvFile.defaultProps = {};