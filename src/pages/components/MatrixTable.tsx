// import { Table, TableBody, TableCell, TableRow, Typography, Paper } from "@mui/material";

// // This defines the type of props the component will accept.
// // 'title' is a string (e.g., "Matrix A").
// // 'matrix' is a 2D array of numbers, like [[1,2],[3,4]].
// interface Props {
//   title: string;
//   matrix: number[][];
// }

// // This is a reusable React component called MatrixTable.
// // It takes in a matrix and displays it in a styled MUI table.
// export default function MatrixTable({ title, matrix }: Props) {
//   return (
//     // The outer container is a Paper component with elevation (shadow),
//     // padding, border, and max width for nice presentation.
//     <Paper
//       elevation={3}
//       sx={{
//         padding: 2,
//         minWidth: 250,         
//         maxWidth: 350,
//         border: "1px solid #ccc",
//         borderRadius: 2,
//         overflowX: "auto", // Scrolls horizontally if matrix is too wide
//       }}
//     >
//       {/* Title at the top of the matrix, styled using Typography */}
//       <Typography variant="h6" gutterBottom align="center" color="primary">
//         {title}
//       </Typography>

//       {/* The main table structure from MUI */}
//       <Table size="medium" sx={{ border: "1px solid #999" }}>
//         <TableBody>
//           {/* Loop through each row of the matrix */}
//           {matrix.map((row, i) => (
//             <TableRow key={i}>
//               {/* Loop through each cell of the current row */}
//               {row.map((cell, j) => (
//                 <TableCell
//                   key={j}
//                   align="center"
//                   sx={{ border: "1px solid #999", padding: "8px 12px" }}
//                 >
//                   {cell} {/* Display the number inside the table cell */}
//                 </TableCell>
//               ))}
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </Paper>
//   );
// }


"use client"; // If you're using Next.js 13+ and this is a client component

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";

// This defines the props for the component
interface Props {
  title: string;
  matrix?: number[][]; // Made optional to prevent SSR crash
}

// MatrixTable component: displays a 2D matrix in a styled MUI table
export default function MatrixTable({ title, matrix }: Props) {
  // Guard clause to prevent rendering if matrix is undefined or empty
  if (!Array.isArray(matrix) || matrix.length === 0) {
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
          Matrix data not available
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
        overflowX: "auto", // Scroll horizontally if matrix is wide
      }}
    >
      {/* Matrix title */}
      <Typography variant="h6" gutterBottom align="center" color="primary">
        {title}
      </Typography>

      {/* MUI table displaying the matrix */}
      <Table size="medium" sx={{ border: "1px solid #999" }}>
        <TableBody>
          {matrix.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map((cell, colIndex) => (
                <TableCell
                  key={colIndex}
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
