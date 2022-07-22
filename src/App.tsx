import { ItemDescription, ItemsList } from "pages";
import Layout from "layout";
import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Outlet />
          </Layout>
        }
      >
        <Route path="items">
          <Route index element={<ItemsList />} />
          <Route path=":id" element={<ItemDescription />}></Route>
        </Route>
      </Route>
      <Route path="*" element={<div>not found</div>}></Route>
    </Routes>
  );
};

export default App;
