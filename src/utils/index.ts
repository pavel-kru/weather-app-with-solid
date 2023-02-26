export const clearQueryParams = <
  T extends Record<
    string,
    string | number | boolean | undefined | null | string[] | number[]
  >
>(
  payload: T
) =>
  Object.keys(payload).reduce((result, key: keyof T) => {
    if (payload[key] !== undefined) {
      result[key] = payload[key];
    }
    return result;
  }, {} as T);

export function objToUrlEncoded(obj: Record<string, any>): URLSearchParams {
  return new URLSearchParams(obj);
}
