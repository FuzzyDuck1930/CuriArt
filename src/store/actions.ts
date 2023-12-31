import { Screens } from "../types/navegation";

import { Actions, DashboardActions} from "../types/store";


export const navigate = (screen: Screens) => {
    return {
        type: "NAVIGATE",
        payload: screen,
    };
};
export const setUserCredentials = (user: string) => {
    return {
      type: "SETUSER",
      payload: user,
    };
  };
