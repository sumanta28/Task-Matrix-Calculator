import { TextField, Button, Stack } from "@mui/material";
import React from "react";

interface Props {
  rows: number;
  cols: number;
  setRows: (value: number) => void;
  setCols: (value: number) => void;
  onGenerate: () => void;
}

export default function MatrixInput({
  rows,
  cols,
  setRows,
  setCols,
  onGenerate,
}: Props) {
  const handleInput = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setter: React.Dispatch<React.SetStateAction<number>>
) => {
  const value = parseInt(e.target.value, 10);
  setter(isNaN(value) ? 0 : value);
};


  return (
    <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
      <TextField
        label="Rows"
        type="number"
        value={rows === 0 ? "" : rows}
        onChange={(e) => handleInput(e, setRows)}
        inputProps={{ min: 0 }}
      />
      <TextField
        label="Columns"
        type="number"
        value={cols === 0 ? "" : cols}
        onChange={(e) => handleInput(e, setCols)}
        inputProps={{ min: 0 }}
      />
      <Button variant="contained" onClick={onGenerate}>
        Generate
      </Button>
    </Stack>
  );
}
