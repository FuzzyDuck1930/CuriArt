export type Observer = ({ render: () => void } & HTMLElement);

export type AppState = {
    screen: string
    // isLike: string
}

export enum ScreenActions {
    "NAVIGATE" = "NAVIGATE",
}

// export enum DashboardActions {
//    "LIKE"="LIKE",
//   }

//   export interface LikeActions{
//     action: DashboardActions.LIKE;
//     payload: ``
// }
 export type Actions = ScreenActions;