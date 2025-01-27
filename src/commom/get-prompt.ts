export const getPrompt = (error: string, env: string) => {
    return `
  \x1B[34m\x1B[1mError in the ${env} environment: ${error}.\x1B[22m\x1B[39m
  
  ---------------------------------------------------------
  This error occurred in the context of JavaScript/TypeScript code. Please provide a detailed explanation of what caused this error, considering the following aspects:
  ---------------------------------------------------------
  
  1. **What might have led to this error in the code?**
  2. **What are the possible root causes?**
     - Issues with data types
     - Invalid references
     - Lack of null checks
     - Syntax errors
     - Compatibility issues between JavaScript and TypeScript
  3. **What logic is behind this error, and how does it affect the flow of the application?**
  4. **If the error is caused by a type-related issue, explain the relationship between the expected and provided types.**
  
  ---------------------------------------------------------
  Additionally, please provide a clear solution to fix the error:
  ---------------------------------------------------------
  
  1. **What should be changed in the code to resolve the error?**
  2. **What best practices can be applied to prevent this error from happening again?**
     - Using more specific types in TypeScript
     - Input validation
     - Error handling
  3. **If possible, provide a corrected or suggested code example that avoids the mentioned error.**
  
  ---------------------------------------------------------
  \x1B[34m\x1B[1mPlease ensure to follow JavaScript and TypeScript development techniques and practices to fix and prevent this error.\x1B[22m\x1B[39m
    `;
  };