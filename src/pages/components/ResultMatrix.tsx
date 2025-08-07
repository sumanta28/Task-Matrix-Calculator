// Import necessary components from Material UI for layout and design
import { Typography, Table, TableBody, TableCell, TableRow, Paper } from "@mui/material";

// Define the expected props structure for this component
// This component expects a prop called 'matrix', which is a 2D array of numbers
interface Props {
  matrix: number[][];
}

// Define and export the ResultMatrix component
export default function ResultMatrix({ matrix }: Props) {
  return (
    // Paper is like a card with elevation (shadow) and padding
    <Paper
      elevation={3} // Shadow depth
      sx={{
        mt: 4, // margin-top (spacing)
        padding: 2, // space inside the Paper
        minWidth: 250, // minimum width of the card
        maxWidth: 350, // maximum width to avoid stretching
        border: "1px solid #ccc", // light gray border
        borderRadius: 2, // rounded corners
        margin: "0 auto", // center the Paper horizontally
      }}
    >
      {/* Heading text at the top of the matrix */}
      <Typography
        variant="h6" // Heading size
        gutterBottom // Adds space below the text
        align="center" // Centers the heading
        sx={{ color: "orange", fontWeight: "bold" }} // Orange and bold style
      >
        After Adding Matrices
      </Typography>

      {/* The table to display the matrix */}
      <Table size="medium" sx={{ border: "1px solid #999" }}>
        <TableBody>
          {/* Loop through each row of the matrix */}
          {matrix.map((row, i) => (
            <TableRow key={i}>
              {/* Loop through each value (cell) in the row */}
              {row.map((cell, j) => (
                <TableCell
                  key={j}
                  align="center" // Center the number inside the cell
                  sx={{ border: "1px solid #999", padding: "8px 12px" }}
                >
                  {cell} {/* Display the number */}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
