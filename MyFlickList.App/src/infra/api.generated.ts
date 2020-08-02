/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.6.2.0 (NJsonSchema v10.1.23.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

export class CatalogClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : <any>window;
        this.baseUrl = baseUrl ? baseUrl : "http://localhost:5000";
    }

    getImage(imageId: string): Promise<void> {
        let url_ = this.baseUrl + "/catalog/images/{imageId}";
        if (imageId === undefined || imageId === null)
            throw new Error("The parameter 'imageId' must be defined.");
        url_ = url_.replace("{imageId}", encodeURIComponent("" + imageId));
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetImage(_response);
        });
    }

    protected processGetImage(response: Response): Promise<void> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            return;
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            let result404: any = null;
            let resultData404 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result404 = ProblemDetails.fromJS(resultData404);
            return throwException("A server side error occurred.", status, _responseText, _headers, result404);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<void>(<any>null);
    }

    getTopFlicks(offset?: number | undefined, count?: number | undefined): Promise<FlickResponse[]> {
        let url_ = this.baseUrl + "/catalog/flicks/top?";
        if (offset === null)
            throw new Error("The parameter 'offset' cannot be null.");
        else if (offset !== undefined)
            url_ += "offset=" + encodeURIComponent("" + offset) + "&";
        if (count === null)
            throw new Error("The parameter 'count' cannot be null.");
        else if (count !== undefined)
            url_ += "count=" + encodeURIComponent("" + count) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetTopFlicks(_response);
        });
    }

    protected processGetTopFlicks(response: Response): Promise<FlickResponse[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(FlickResponse.fromJS(item));
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<FlickResponse[]>(<any>null);
    }

    getTrendingFlicks(offset?: number | undefined, count?: number | undefined): Promise<FlickResponse[]> {
        let url_ = this.baseUrl + "/catalog/flicks/trending?";
        if (offset === null)
            throw new Error("The parameter 'offset' cannot be null.");
        else if (offset !== undefined)
            url_ += "offset=" + encodeURIComponent("" + offset) + "&";
        if (count === null)
            throw new Error("The parameter 'count' cannot be null.");
        else if (count !== undefined)
            url_ += "count=" + encodeURIComponent("" + count) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetTrendingFlicks(_response);
        });
    }

    protected processGetTrendingFlicks(response: Response): Promise<FlickResponse[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(FlickResponse.fromJS(item));
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<FlickResponse[]>(<any>null);
    }

    getNewFlicks(offset?: number | undefined, count?: number | undefined): Promise<FlickResponse[]> {
        let url_ = this.baseUrl + "/catalog/flicks/new?";
        if (offset === null)
            throw new Error("The parameter 'offset' cannot be null.");
        else if (offset !== undefined)
            url_ += "offset=" + encodeURIComponent("" + offset) + "&";
        if (count === null)
            throw new Error("The parameter 'count' cannot be null.");
        else if (count !== undefined)
            url_ += "count=" + encodeURIComponent("" + count) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetNewFlicks(_response);
        });
    }

    protected processGetNewFlicks(response: Response): Promise<FlickResponse[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(FlickResponse.fromJS(item));
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<FlickResponse[]>(<any>null);
    }
}

export class ProblemDetails {
    type?: string | undefined;
    title?: string | undefined;
    status?: number | undefined;
    detail?: string | undefined;
    instance?: string | undefined;
    extensions?: { [key: string]: any; } | undefined;

    init(_data?: any) {
        if (_data) {
            this.type = _data["type"];
            this.title = _data["title"];
            this.status = _data["status"];
            this.detail = _data["detail"];
            this.instance = _data["instance"];
            if (_data["extensions"]) {
                this.extensions = {} as any;
                for (let key in _data["extensions"]) {
                    if (_data["extensions"].hasOwnProperty(key))
                        this.extensions![key] = _data["extensions"][key];
                }
            }
        }
    }

    static fromJS(data: any): ProblemDetails {
        data = typeof data === 'object' ? data : {};
        let result = new ProblemDetails();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["type"] = this.type;
        data["title"] = this.title;
        data["status"] = this.status;
        data["detail"] = this.detail;
        data["instance"] = this.instance;
        if (this.extensions) {
            data["extensions"] = {};
            for (let key in this.extensions) {
                if (this.extensions.hasOwnProperty(key))
                    data["extensions"][key] = this.extensions[key];
            }
        }
        return data; 
    }
}

export class FlickResponse {
    id?: string;
    kind?: FlickKind;
    title?: string;
    premiereDate?: Date | undefined;
    runtime?: string | undefined;
    episodeCount?: number | undefined;
    synopsis?: string | undefined;
    imageId?: string | undefined;

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.kind = _data["kind"];
            this.title = _data["title"];
            this.premiereDate = _data["premiereDate"] ? new Date(_data["premiereDate"].toString()) : <any>undefined;
            this.runtime = _data["runtime"];
            this.episodeCount = _data["episodeCount"];
            this.synopsis = _data["synopsis"];
            this.imageId = _data["imageId"];
        }
    }

    static fromJS(data: any): FlickResponse {
        data = typeof data === 'object' ? data : {};
        let result = new FlickResponse();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["kind"] = this.kind;
        data["title"] = this.title;
        data["premiereDate"] = this.premiereDate ? this.premiereDate.toISOString() : <any>undefined;
        data["runtime"] = this.runtime;
        data["episodeCount"] = this.episodeCount;
        data["synopsis"] = this.synopsis;
        data["imageId"] = this.imageId;
        return data; 
    }
}

export enum FlickKind {
    Movie = "Movie",
    Series = "Series",
}

export class ApiException extends Error {
    message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new ApiException(message, status, response, headers, null);
}