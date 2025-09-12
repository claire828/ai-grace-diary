import type { Observable } from 'rxjs'
import { map } from 'rxjs'
import type { AjaxResponse } from 'rxjs/ajax'
import { ajax } from 'rxjs/ajax'

const DEFAULT_JSON_HEADERS = { 'Content-Type': 'application/json' } as const
let authToken: string | null = null

function buildHeaders(overrides?: Record<string, string>) {
  const base: Record<string, string> = { ...DEFAULT_JSON_HEADERS, ...(overrides || {}) }
  if (authToken) base.Authorization = `Bearer ${authToken}`
  return base
}

export function setAuthToken(token: string | null) {
  authToken = token
}

export function getJSON<T>(url: string): Observable<T> {
  // ajax.getJSON does not accept custom headers; if we have a token or need headers,
  // use ajax() and map the response to the typed body.
  if (authToken) {
    return ajax({ url, method: 'GET', headers: buildHeaders() }).pipe(
      map((r: AjaxResponse<unknown>) => r.response as T),
    )
  }
  return ajax.getJSON<T>(url)
}

export function postJSON<T = unknown>(
  url: string,
  body?: unknown,
  headers?: Record<string, string>,
) {
  const cfg = {
    url,
    method: 'POST',
    body,
    headers: buildHeaders(headers),
  }
  return ajax<T>(cfg)
}

export function del<T = unknown>(url: string, headers?: Record<string, string>) {
  const cfg = {
    url,
    method: 'DELETE',
    headers: buildHeaders(headers),
  }
  return ajax<T>(cfg)
}

export function createResource<T>(baseUrl: string) {
  return {
    get: (): Observable<T[]> => getJSON<{ data: T[] }>(baseUrl).pipe(map((r) => r.data)),

    post: (body: unknown) => postJSON<AjaxResponse<unknown>>(baseUrl, body),

    delete: (id: number) => del<AjaxResponse<unknown>>(`${baseUrl}/${id}`),
  }
}
