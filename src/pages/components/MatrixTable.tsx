"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";

interface Props {
  title: string;
  matrix?: number[][];
}

export default function MatrixTable({ title, matrix = [] }: Props) {
  const isValidMatrix = Array.isArray(matrix) && 
                       matrix.length > 0 && 
                       matrix.every(row => Array.isArray(row));

  if (!isValidMatrix) {
    return (
      <Paper
        elevation={3}
        sx={{
          padding: 2,
          minWidth: 250,
          maxWidth: 350,
          border: "1px solid #ccc",
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" align="center" color="error">
          {matrix === undefined ? "Matrix not provided" : "Invalid matrix data"}
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper
      elevation={3}
      sx={{
        padding: 2,
        minWidth: 250,
        maxWidth: 350,
        border: "1px solid #ccc",
        borderRadius: 2,
        overflowX: "auto",
      }}
    >
      <Typography variant="h6" gutterBottom align="center" color="primary">
        {title}
      </Typography>

      <Table size="medium" sx={{ border: "1px solid #999" }}>
        <TableBody>
          {matrix.map((row, rowIndex) => (
            <TableRow key={`row-${rowIndex}`}>
              {row.map((cell, colIndex) => (
                <TableCell
                  key={`cell-${rowIndex}-${colIndex}`}
                  align="center"
                  sx={{ border: "1px solid #999", padding: "8px 12px" }}
                >
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}