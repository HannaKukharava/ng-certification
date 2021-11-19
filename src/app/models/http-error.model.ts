export interface HttpError {
    status: number;
    body: {
        errors: ErrorMessage[];
    };
}

export interface ErrorMessage {
    status: string;
    code: string;
    detail: string;
}
