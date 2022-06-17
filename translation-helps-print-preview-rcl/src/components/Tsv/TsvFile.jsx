import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { tsvStringToTable } from 'uw-tsv-parser';

import TsvRow from './TsvRow';

export default function TsvFile ({ file, rows: _rows=[], rowComponent, }) {
  const rows = useMemo(() => {
    let _rows = [];
    const { header, data } = file ? tsvStringToTable(file) : {};

    data?.forEach((_row) => {
      let row = {};
      header.forEach((column, index) => { row[column] = _row[index]; });
      _rows = [..._rows, row];
    });
  
    return _rows;
  }, [file]);

  const rowsComponents = rows?.map((row, index) => (
    <TsvRow key={index} row={row} component={rowComponent} />
  ));
  
  return (
    <div className='fileContent'>
      {rowsComponents}
    </div>
  );
};

TsvFile.propTypes = {
  file: PropTypes.string,
  rows: PropTypes.array,
  rowComponent: PropTypes.func,
};

TsvFile.defaultProps = {};