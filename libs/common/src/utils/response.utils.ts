import { Request, Response } from 'express';

export enum HttpResponseCode {
    OK = "200",
    CREATED = "201",
    NO_CONTENT = "204",
    BAD_REQUEST = "400",
    UNAUTHORIZED = "401",
    FORBIDDEN = "403",
    NOT_FOUND = "404",
    METHOD_NOT_ALLOWED = "405",
    CONFLICT = "409",
    INTERNAL_SERVER_ERROR = "500",
}

export enum HttpResponseMessage {
    OK = "Success. Request completed successfully.",
    CREATED = "Success. Resource created successfully.",
    NO_CONTENT = "Success. Request completed successfully, but no response body was returned.",
    BAD_REQUEST = "Error. Request could not be processed due to invalid syntax or invalid data.",
    UNAUTHORIZED = "Error. Authentication required to access the requested resource.",
    FORBIDDEN = "Error. Access to the requested resource is forbidden due to authorization or permission issues.",
    NOT_FOUND = "Error. Requested resource could not be found on the server.",
    METHOD_NOT_ALLOWED = "Error. Request method is not supported for the requested resource or endpoint.",
    CONFLICT = "Error. Request could not be completed due to a conflict with the current state of the resource or endpoint.",
    INTERNAL_SERVER_ERROR = "Error. An unexpected error occurred on the server. Please try again later.",
}
export const sendResponse = (data: any, message: HttpResponseMessage, success: boolean, code: HttpResponseCode) => {
    return { data, message, code, success }
    // const responseObj = {
    //     data,
    //     message,
    //     success,
    //     code
    // }

    // res.locals.response_body = {
    //     data,
    //     message,
    //     code,
    // };
    // // logger.info("logs created successfully.");

    // res.status(code).json(responseObj);
};
export const sendError = (data: any, message: HttpResponseMessage, code: HttpResponseCode) => {
    // logger.error("error response send successfully.");
    return { data, message, code }
}
// export function sendResponse(code: HttpResponseCode, message: HttpResponseMessage, data) {
//     return { code, message, data };
// }
// export function sendError(code: HttpResponseCode, message: HttpResponseMessage, error) {
//     return { code, message, error }
// }