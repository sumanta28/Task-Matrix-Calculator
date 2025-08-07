import React, { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";

interface Props {
  rows: number;
  cols: number;
  setRows: React.Dispatch<React.SetStateAction<number>>;
  setCols: React.Dispatch<React.SetStateAction<number>>;
  onGenerate: () => void;
}

export default function MatrixInput({
  rows,
  cols,
  setRows,
  setCols,
  onGenerate,
}: Props) {
  const [rowError, setRowError] = useState(false);
  const [colError, setColError] = useState(false);

 const handleInput = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setter: React.Dispatch<React.SetStateAction<number>>,
  errorSetter: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const value = parseInt(e.target.value, 10);
  if (isNaN(value) || value < 0) {
    setter(0);
    errorSetter(true);
  } else {
    setter(value);
    errorSetter(false);
  }
};


  return (
    <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
      <TextField
        label="Rows"
        type="number"
        value={rows || ""}
        onChange={(e) => handleInput(e, setRows, setRowError)}
        
        error={rowError}
      />
      <TextField
        label="Columns"
        type="number"
        value={cols || ""}
        onChange={(e) => handleInput(e, setCols, setColError)}
       
        error={colError}
      />
      <Button
        variant="contained"
        onClick={onGenerate}
        disabled={rowError || colError || rows === 0 || cols === 0}
      >
        Generate
      </Button>
    </Stack>
  );
}


