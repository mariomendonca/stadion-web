export interface ActivateAccountResponse {
  success: boolean
  message: string
}

export interface ActivateAccountError {
  message: string
  code?: string
}
