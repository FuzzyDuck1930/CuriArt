export type Observer = ({ render: () => void } & HTMLElement);

export type AppState = {
    screen: string
   
}

export enum ScreenActions {
    "NAVIGATE" = "NAVIGATE",
}

export enum DashboardActions {
    "LIKE_POST" = "LIKE_POST"
}


//   export interface LikeActions{
//     action: DashboardActions.LIKE;
//     payload: ``
// }
 export type Actions = ScreenActions | DashboardActions;