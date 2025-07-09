import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "../components/head/Header";
import NewsContainer from "../components/main/NewsConatainer";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/All" />} />
        <Route path="/:category" element={<NewsContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
