import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// @component
import AppLayout from "./Layouts/app-layout";
import Loading from "./components/Loading";

// @styled
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme";

// @pages
const TransferPage = React.lazy(() => import("./pages/tranfer"));

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppLayout>
        <BrowserRouter>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<TransferPage />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AppLayout>
    </ThemeProvider>
  );
};

export default App;
