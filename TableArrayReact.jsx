import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const TableArrayReact = () => {
  return (
    <div>
        <TableContainer>
          <Table>
            <TableHead>
                <TableRow>
                    <TableCell><b>NAME</b></TableCell>
                    <TableCell><b>AGE</b></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell><b>SUBIN</b></TableCell>
                    <TableCell><b>20</b></TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
    </div>
  )
}

export default TableArrayReact