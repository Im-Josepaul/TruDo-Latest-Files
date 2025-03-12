import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import MainP from "../src/pages/Mainpage/Mainpage";
import CreateCampaign from "../src/pages/CreateCampaign/CreateCam";

function App() {
  return (
    <>
      <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />

      <Routes>
        <Route path="/" element={<MainP />} />
        <Route path="/createCampaign" element={<CreateCampaign />} />
      </Routes>
    </>
  );
}

export default App;
