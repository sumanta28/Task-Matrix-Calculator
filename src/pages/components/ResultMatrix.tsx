import { Typography, Table, TableBody, TableCell, TableRow, Paper } from "@mui/material";

interface Props {
  matrix: number[][];
}

export default function ResultMatrix({ matrix }: Props) {
  return (
    <Paper
      elevation={3}
      sx={{
        mt: 4,
        padding: 2,
        minWidth: 250,
        maxWidth: 350,
        border: "1px solid #ccc",
        borderRadius: 2,
        margin: "0 auto",
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        align="center"
        sx={{ color: "orange", fontWeight: "bold" }}
      >
        After Adding Matrices
      </Typography>
      <Table size="medium" sx={{ border: "1px solid #999" }}>
        <TableBody>
          {matrix.map((row, i) => (
            <TableRow key={i}>
              {row.map((cell, j) => (
                <TableCell
                  key={j}
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
