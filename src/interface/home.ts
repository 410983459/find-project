export interface CategoriesListApiParam {
  name: string;
}
export interface ICategoriesItem {
  CreatedAt?: string;
  Name: string;
  UpdatedAt?: string;
  _id: string;
}
export interface tagItem {
  CreatedAt?: string;
  Name: string;
  UpdatedAt?: string;
  _id: string;
}
export interface ArticleListParam {
  keyword?: string;
  page?: number;
  pageSize?: number;
  tags?: string;
  categories?: string;
  userId?: string;
  hotWay?: number;
}
export interface ArticleRes {
  pageCount: number;
  postList: any[];
}
