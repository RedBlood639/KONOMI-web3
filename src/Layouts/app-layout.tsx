// component
import { ScrollTop } from "../components/Button";
// styled component
import { AppLayoutWrapper } from "./app-layout.style";
import _ from "lodash";

const Layout = (props: any) => {
  const { children } = props;
  return (
    <AppLayoutWrapper>
      {children}
      <ScrollTop />
    </AppLayoutWrapper>
  );
};

export default Layout;
