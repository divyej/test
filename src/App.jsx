import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Table, TableBody, TableContainer, Paper } from '@mui/material';
import TableRowComponent from './components/TableRow';
import TableHeader from './components/TableHeader';
import SkeletonRows from './components/SkeletonRows';
import { TableRow,TableCell } from '@mui/material';
import optionData from './utils/datasets/OptionChainData';
import { mapping } from './utils/datasets/TableFields';

const OptionChainTable = () => {
  const [data, setData] = useState(optionData);
  const [hoverRow, setHoverRow] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const loaderRef = useRef(null);


  const loadMoreData = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setData(prevData => [...prevData, ...optionData]);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !loading) {
        loadMoreData();
      }
    }, { threshold: 1.0 });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loadMoreData, loading]);

  const sortData = (header) => {
    
    const key = mapping[header];
    if (!key) return; 
  
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    const sortedData = [...data].sort((a, b) => {
      const aValue = a[key] ?? 0;
      const bValue = b[key] ?? 0;
      const numA = isNaN(parseFloat(aValue)) ? 0 : parseFloat(aValue);
      const numB = isNaN(parseFloat(bValue)) ? 0 : parseFloat(bValue);
      
      if (numA < numB) return direction === 'asc' ? -1 : 1;
      if (numA > numB) return direction === 'asc' ? 1 : -1;
      return 0;
    });
  
    setData(sortedData);
    setSortConfig({ key, direction });
  };
  

  return (
    <TableContainer component={Paper} style={{ boxShadow: 'none', borderRadius: 8 }}>
      <Table style={{ borderCollapse: 'collapse' }}>
      <TableHeader sortConfig={sortConfig} onSort={sortData} />
        <TableBody>
          {data.map((row, index) => (
            <TableRowComponent
              key={index}
              row={row}
              index={index}
              hoverRow={hoverRow}
              setHoverRow={setHoverRow}
            />
          ))}
          {loading && <SkeletonRows />}
          <TableRow ref={loaderRef}>
            <TableCell colSpan={12} style={{ height: 1 }}></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OptionChainTable;
