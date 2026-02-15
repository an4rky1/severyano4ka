/** Входящие параметры пагинации (Query Params) */
export interface PaginationParams {
  page?: number;
  limit?: number;
  sort?: string;
  search?: string;
}

/** Мета-данные ответа пагинации */
export interface PaginationMeta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

/** Обертка для пагинированного списка */
export interface PaginatedResponse<T> {
  success: true;
  data: T[];
  meta: PaginationMeta;
}
