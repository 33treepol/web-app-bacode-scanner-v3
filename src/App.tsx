// App.tsx
import React from "react";
import OCRReader from "./CameraTextCapture";
import { Container } from "@mui/material";

const App: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <OCRReader />
    </Container>
  );
};

export default App;
