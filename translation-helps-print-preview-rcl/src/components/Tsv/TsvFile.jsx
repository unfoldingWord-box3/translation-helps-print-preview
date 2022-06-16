import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { tsvStringToTable } from 'uw-tsv-parser';

import TsvRow from './TsvRow';

export default function TsvFile ({ file, rows: _rows=[], rowComponent, }) {
  const [rows, setRows] = useState(_rows);

  useEffect(() => {
    const { header, data } = file ? tsvStringToTable(file) : {};

    let _rows = [];

    data?.forEach((_row) => {
      let row = {};
      
      header.forEach((column, index) => {
        row[column] = _row[index];
      });
  
      _rows = [..._rows, row];
    });
  
    setRows(_rows);

    return(() => {
      setRows([]);
    });
  }, [file]);

  const itemsComponents = rows?.map((row, index) => (
    <TsvRow key={index} row={row} component={rowComponent} />
  ));
  
  return (
    <div className='fileContent'>
      {itemsComponents}
    </div>
  );
};

TsvFile.propTypes = {
  file: PropTypes.string,
  rows: PropTypes.array,
  rowComponent: PropTypes,
};

TsvFile.defaultProps = {};