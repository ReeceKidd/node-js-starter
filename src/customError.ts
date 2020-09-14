/* eslint-disable */
import { ResponseCodes } from './Server/responseCodes';

export enum ErrorType {
    InternalServerError,
    SendUserMiddleware,
    RetrieveUserMiddleware,
    GetUserNoUserFound,
    CreateUserFromRequestMiddleware,
    SendFormattedUserMiddleware,
}

const internalServerMessage = 'Internal Server Error.';

export class CustomError extends Error {
    public code: string;
    public message: string;
    public httpStatusCode: ResponseCodes;

    constructor(type: ErrorType, err?: Error) {
        super();
        const { code, message, httpStatusCode } = this.createCustomErrorData(type);
        this.code = code;
        this.message = message;
        this.httpStatusCode = httpStatusCode;
    }

    private createCustomErrorData(type: ErrorType): { code: string; message: string; httpStatusCode: ResponseCodes } {
        switch (type) {
            case ErrorType.GetUserNoUserFound:
                return {
                    code: `${ResponseCodes.badRequest}-01`,
                    message: 'User does not exist.',
                    httpStatusCode: ResponseCodes.badRequest,
                };

            case ErrorType.SendUserMiddleware:
                return {
                    code: `${ResponseCodes.warning}-02`,
                    message: internalServerMessage,
                    httpStatusCode: ResponseCodes.warning,
                };

            case ErrorType.RetrieveUserMiddleware:
                return {
                    code: `${ResponseCodes.warning}-03`,
                    message: internalServerMessage,
                    httpStatusCode: ResponseCodes.warning,
                };

            case ErrorType.CreateUserFromRequestMiddleware:
                return {
                    code: `${ResponseCodes.warning}-04`,
                    message: internalServerMessage,
                    httpStatusCode: ResponseCodes.warning,
                };

            case ErrorType.SendFormattedUserMiddleware:
                return {
                    code: `${ResponseCodes.warning}-05`,
                    message: internalServerMessage,
                    httpStatusCode: ResponseCodes.warning,
                };

            default:
                return {
                    code: `${ResponseCodes.warning}-01`,
                    message: internalServerMessage,
                    httpStatusCode: ResponseCodes.warning,
                };
        }
    }
}
