class CustomAPIError extends Error {
  statusCode: number;
  constructor(message: any, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}
export const createCustomError = (msg: any, statusCode: number) => {
  return new CustomAPIError(msg, statusCode);
};

export default CustomAPIError;
