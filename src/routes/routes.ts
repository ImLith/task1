import MainMenu from '<pages>/mainMenu';

type IRouterPath = {
  path: string;
  index?: true;
  title: string;
  element: ({ title }: { title: string }) => JSX.Element;
};

export type IRouter = {
  [x: string]: IRouterPath;
  mainMenu: IRouterPath;
};

export const ROUTES: IRouter = {
  mainMenu: {
    path: '/mainMenu',
    title: 'Main Menu',
    index: true,
    element: MainMenu,
  },
};
