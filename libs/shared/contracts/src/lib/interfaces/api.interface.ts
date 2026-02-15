/** Успешный ответ сервера */
export interface ApiResponse<T> {
  success: true;
  data: T;
  message?: string;
  timestamp: string;
}

/** Ошибка сервера */
export interface ApiError {
  success: false;
  error: {
    code: string; // AUTH_001, VALIDATION_ERROR
    message: string; // User-friendly message
    details?: unknown; // Validation errors array, etc.
  };
  timestamp: string;
}
