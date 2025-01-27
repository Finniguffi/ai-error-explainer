import axios from "axios";
import { API_URL } from "../utils/constants";

type RequestBody = {
    model: string;
    prompt: string;
    stream: boolean;
};

export async function post(body: RequestBody) {
    try {
      const response = await axios.post(
        API_URL,
        body,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error('Erro ao fazer requisição para a IA: ' + error.message);
      } else {
        throw new Error('Erro ao fazer requisição para a IA: ' + String(error));
      }
    }
}
  