import * as PATHS from "../utils/paths";
import HomePage from "../pages/HomePage";
import CreateProjectPage from "../pages/CreateProjectPage";

const routes = (props) => {
  return [
    {
      path: PATHS.HOMEPAGE,
      element: <HomePage {...props} />,
    },
    {
      path: PATHS.CREATEPROJECTPAGE,
      element: <CreateProjectPage {...props} />,
    },
  ];
};

export default routes;
