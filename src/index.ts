import chalk from "chalk";
import { explainError } from "./core/explain-error";

async function testExplainError() {
  try {
    throw new Error("This is a simulated error");
  } catch (error) {
    const explanation = await explainError(error as Error);
    console.log("Explanation:", explanation);
  }
}

testExplainError();