import { getAllWords } from "../../../api/words_api";

export async function GET() {
    const words = await getAllWords();
    return new Response(JSON.stringify(words), {
        headers: { 'Content-Type': 'application/json' }
    });
}