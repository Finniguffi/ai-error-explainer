import chalk from 'chalk';

export const explanationFormatter = (explanation: string, errorMessage: string) => {
  return `
${chalk.red.bold('🚫 Error:')} ${chalk.white(errorMessage)}
---------------------------------------------------------
${chalk.blue.bold('💡 Explanation:')}
---------------------------------------------------------
${chalk.yellow(explanation)}
---------------------------------------------------------
  `;
};