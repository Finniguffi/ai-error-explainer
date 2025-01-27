import { getPrompt } from "../../commom/get-prompt";
import { AIResponse } from "../../commom/types/ai-type";
import { post } from "../base-service";

const MODEL = 'llama3';

export const getAiExplanation = async (error: string, env: string): Promise<string> => {
    const prompt = getPrompt(error, env);
    const response = await post({
        model: MODEL,
        prompt: prompt,
        stream: false
    }) as AIResponse;
    return response.response;
};