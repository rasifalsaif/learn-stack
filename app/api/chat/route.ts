import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: google('gemini-1.5-flash'), // Extremely fast & free
    system: "You are the Learn-Stack AI assistant, a highly knowledgeable and friendly mentor. Your goal is to help students succeed in their learning journey on the Learn-Stack platform. \n\n" +
            "Capabilities:\n" +
            "1. Answer technical questions about web development (React, Next.js, TypeScript, AI, etc.).\n" +
            "2. Explain LMS features like progress tracking, certificates, and course navigation.\n" +
            "3. Help troubleshoot common coding errors.\n" +
            "4. Provide guidance on project-based learning.\n\n" +
            "Tone: Encouraging, professional, and concise. Use Markdown for formatting code and important points. Always greet the user warmly if they say hi.",
    messages,
  });

  return result.toTextStreamResponse();
}