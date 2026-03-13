export type ImageRequest = {
    imageUrl: string;
}

export type SightengineImageResponse = {
    status: string;
    request: {
        id: string;
        timestamp: number;
        operations: number;
    }
    type: {
        ai_generated: number;
    }
    media: {
        id: string;
        uri: string;
    }
}

export type ImageApiSuccessResponse = {
    ok: true;
    data: SightengineImageResponse;
}

export type ImageApiErrorResponse = {
    ok: false;
    error: string;
}

export type ImageApiResponse = ImageApiSuccessResponse | ImageApiErrorResponse;