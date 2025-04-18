import type { SentenceWord } from "../types/sentence-word";

const API_BASE = import.meta.env.PUBLIC_API_BASE_URL;

async function getErrorMessage(res: Response) {
    try {
        const data = await res.json();
        return data?.message || res.statusText || 'Unknown error';
    } catch {
        return res.statusText || 'Unknown error';
    }
}

export async function getAllSentences() {
    const res = await fetch(`${API_BASE}/sentences/all`);
    if (!res.ok) throw new Error(await getErrorMessage(res));
    return res.json();
}

export async function createSentence(sentence: SentenceWord[]) {
    const res = await fetch(`${API_BASE}/sentences`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sentence),
    });
    if (!res.ok) throw new Error(await getErrorMessage(res));
    return res.json();
}

// export async function getSentence(id: number) {
//     const res = await fetch(`${API_BASE}/sentences/${id}`);
//     if (!res.ok) throw new Error(await getErrorMessage(res));
//     return res.json();
// }



// export async function editWord(data: Word) {
//     const res = await fetch(`${API_BASE}/sentences/${data.id}`, {
//         method: 'PATCH',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data),
//     });
//     if (!res.ok) throw new Error(await getErrorMessage(res));
//     return res.ok;
// }

// export async function deleteWord(id: number) {
//     const res = await fetch(`${API_BASE}/sentences/${id}`, {
//         method: 'DELETE',
//     });
//     if (!res.ok) throw new Error(await getErrorMessage(res));
//     return res.ok;
// }
