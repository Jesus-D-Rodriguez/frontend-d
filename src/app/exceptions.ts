import { AxiosError } from "axios";
import { AppError, BackendErrorType } from "app/types";

const ILEGILITY_ERROR_MESSAGE = "Error ilegible del servidor";

export class BackendError extends Error implements AppError {
  public message: string = "Error desconocido";
  public details: string[] = [];

  constructor(error: unknown) {
    super();

    if (error instanceof AxiosError) {
      this.handleAxiosError(error);
    } else {
      this.message = ILEGILITY_ERROR_MESSAGE;
    }

    Object.setPrototypeOf(this, BackendError.prototype);
  }

  private handleAxiosError(error: AxiosError<BackendErrorType>): void {
    const backendError = this.getBackendErrorType(error);
    if (backendError) {
      this.message = backendError.error;
      this.details = backendError.message;
    } else {
      this.handleOtherErrors(error);
    }
  }

  private handleOtherErrors(error: AxiosError<unknown>) {
    if (error.message === "Network Error") {
      this.message = "Error de conexión perdida";
      return;
    }

    switch (error.code) {
      case "ECONNABORTED":
        this.message = "Timeout de la conexión";
        break;
      case "ERR_BAD_REQUEST":
        this.message = "Error al establecer conexion con el servidor";
        break;
      case "ERR_BAD_RESPONSE":
        this.message = "Error interno del servidor";
        break;
    }
  }

  private getBackendErrorType(
    error: AxiosError<unknown | BackendErrorType>
  ): BackendErrorType | null {
    const errorData = error.response?.data;

    if (
      typeof errorData === "object" &&
      errorData !== null &&
      "message" in errorData &&
      "error" in errorData &&
      "statusCode" in errorData
    )
      return errorData as BackendErrorType;

    return null;
  }

  public getMessage(): string {
    return this.message;
  }

  public getDetails(): string[] {
    return this.details;
  }
}
