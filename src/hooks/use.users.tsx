import { useDispatch, useSelector } from "react-redux";
import { UserRepo } from "../services/api.repo.users";
// import { LocalStorage } from "../services/local.storage";
import { loginThunk, /*updateUserThunk*/ } from "../slice/users.thunk";   // quitado 15/12
import { LoginUser, User } from "../entities/user";
import { ac } from "../slice/users.slice";
import { AppDispatch, RootState } from "../store/store";



export function useUsers() {
  const dispatch = useDispatch<AppDispatch>();
  const repo = new UserRepo();
  const { loggedUser } = useSelector((state: RootState) => state.userState);

  // const userStore = new LocalStorage<{ token: string }>('user');
  
  const register = (newUser: Partial<User>) => {
    repo.createUser(newUser);
  };

  const login = (loginUser: LoginUser) => {
    dispatch(loginThunk({ loginUser, repo }));
  };

  const userLogout = () => {
    dispatch(ac.logout());
  };

  // const updateCurrentUser = (id: string) => {
  //   dispatch(updateUserThunk({repo: repo, id: id}))
  // }    // quitado 15/12

  return {
    register,
    login,
    logout: userLogout,
    loggedUser, 
    // updateCurrentUser      // quitado15/12

  };
}
