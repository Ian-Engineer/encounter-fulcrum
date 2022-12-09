import routes from "./routes";

const navigationConfig = [
  {
    name: "Root",
    path: "/",
    element: <routes.Root />,
    errorElement: <routes.ErrorConfig />,
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
