export type JSONValue =
    | string
    | Array<string>;

export interface JSONObject {
    [x: string]: JSONValue;
}