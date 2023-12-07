import { useDispatch } from "react-redux";
import { UserRepo } from "../services/api.repo.users";
import { LocalStorage } from "../services/local.storage";
import { loginThunk, loginTokenThunk } from "../slice/users.thunk";
import { LoginUser, User } from "../entities/user";
import { ac } from "../slice/users.slice";
import { AppDispatch } from "../store/store";



export function useUsers() {
  const dispatch = useDispatch<AppDispatch>();
  const repo = new UserRepo();
  const userStore = new LocalStorage<{ token: string }>('user');
  
  const register = (newUser: Partial<User>) => {
    repo.createUser(newUser);
  };

  const login = (loginUser: LoginUser) => {
    dispatch(loginThunk({ loginUser, repo }));
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // Tconst loginWithToken = () => {
  //   const userStoreData = userStore.get();
  //   if (userStoreData) {
  //     const token = userStoreData.token;
  //     dispatch(loginTokenThunk({ token, repo, userStore}));
  //   }
  // };

  const logout = () => {
    dispatch(ac.logout());
    userStore.remove();
  };

  return {
    register,
    login,
    loginTokenThunk,
    logout,
  };
}

