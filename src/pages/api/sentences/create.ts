import type { APIRoute } from "astro";
import { createSentence } from "../../../api/sentences_api";

export const POST: APIRoute = async ({ request }) => {
    const data = await request.json();

    try {
        await createSentence(data); // You might need to validate this structure

        return new Response(
            JSON.stringify({ message: "Sentence created!" }),
            { status: 200 },
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ message: "Failed to create sentence" }),
            { status: 500 },
        );
    }
};