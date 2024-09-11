import React, { useState, useEffect } from 'react';

const styles = {
  container: {
    margin: '20px 0',
    fontFamily: 'Arial, sans-serif',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  th: {
    background: '#f8f8f8',
    color: '#333',
    fontWeight: 'bold',
    padding: '12px 15px',
    textAlign: 'left',
    borderBottom: '2px solid #ddd',
    textTransform: 'uppercase',
  },
  td: {
    padding: '10px 15px',
    borderBottom: '1px solid #e0e0e0',
  },
  tr: {
    transition: 'background-color 0.3s',
  },
  trEven: {
    backgroundColor: '#f9f9f9',
  },
  trHover: {
    backgroundColor: '#f0f0f0',
  },
  link: {
    color: '#0066cc',
    textDecoration: 'none',
  },
  ul: {
    margin: 0,
    paddingLeft: '20px',
  },
};

const InfoTable = ({ tsvContent }) => {
  const parseTSV = (content) => {
    const lines = content.trim().split('\n');
    const headers = lines[0].split('\t').slice(1); // Skip the first empty header
    const rows = lines.slice(1).map(line => line.split('\t'));
    return { headers, rows };
  };

  const { headers, rows } = parseTSV(tsvContent);

  return (
    <div style={styles.container}>
      <table style={styles.table}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} style={styles.th}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => {
            const url = row[0]; // First column is the URL
            const displayRow = row.slice(1); // Rest of the columns for display
            return (
              <tr
                key={rowIndex}
                style={{
                  ...styles.tr,
                  ...(rowIndex % 2 === 0 ? styles.trEven : {}),
                }}
              >
                {displayRow.map((cell, cellIndex) => (
                  <td key={cellIndex} style={styles.td}>
                    {cellIndex === 0 ? (
                      <a href={url} target="_blank" rel="noopener noreferrer" style={styles.link}>
                        {cell}
                      </a>
                    ) : cellIndex === 1 ? (
                      <ul style={styles.ul}>
                        {cell.split('\।').map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      cell
                    )}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const VoterInfoTable = () => {
  const [tsvContent, setTsvContent] = useState('');

  useEffect(() => {
    fetch('voter_info.tsv')
      .then(response => response.text())
      .then(data => setTsvContent(data));
  }, []);

  if (!tsvContent) {
    return <div>Loading TSV...</div>;
  }

  return <InfoTable tsvContent={tsvContent} />;
};

export default VoterInfoTable;
