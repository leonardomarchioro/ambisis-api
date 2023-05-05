type MessageType = {
  [chave: string]: string;  
} | string;

class AppError {
    statusCode: number;
    message: MessageType;
  
    constructor(statusCode: number, message: MessageType) {
      this.statusCode = statusCode;
      this.message = message;
    }
  }
  
  export default AppError;
  