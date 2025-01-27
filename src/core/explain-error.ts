import { getAiExplanation } from "../api/services/ai-service";
import { explanationFormatter } from "../commom/explation-formatter";
import { FRONT_END, BACK_END, RESPONSE_NOT_FOUND } from "../utils/constants";

export async function explainError(error: Error) {
  const isFrontEnd = typeof window !== 'undefined';
  let env = isFrontEnd ? FRONT_END : BACK_END;
  try {
    const explanation = await getAiExplanation(error.message, env);
    return explanationFormatter(explanation, error.message);
  } catch (err) {
    return RESPONSE_NOT_FOUND;
  }
}
