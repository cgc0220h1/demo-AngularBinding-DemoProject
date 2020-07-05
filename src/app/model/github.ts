export interface ISingleRepo {
  name: string;
}

export interface IRepos {
  items: Array<ISingleRepo>;
  total_count: number;
}
