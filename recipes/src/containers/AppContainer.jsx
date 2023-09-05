import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
// import { ToastContainer } from "react-toastify";
import NotFound from "../pages/common/NotFound";
import Recipes from "../pages/recipe/Recipes";

const MyCollection = lazy(async () => await import("../pages/recipe/MyCollection"));
const RecipeDetails = lazy(async () => await import("../pages/recipe/RecipeDetails"));

function AppContainer() {
  return (
    <Suspense>
      {/* <ToastContainer /> */}
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Recipes />} />
          <Route
            path="/MyCollection"
            element={
              <Suspense fallback={<div>loading...</div>}>
                <MyCollection />
              </Suspense>
            }
          />
          <Route
            path="/RecipeDetails/:recipeId"
            element={
              <Suspense fallback={<div>loading...</div>}>
                <RecipeDetails />
              </Suspense>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default AppContainer;
