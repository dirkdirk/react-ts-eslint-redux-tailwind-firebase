export interface ITodo {
  [id: string]: {
    title: string;
  };
}

export interface IUserSettings {
  isDark?: boolean;
  viewWeeksBack?: number;
  viewWeeksForward?: number;
}

export interface IUser {
  settings: IUserSettings;
  todos: ITodo;
}

export const newUserFbData: IUser = {
  settings: {
    isDark: false,
    viewWeeksBack: 1,
    viewWeeksForward: 2,
  },
  todos: {
    0: {
      title: "Random musings",
    },
  },
};
