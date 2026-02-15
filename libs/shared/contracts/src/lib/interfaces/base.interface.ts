/** Базовые поля любой сущности из БД */
export interface BaseEntity {
  id: string; // или number/UserId
  createdAt: string; // ISO Date
  updatedAt: string;
}

/** Направления сортировки */
export type SortOrder = 'asc' | 'desc';

/** Параметры сортировки для запросов */
export interface SortParams<T> {
  field: keyof T;
  order: SortOrder;
}
