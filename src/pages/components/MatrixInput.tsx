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


// import React, { useState } from "react";

// interface Props {
//   rows: number;
//   cols: number;
//   setRows: React.Dispatch<React.SetStateAction<number>>;
//   setCols: React.Dispatch<React.SetStateAction<number>>;
//   onGenerate: () => void;
// }

// export default function MatrixInput({
//   rows,
//   cols,
//   setRows,
//   setCols,
//   onGenerate,
// }: Props) {
//   const [rowError, setRowError] = useState(false);
//   const [colError, setColError] = useState(false);

//   const handleInput = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     setter: React.Dispatch<React.SetStateAction<number>>,
//     errorSetter: React.Dispatch<React.SetStateAction<boolean>>
//   ) => {
//     const value = parseInt(e.target.value, 10);
//     if (isNaN(value) || value < 0) {
//       setter(0);
//       errorSetter(true);
//     } else {
//       setter(value);
//       errorSetter(false);
//     }
//   };

//   return (
//     <div style={{ display: "flex", gap: "1rem", justifyContent: "center", alignItems: "center", marginTop: "1rem" }}>
//       <div style={{ display: "flex", flexDirection: "column" }}>
//         <label htmlFor="rows">Rows</label>
//         <input
//           id="rows"
//           type="number"
//           value={rows || ""}
//           onChange={(e) => handleInput(e, setRows, setRowError)}
//           style={{ borderColor: rowError ? "red" : "#ccc", padding: "5px", borderRadius: "4px" }}
//         />
//         {rowError && <small style={{ color: "red" }}>Enter a valid positive number</small>}
//       </div>

//       <div style={{ display: "flex", flexDirection: "column" }}>
//         <label htmlFor="cols">Columns</label>
//         <input
//           id="cols"
//           type="number"
//           value={cols || ""}
//           onChange={(e) => handleInput(e, setCols, setColError)}
//           style={{ borderColor: colError ? "red" : "#ccc", padding: "5px", borderRadius: "4px" }}
//         />
//         {colError && <small style={{ color: "red" }}>Enter a valid positive number</small>}
//       </div>

//       <button
//         onClick={onGenerate}
//         disabled={rowError || colError || rows === 0 || cols === 0}
//         style={{
//           padding: "8px 16px",
//           backgroundColor: "#007bff",
//           color: "#fff",
//           border: "none",
//           borderRadius: "4px",
//           cursor: "pointer",
//           opacity: rowError || colError || rows === 0 || cols === 0 ? 0.5 : 1,
//         }}
//       >
//         Generate
//       </button>
//     </div>
//   );
// }
