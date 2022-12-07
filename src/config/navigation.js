import ErrorPage from "../main/error/ErrorPage";
import routes from "./routes";

const navigationConfig = [
  {
    name: "Root",
    path: "/",
    element: <routes.Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        name: "Initiative Tracker",
        path: "/initiative",
        element: <routes.InitiativeConfig />,
      },
      {
        name: "Encounter Fulcrum",
        path: "/encounter_fulcrum",
        element: <routes.FulcrumConfig />,
      },
    ],
  },
];

export default navigationConfig;
