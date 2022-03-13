import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// @component
import Loading from "./components/Loading";
// @nativebase provider
import { NativeBaseProvider, Center } from "native-base";
import { BaseTheme } from "./theme";
// @redux
import { Provider } from "react-redux";
import configureStore from "./store";
// @toasty
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const store = configureStore();

// @pages
const TransferPage = React.lazy(() => import("./pages/tranfer"));

const App: React.FC = () => {
  return (
    <NativeBaseProvider theme={BaseTheme}>
      <Provider store={store}>
        <Center w="100%" minHeight={"100vh"} background={"gray.700"}>
          <RouterManage />
          <ToastContainer />
        </Center>
      </Provider>
    </NativeBaseProvider>
  );
};

const RouterManage: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<TransferPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
