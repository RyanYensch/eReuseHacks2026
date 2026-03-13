import { TextReponse } from "../../backend/src/types/sapling";

export type TextApiErrorResponse = {
    ok: false;
    error: string;
}

export type TextApiSuccessResponse = {
    ok: true;
    data: TextReponse
}

export type TextApiResponse = TextApiSuccessResponse | TextApiErrorResponse;