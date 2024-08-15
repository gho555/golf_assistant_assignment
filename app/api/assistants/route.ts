import { openai } from "@/app/openai";

export const runtime = "nodejs";

// Create a new assistant
export async function POST() {
  const assistant = await openai.beta.assistants.create({
    instructions: "You are a bot for checking the availability of golf courses",
    name: "Golf availability bot",
    model: "gpt-4o",
    tools: [
      { type: "code_interpreter" },
      {
        type: "function",
        function: {
          name: "search_availability",
          description: "Check availability of golf courses",
          parameters: {
            type: "object",
            properties: {
              date: {
                type: "string",
                description: "The date in simple short format e.g. 2024/08/14",
              },
            },
            required: ["date"],
          },
        },
      },
      { type: "file_search" },
    ],
  });
  return Response.json({ assistantId: assistant.id });
}
