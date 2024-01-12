Certainly! Let's break down the code into different topics, and provide theory notes with code examples for each one:

### 1. **Type Aliases:**
   - **Theory:**
     - Type aliases allow you to create a name for any type. They are often used to simplify complex type definitions or to create reusable types.
   - **Code Example:**
     ```typescript
     type stringOrNumberArray = string | number[];
     ```

### 2. **Literal Types:**
   - **Theory:**
     - Literal types allow you to specify exact values that a variable can have.
   - **Code Example:**
     ```typescript
     let myName: 'Yash' | 'Om' | 'Ram';
     myName = 'Yash';
     ```

### 3. **Functions:**
   - **Theory:**
     - Functions in TypeScript can be typed to specify the types of parameters and the return type.
   - **Code Examples:**
     ```typescript
     const add = (a: number, b: number): number => {
         return a + b;
     }

     const logMsg = (message: any): void => {
         console.log(message);
     }

     let multiply: mathFunction = (a, b) => {
         return a * b;
     }

     let divide: MathFunction = (a, b) => {
         return a / b;
     }
     ```

### 4. **Type Aliases vs Interfaces for Functions:**
   - **Theory:**
     - Both type aliases and interfaces can be used to define function signatures. However, type aliases are often preferred for this purpose.
     - They also help us in following DRY(Do not repeat yourself principle)
   - **Code Example:**
     ```typescript
     type mathFunction = (a: number, b: number) => number;

     interface MathFunction {
         (a: number, b: number): number;
     }
     ```

### 5. **Optional and Default Parameters:**
   - **Theory:**
     - Parameters in functions can be marked as optional or given default values.
   - **Code Examples:**
     ```typescript
     function fullname(firstName: string, lastName?: string) {...}

     const addAll = (a: number = 10, b: number, c: number = 0): number => {...}
     ```

### 6. **Rest Parameters:**
   - **Theory:**
     - Rest parameters allow a function to accept an indefinite number of arguments as an array.
   - **Code Example:**
     ```typescript
     const total = (...nums: number[]): number => {...}
     ```

### 7. **Never Type:**
   - **Theory:**
     - The `never` type is used for functions that never return (e.g., throwing errors or infinite loops).
   - **Code Examples:**
     ```typescript
     const createError = (errMsg: string): never => {
         throw new Error(errMsg);
     }

     const infiniteLoop = (): never => {
         while (true) {...}
     }
     ```

### 8. **Custom Type Guard:**
   - **Theory:**
     - Custom type guards are functions that help narrow down the type of a variable.
   - **Code Example:**
     ```typescript
     const isNumber = (value: any): boolean => {
         return typeof value === "number" ? true : false;
     }
     ```

### 9. **Using Custom Type Guard:**
   - **Code Example:**
     ```typescript
     const numberOrString1 = (value: number | string): string => {
         if (typeof value === 'string') return 'string'
         if (isNumber(value)) return 'number'
         return createError("Something went wrong");
     }
     ```

### Conclusion:
The provided TypeScript code covers various topics, including type aliases, literal types, functions, optional and default parameters, rest parameters, the `never` type, and custom type guards. Each topic is accompanied by theory notes and practical code examples to illustrate their usage.