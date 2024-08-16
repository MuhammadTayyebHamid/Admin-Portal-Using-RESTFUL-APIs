import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination
} from '@mui/material';

const TableComponent = ({ search, data = [] }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5); // Default rows per page

  if (!data || data.length === 0) {
    return <div> </div>;
  }

  const columns = Object.keys(data[0]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Filter and slice the data for the current page
  const filteredData = data.filter((row) => {
    const searchTerm = search.toLowerCase();
    return (
      searchTerm === '' ||
      Object.values(row).some((value) => {
        if (value !== undefined && value !== null) {
          return value.toString().toLowerCase().includes(searchTerm);
        }
        return false;
      })
    );
  });

  const paginatedData = filteredData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>#</TableCell>
            {columns.map((column, index) => (
              <TableCell key={index} align="center" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
                {column.charAt(0).toUpperCase() + column.slice(1)}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedData.map((row, index) => (
            <TableRow key={index} hover>
              <TableCell align="center" sx={{ fontWeight: '500' }}>
                {page * rowsPerPage + index + 1}
              </TableCell>
              {columns.map((column, colIndex) => (
                <TableCell key={colIndex} align="center" sx={{ fontWeight: '500' }}>
                  {row[column]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={filteredData.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default TableComponent;
