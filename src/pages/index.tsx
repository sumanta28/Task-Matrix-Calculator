// Importing necessary libraries and components
import React, { useState, lazy, Suspense } from "react";
import {
  Container,
  Button,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import { Toaster, toast } from "sonner";

// Lazy loading components to make the app faster by loading components only when needed
const Navbar = lazy(() => import("@/pages/components/NavBar"));
const MatrixInput = lazy(() => import("@/pages/components/MatrixInput"));
const MatrixTable = lazy(() => import("@/pages/components/MatrixTable"));
const ResultMatrix = lazy(() => import("@/pages/components/ResultMatrix"));

export default function HomePage() {
  // States for number of rows and columns in the matrix
  const [rows, setRows] = useState<number>(0);
  const [cols, setCols] = useState<number>(0);

  // States to hold generated matrices and final result
  const [matrixSum, setMatrixSum] = useState<number[][]>([]);
  const [matrixProduct, setMatrixProduct] = useState<number[][]>([]);
  const [resultMatrix, setResultMatrix] = useState<number[][]>([]);

  // Function to generate two matrices:
  //  - One for sum: each cell = i + j
  //  - One for product: each cell = i * j
  const generateMatrices = () => {
    const sum: number[][] = [];
    const product: number[][] = [];

    for (let i = 0; i < rows; i++) {
      const sumRow: number[] = [];
      const productRow: number[] = [];

      for (let j = 0; j < cols; j++) {
        sumRow.push(i + j);       // Example: sum[1][2] = 1 + 2 = 3
        productRow.push(i * j);   // Example: product[1][2] = 1 * 2 = 2
      }

      sum.push(sumRow);
      product.push(productRow);
    }

    setMatrixSum(sum);               // Save the sum matrix
    setMatrixProduct(product);       // Save the product matrix
    setResultMatrix([]);             // Clear any previous result
  };

  // Function to add both matrices element by element
  const addMatrices = () => {
    const result = matrixSum.map((row, i) =>
      row.map((value, j) => value + matrixProduct[i][j])
    );
    setResultMatrix(result);         // Save the result matrix
    toast.success("Matrices added successfully!"); // Show success message
  };

  return (
    <>
      {/* Toast notification area (bottom-right corner) */}
      <Toaster richColors position="bottom-right" />

      {/* Show navbar while loading lazily */}
      <Suspense fallback={<Box p={2}><CircularProgress /></Box>}>
        <Navbar />
      </Suspense>

      <Container sx={{ mt: 4 }}>
        {/* Heading of the page */}
        <Box display="flex" justifyContent="center" mb={3}>
          <Typography variant="h4" align="center">
            Matrix Calculator
          </Typography>
        </Box>

        {/* Input area to define matrix dimensions and generate matrices */}
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

        {/* Show generated matrices if available */}
        {matrixSum.length > 0 && (
          <Suspense fallback={<CircularProgress />}>
            <Box
              sx={{
                mt: 4,
                display: "flex",
                flexDirection: { xs: "column", md: "row" }, // Responsive layout
                gap: 4,
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              {/* Show Matrix A (sum) and Matrix B (product) */}
              <MatrixTable title="Sum (i + j)" matrix={matrixSum} />
              <MatrixTable title="Product (i * j)" matrix={matrixProduct} />
            </Box>
          </Suspense>
        )}

        {/* Button to trigger addition of matrices */}
        {matrixSum.length > 0 && (
          <Box display="flex" justifyContent="center" mt={3}>
            <Button variant="contained" color="secondary" onClick={addMatrices}>
              Add Matrices
            </Button>
          </Box>
        )}

        {/* Display result matrix after addition */}
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
