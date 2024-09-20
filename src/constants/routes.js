import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/Homepage";
import Test from "../pages/Test";
import Test2 from "../pages/Test2";

const routes = [
  {
    path: "/",
    component: Homepage,
    layout: MainLayout,
  },
  {
    path: "Test",
    compoent: Test,
    layout: Homepage
  },
  {
    path: "Test2",
    component: Test2,
  }
];

export { routes };
