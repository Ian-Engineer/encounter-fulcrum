import NavigationBar from "../../main/components/NavigationBar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
};

export default Root;
