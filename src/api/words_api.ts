import type { Word } from "../types";

const API_BASE = import.meta.env.PUBLIC_API_BASE_URL;

// Helper function to extract error message from the response body
async function getErrorMessage(res: Response) {
    try {
        const data = await res.json();
        return data?.message || res.statusText || 'Unknown error';
    } catch {
        return res.statusText || 'Unknown error';
    }
}

export async function getWordTypes() {
    const res = await fetch(`${API_BASE}/words/types`);
    if (!res.ok) throw new Error(await getErrorMessage(res));
    return res.json();
}

export async function getAllWords() {
    const res = await fetch(`${API_BASE}/words/all`);
    if (!res.ok) throw new Error(await getErrorMessage(res));
    return res.json();
}

export async function getWord(id: number) {
    const res = await fetch(`${API_BASE}/words/${id}`);
    if (!res.ok) throw new Error(await getErrorMessage(res));
    return res.json();
}

export async function createWord(_term: string, _type: number) {
    const res = await fetch(`${API_BASE}/words`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ term: _term, type: _type }),
    });
    if (!res.ok) throw new Error(await getErrorMessage(res));
    return res.json();
}

export async function editWord(data: Word) {
    const res = await fetch(`${API_BASE}/words/${data.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(await getErrorMessage(res));
    return res.ok;
}

export async function deleteWord(id: number) {
    const res = await fetch(`${API_BASE}/words/${id}`, {
        method: 'DELETE',
    });
    if (!res.ok) throw new Error(await getErrorMessage(res));
    return res.ok;
}
