// ...existing code...
const API_BASE = "http://localhost:5000";

async function request(path: string, options: RequestInit = {}) {
    const url = `${API_BASE}${path.startsWith("/") ? path : `/${path}`}`;
    const token = localStorage.getItem("token");
    const headers: Record<string, string> = {
        "Accept": "application/json",
        ...((options.headers as Record<string,string>) || {}),
    };
    if (!(options.body instanceof FormData)) {
        headers["Content-Type"] = headers["Content-Type"] || "application/json";
    }
    if (token) headers["Authorization"] = `Bearer ${token}`;

    const res = await fetch(url, { ...options, headers });
    const text = await res.text();
    const data = text ? JSON.parse(text) : null;
    if (!res.ok) throw { status: res.status, data };
    return data;
}

export const api = {
    get: (path: string) => request(path, { method: "GET" }),
    post: (path: string, body?: any) =>
        request(path, { method: "POST", body: body instanceof FormData ? body : JSON.stringify(body) }),
    put: (path: string, body?: any) =>
        request(path, { method: "PUT", body: body instanceof FormData ? body : JSON.stringify(body) }),
    del: (path: string) => request(path, { method: "DELETE" }),
    setToken: (t: string | null) => {
        if (t) localStorage.setItem("token", t);
        else localStorage.removeItem("token");
    },
};

export default api;
// ...existing code...