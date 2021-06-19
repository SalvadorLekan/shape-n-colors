import { useLayoutEffect } from "react";
import useAuth from "../hooks/useAuth";
import StoreProvider from "./StoreProvider";

function LoggedInStoreProvider({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <Login>{children}</Login>
    </StoreProvider>
  );
}
function Login({ children }: { children: React.ReactNode }) {
  const { logIn } = useAuth();
  useLayoutEffect(() => {
    logIn("Salvador");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>{children}</>;
}

export default LoggedInStoreProvider;
