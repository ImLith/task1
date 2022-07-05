export type ISeededData = {
  key: string;
  id: number;
  name: string;
  phrase: string;
  employees: IEmployee[];
};

export type IEmployee = {
  key: string;
  id: number;
  name: string;
};
