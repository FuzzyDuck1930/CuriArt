import { Screens } from "../types/navegation";
import { PostData } from "../types/post";
import { Actions, DashboardActions} from "../types/store";


export const navigate = (screen: Screens) => {
    return {
        type: "NAVIGATE",
        payload: screen,
    };
};