/* eslint-disable */
import { CustomError, ErrorType } from './customError';

describe('customError', () => {
    test(`creates correct error when type is set to GetUserNoUserFound`, () => {
        expect.assertions(3);

        const customError = new CustomError(ErrorType.GetUserNoUserFound);
        const { code, message, httpStatusCode } = customError;

        expect(code).toBe(`400-01`);
        expect(message).toBe('User does not exist.');
        expect(httpStatusCode).toBe(400);
    });

    test(`creates correct error when type is set to InternalServerError`, () => {
        expect.assertions(3);

        const customError = new CustomError(ErrorType.InternalServerError);
        const { code, message, httpStatusCode } = customError;

        expect(code).toBe(`500-01`);
        expect(message).toBe('Internal Server Error.');
        expect(httpStatusCode).toBe(500);
    });

    test(`creates correct error when type is set to SendUserMiddleware`, () => {
        expect.assertions(3);

        const customError = new CustomError(ErrorType.SendUserMiddleware);
        const { code, message, httpStatusCode } = customError;

        expect(code).toBe(`500-02`);
        expect(message).toBe('Internal Server Error.');
        expect(httpStatusCode).toBe(500);
    });

    test(`creates correct error when type is set to RetrieveUserMiddleware`, () => {
        expect.assertions(3);

        const customError = new CustomError(ErrorType.RetrieveUserMiddleware);
        const { code, message, httpStatusCode } = customError;

        expect(code).toBe(`500-03`);
        expect(message).toBe('Internal Server Error.');
        expect(httpStatusCode).toBe(500);
    });

    test(`creates correct error when type is set to CreateUserFromRequestMiddleware`, () => {
        expect.assertions(3);

        const customError = new CustomError(ErrorType.CreateUserFromRequestMiddleware);
        const { code, message, httpStatusCode } = customError;

        expect(code).toBe(`500-04`);
        expect(message).toBe('Internal Server Error.');
        expect(httpStatusCode).toBe(500);
    });

    test(`creates correct error when type is set to SendFormattedUserMiddleware`, () => {
        expect.assertions(3);

        const customError = new CustomError(ErrorType.SendFormattedUserMiddleware);
        const { code, message, httpStatusCode } = customError;

        expect(code).toBe(`500-05`);
        expect(message).toBe('Internal Server Error.');
        expect(httpStatusCode).toBe(500);
    });
});
