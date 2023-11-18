export interface AppError {
  message: string;
  details: string[];
}

export interface BackendErrorType {
  message: string[];
  error: string;
  statusCode: number;
}

export interface PaginateData {
  total: number;
  page: number;
  perPage: number;
  pages: number;
}

export interface PaginatedResponse<T> {
  paginate: PaginateData;
  items: T[];
}

export type PaginateBody = {
  page?: number;
  size?: number;
};
