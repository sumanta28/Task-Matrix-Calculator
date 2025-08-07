import React, { useState, lazy, Suspense } from "react";
import { Container, Button, Typography, Box, CircularProgress } from "@mui/material";
import { Toaster, toast } from "sonner";
const Navbar = lazy(() => import("@/pages/components/NavBar"));
const MatrixInput = lazy(() => import("@/pages/components/MatrixInput"));
const MatrixTable = lazy(() => import("@/pages/components/MatrixTable"));
const ResultMatrix = lazy(() => import("@/pages/components/ResultMatrix"));

export default function HomePage() {
  const [rows, setRows] = useState<number>(0);
  const [cols, setCols] = useState<number>(0);
  const [matrixSum, setMatrixSum] = useState<number[][]>([]);
  const [matrixProduct, setMatrixProduct] = useState<number[][]>([]);
  const [resultMatrix, setResultMatrix] = useState<number[][]>([]);

  const generateMatrices = () => {
    const sum: number[][] = [];
    const product: number[][] = [];

    for (let i = 0; i < rows; i++) {
      const sumRow: number[] = [];
      const productRow: number[] = [];
      for (let j = 0; j < cols; j++) {
        sumRow.push(i + j);
        productRow.push(i * j);
      }
      sum.push(sumRow);
      product.push(productRow);
    }

    setMatrixSum(sum);
    setMatrixProduct(product);
    setResultMatrix([]);
  };

  const addMatrices = () => {
    const result = matrixSum.map((row, i) =>
      row.map((value, j) => value + matrixProduct[i][j])
    );
    setResultMatrix(result);
    toast.success("Matrices added successfully!");
  };

  return (
    <>
      <Toaster richColors position="bottom-right" />

      <Suspense fallback={<Box p={2}><CircularProgress /></Box>}>
        <Navbar />
      </Suspense>

      <Container sx={{ mt: 4 }}>
        <Box display="flex" justifyContent="center" mb={3}>
          <Typography variant="h4" align="center">
            Matrix Calculator
          </Typography>
        </Box>

        <Box display="flex" justifyContent="center" mb={4}>
          <Suspense fallback={<CircularProgress />}>
            <MatrixInput
              rows={rows}
              cols={cols}
              setRows={setRows}
              setCols={setCols}
              onGenerate={generateMatrices}
            />
          </Suspense>
        </Box>

        {matrixSum.length > 0 && (
          <Suspense fallback={<CircularProgress />}>
            <Box
              sx={{
                mt: 4,
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 4,
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <MatrixTable title="Sum (i + j)" matrix={matrixSum} />
              <MatrixTable title="Product (i * j)" matrix={matrixProduct} />
            </Box>
          </Suspense>
        )}

        {matrixSum.length > 0 && (
          <Box display="flex" justifyContent="center" mt={3}>
            <Button variant="contained" color="secondary" onClick={addMatrices}>
              Add Matrices
            </Button>
          </Box>
        )}

        {resultMatrix.length > 0 && (
          <Suspense fallback={<CircularProgress />}>
            <Box mt={4}>
              <ResultMatrix matrix={resultMatrix} />
            </Box>
          </Suspense>
        )}
      </Container>
    </>
  );
}
