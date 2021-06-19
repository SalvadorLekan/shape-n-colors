import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { login, logout } from "../store/slices/auth";

export default function useAuth() {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.authReducer);
  const loggedInUser = user as User;
  function logIn(name: string) {
    dispatch(login(name));
  }
  function logOut() {
    dispatch(logout());
  }

  return { loggedInUser, logIn, logOut, user };
}
