import React from 'react';

const TableComponent = ({ block, contentState }) => {
  const { table } = contentState.getEntity(block.getEntityAt(0)).getData();
  const rows = table.split('\n').map(row => row.split('|').slice(1, -1));

  return (
    <table style={{ border: '1px solid black', borderCollapse: 'collapse', width: '100%' }}>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} style={{ border: '1px solid black', padding: '8px' }}>{cell.trim()}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
