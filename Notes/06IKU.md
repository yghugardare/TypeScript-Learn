# Index signatures , keyof Assertions & the Record Utility Type in TS

### 1. **Index Signatures:**
   - **Theory:**
     - Index signatures in TypeScript allow creating objects without knowing the exact names of keys in advance.
     - Useful when accessing object properties dynamically using bracket notation.
     - Ensures type safety and prevents potential errors when working with dynamic properties.
   - **Code Example:**
     ```typescript
     interface TransactionObject {
       [index: string]: number;
     }

     const todaysTransaction: TransactionObject = {
       Pizza: -5,
       Books: 10,
       Job: 3,
     };
     let prop: string = "Pizza";
     console.log(todaysTransaction[prop]); // -5
     ```

### 2. **Problem Without Index Signature:**
   - **Problem:**
     - When trying to access properties dynamically without an index signature, TypeScript throws an error.
     - Using loops for dynamic property access also results in the same error.
   - **Code Example:**
     ```typescript
     interface TransactionObject {
       Pizza: number;
       Books: number;
       Job: number;
     }

     const todaysTransaction: TransactionObject = {
       Pizza: -5,
       Books: 10,
       Job: 3,
     };
     let prop: string = "Pizza";
     console.log(todaysTransaction[prop]); // Error: No index signature...
     ```

### 3. **Index Signature Solution:**
   - **Solution:**
     - Index signature `[index: string]: number;` allows dynamic access to properties.
     - Resolves issues with dynamic property access without explicit key names.
   - **Code Example:**
     ```typescript
     interface TransactionObject {
       [index: string]: number;
     }

     const todaysTransaction: TransactionObject = {
       Pizza: -5,
       Books: 10,
       Job: 3,
     };
     let prop: string = "Pizza";
     console.log(todaysTransaction[prop]); // -5
     ```

### 4. **Readonly Modifier for Index Signature:**
   - **Theory:**
     - The `readonly` modifier can be applied to index signatures to prevent modification of properties after initialization.
   - **Code Example:**
     ```typescript
     interface TransactionObject1 {
       readonly [index: string]: number;
     }

     const todaysTransaction1: TransactionObject1 = {
       Pizza: -5,
       Books: 10,
       Job: 3,
     };
     // todaysTransaction1.Pizza = 40; // Error - Index signature only permits reading.
     ```

### 5. **TS Problem with Non-Existing Properties:**
   - **Problem:**
     - TypeScript does not throw an error when accessing non-existing properties using bracket notation.
     - Relying on undefined properties without proper checks can lead to runtime errors.
   - **Code Example:**
     ```typescript
     console.log(todaysTransaction["anything"]); // undefined (no error in TypeScript)
     ```

### 6. **Required and Optional Properties with Index Signature:**
   - **Theory:**
     - Index signatures can have required and optional properties combined.
     - Use `undefined` for optional properties to provide flexibility.
   - **Code Example:**
     ```typescript
     interface Student {
       [index: string]: string | number | undefined;
       name: string;
       age?: number;
       gpa: number;
     }

     const stud1: Student = {
       name: "yash",
       gpa: 8.8,
       age: 22,
       dob: "december",
       id: 52,
     };
     console.log(stud1.name, stud1.id); // yash 52
     for (const key in stud1) {
       console.log(`${key}: ${stud1[key]}`);
     }
     ```
-------------------
### 1. **`keyof` Assertions in TypeScript:**
   - **Explanation:**
     - `keyof` is an operator in TypeScript that, when used with an object type, produces a union type representing the keys of that object.
     - It's often used in conjunction with type assertions to correctly infer and access specific keys when working with objects dynamically.

   - **Example:**
     ```typescript
     interface Student {
       name: string;
       age: number;
       grade: string;
     }

     type StudentKeys = keyof Student;
     // Result: "name" | "age" | "grade"
     ```

### 2. **Why We Need `keyof` Assertions in TypeScript:**
   - **Need:**
     - When working with objects dynamically, TypeScript needs a way to infer the type of object properties.
     - Without `keyof`, iterating over object properties or accessing them dynamically may result in errors, and TypeScript might treat the keys as having the 'any' type.
     - `keyof` allows for precise type information and helps avoid potential runtime errors when working with object properties.

   - **Example Without `keyof`:**
     ```typescript
     interface Teacher {
       id: number;
       name: string;
       subject: string;
     }

     const teach1: Teacher = { id: 43, name: "John Doe", subject: "Math" };

     // Without keyof, TypeScript struggles to infer the type
     for (let key in teach1) {
       // Error: Element implicitly has an 'any' type...
       console.log(`Key: ${key}, Value: ${teach1[key]}`);
     }
     ```

   - **Example Using `keyof`:**
     ```typescript
     interface Teacher {
       id: number;
       name: string;
       subject: string;
     }

     const teach1: Teacher = { id: 43, name: "John Doe", subject: "Math" };

     // Using keyof provides type information
     for (let key in teach1) {
       console.log(`Key: ${key}, Value: ${teach1[key as keyof Teacher]}`);
     }
     ```
  
   - **Explanation:**
     - `keyof` ensures that TypeScript correctly infers the type of object keys.
     - It helps prevent potential errors and provides type safety when accessing object properties dynamically.
     - `keyof` is particularly useful in scenarios where the exact names of object keys are not known in advance but need to be handled dynamically.

### 3. **Various Ways of Typeof Assertion:**
   - **Code Examples:**
     ```typescript
     // Using keyof with type of
     for (let key in teach1) {
       console.log(`Key: ${key}, Value: ${teach1[key as keyof Teacher]}`);
     }

     // Another way of using keyof with type of
     Object.keys(teach1).map((key) => {
       console.log(teach1[key as keyof typeof teach1]);
     });

     // Another way of using keyof with a function
     function logTeacherKey(teacher: Teacher, key: keyof Teacher): void {
       console.log(`${key}: ${teacher[key]}`);
     }
     logTeacherKey(teach1, "subject");
     ```
------------------
### 1. **Utility Types in TypeScript:**
   - **Explanation:**
     - Utility types in TypeScript are predefined generic types that provide common and useful transformations on existing types.
     - They help to compose new types by modifying or extracting properties from existing ones, saving developers from repetitive manual type definitions.

### 2. **Why Do We Need Utility Types:**
   - **Need:**
     - Enhance code readability and maintainability by simplifying complex type definitions.
     - Avoid redundant and error-prone manual type declarations, promoting consistency.
     - Facilitate the creation of reusable and generic types, improving code scalability.

### 3. **Record Utility (`Record<Keys, Value>`):**
   - **Explanation:**
     - `Record` is a utility type in TypeScript used to create an object type with keys of a specified type and values of another specified type.
     - It provides a concise way to define object structures with specific keys and their corresponding value types.

   - **Example:**
     ```typescript
     type Streams = 'salary' | 'bonus' | 'sideHustle';
     type Incomes = Record<Streams, number>;

     const income: Incomes = {
       salary: 5000,
       bonus: 300,
       sideHustle: 200,
     };

     for (let revenue in income) {
       console.log(`Revenue from ${revenue}: $${income[revenue keyof Incomes]}`);
     }
     ```

### Difference 1: Utility Types vs Interface for Specific Keys

#### Utility Type (Record):
```typescript
type Streams = 'salary' | 'bonus' | 'sideHustle';
type Incomes = Record<Streams, number>;
```

#### Interface:
```typescript
interface Income {
  [key: 'salary' | 'bonus']: number;
}
```

#### Explanation:
- **Utility Type (Record):**
  - The `Record` utility type is used to create an object type with specific keys and their corresponding value types.
  - It allows defining the relationship between keys and values in a more concise manner.

- **Interface:**
  - In TypeScript interfaces, defining specific keys directly within square brackets (`[key: 'salary' | 'bonus']`) results in an error.
  - Interfaces don't allow specifying literal values as keys directly.

#### Conclusion:
- **Difference:**
  - The utility type `Record` provides a cleaner and more expressive way to define object types with specific keys, whereas interfaces have limitations in directly specifying literal keys.

### Difference 2: Restricting Keys to Specific Types

#### Utility Type (Record):
```typescript
type Streams = 'salary' | 'bonus' | 'sideHustle';
type Incomes = Record<Streams, number>;
```

#### Index Signature in Interface:
```typescript
interface Income {
  [key: string]: number;
}
```

#### Explanation:
- **Utility Type (Record):**
  - The `Record` utility type is specific in terms of keys and their corresponding types. In this case, it restricts keys to only those defined in the `Streams` type.

- **Index Signature in Interface:**
  - Index signatures in interfaces (`[key: string]: number`) allow keys of any string type, providing flexibility but sacrificing specificity.

#### Conclusion:
- **Difference:**
  - The utility type `Record` restricts keys to a predefined set (union type), ensuring type safety and specificity.
  - Index signatures in interfaces allow more flexibility but may lead to less strict type checking, as they accept any string key.

### Overall:
- The choice between utility types and interfaces depends on the specific use case and the level of flexibility or specificity required in defining object types.

Certainly! Let's go through each utility type with examples:

### 1. `Partial<Type>`

- **Definition:** Creates a type with all properties of the provided type set as optional.

```typescript
interface User {
  name: string;
  age: number;
}

type PartialUser = Partial<User>;
```

### 2. `Required<Type>`

- **Definition:** Creates a type with all properties of the provided type set as required.

```typescript
interface Book {
  title?: string;
  author?: string;
}

type RequiredBook = Required<Book>;
```

### 3. `Readonly<Type>`

- **Definition:** Creates a type with all properties of the provided type set as read-only.

```typescript
interface Config {
  apiKey: string;
  endpoint: string;
}

type ReadonlyConfig = Readonly<Config>;
```

### 4. `Pick<Type, Keys>`

- **Definition:** Creates a type by picking only specified properties from the provided type.

```typescript
interface Car {
  make: string;
  model: string;
  year: number;
}

type CarInfo = Pick<Car, 'make' | 'model'>;
```

### 5. `Omit<Type, Keys>`

- **Definition:** Creates a type by omitting specified properties from the provided type.

```typescript
interface Person {
  name: string;
  age: number;
  country: string;
}

type PersonWithoutCountry = Omit<Person, 'country'>;
```

### 6. `Exclude<Type, ExcludedUnion>`

- **Definition:** Exclude from `Type` those types that are assignable to `ExcludedUnion`.

```typescript
type Numbers = 1 | 2 | 3 | 4 | 5;
type EvenNumbers = Exclude<Numbers, 1 | 3 | 5>; // 2 | 4
```

### 7. `Extract<Type, Union>`

- **Definition:** Extract from `Type` those types that are assignable to `Union`.

```typescript
type Numbers = 1 | 2 | 3 | 4 | 5;
type OddNumbers = Extract<Numbers, 1 | 3 | 5>; // 1 | 3 | 5
```

### 8. `NonNullable<Type>`

- **Definition:** Creates a type by removing `null` and `undefined` from the provided type.

```typescript
type NullableString = string | null | undefined;
type NonNullableString = NonNullable<NullableString>; // string
```

### 9. `Parameters<Type>`

- **Definition:** Extracts the parameters from the type of a function.

```typescript
type FuncParams = Parameters<(x: number, y: string) => void>; // [number, string]
```

### 10. `ConstructorParameters<Type>`

- **Definition:** Extracts the parameters from the constructor function type.

```typescript
class Example {
  constructor(a: number, b: string) {}
}

type ExampleConstructorParams = ConstructorParameters<typeof Example>; // [number, string]
```

### 11. `ReturnType<Type>`

- **Definition:** Extracts the return type from the type of a function.

```typescript
type FuncReturn = ReturnType<(x: number, y: string) => boolean>; // boolean
```

### 12. `InstanceType<Type>`

- **Definition:** Extracts the instance type from the type of a constructor function.

```typescript
class ExampleClass {
  constructor(name: string) {}
}

type ExampleInstance = InstanceType<typeof ExampleClass>; // ExampleClass
```

These utility types enhance the flexibility and expressiveness of TypeScript, allowing for more concise and precise type definitions.


