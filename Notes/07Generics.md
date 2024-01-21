### Generics in TypeScript

#### 1. What are Generics in TypeScript?

**Generics** in TypeScript are a powerful feature that allows you to write flexible and reusable functions and classes by providing a way to work with different data types. They enable you to create functions and classes that can work with any type, without specifying the exact type during the definition.

#### 2. Why do we need Generics?

- **Code Reusability:** Generics provide a way to write functions and classes that can work with multiple data types, promoting code reusability.

- **Type Safety:** They allow you to maintain type safety while working with different data types, preventing runtime errors by catching type-related issues at compile-time.

#### 3. Coding Example to Understand Syntax

```typescript
// Non-generic function that echoes a string
const stringEcho = (arg: string): string => arg;

// Generic function that echoes any type
const echo = <T>(arg: T): T => arg;

// Generic function to check if the argument is an object
const isObj = <T>(arg: T): boolean => {
    return typeof(arg) === 'object' && !Array.isArray(arg) && arg !== null;
};

// Examples
console.log(isObj(true)); // false
console.log(isObj('John')); // false
console.log(isObj([1, 2, 3])); // true
console.log(isObj({ name: 'yo', role: 34 })); // true
console.log(isObj({})); // true
console.log(isObj(null)); // false

// Function with key of assertions to check truthiness
function isTrue<T>(arg: T): { arg: T, is: boolean } {
    // Checking for falsy values in arrays or empty objects
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg as Record<string, unknown>).length) {
        return { arg, is: false };
    }
    // For truthy values
    return { arg, is: !!arg };
}

// Examples
console.log(isTrue(false)); // { arg: false, is: false }
console.log(isTrue(0)); // { arg: 0, is: false }
console.log(isTrue(true)); // { arg: true, is: true }
// ... (more examples)
```

Generics are incredibly useful for creating flexible and type-safe functions and classes, allowing developers to write versatile and reusable code in TypeScript.
-----
Write a function to check if an object has a property

```typescript
function hasProperty<T, K extends keyof T>(obj: T, key: K): boolean {
  return key in obj;
}
```

Here's what each part means:

1. **`keyof T`**: This is a TypeScript feature called an index type query. It extracts all the keys (property names) from the type `T`. For example, if `T` is `{ id: number; username: string }`, then `keyof T` is `"id" | "username"`.

2. **`K extends keyof T`**: Here, `K` is a generic type parameter. The `<K>` part indicates that `K` is a generic type. `extends keyof T` specifies that `K` must be one of the keys of `T` (or a subtype). This ensures that the `key` parameter passed to the function is a valid key for the provided object of type `T`.

In simpler terms, the function is saying, "I expect you to give me an object (`obj`) of some type `T`, and a key (`key`) that is a valid property of that object's type. The `K extends keyof T` is TypeScript's way of ensuring type safety and correctness when working with object properties dynamically."

So, when you see `K extends keyof T`, it means that the generic type `K` should be a key of the type `T`. This constraint helps TypeScript catch potential errors at compile time, providing better type safety.
----
Certainly! Here are concise and easy-to-understand notes for the provided topics:

### 1) Interface in Generics

In TypeScript, you can create a generic interface, allowing you to define a structure that can work with different types. This is useful when you want a flexible, reusable structure.

**Example:**
```typescript
interface BoolCheck<T> {
    value: T,
    is: boolean
}

function checkBool<T>(arg: T): BoolCheck<T> {
      // checking for falsy values in arrays
    if(Array.isArray(arg) && !arg.length){
        return {value:arg,is:false}
    } if(isObj(arg) && !Object.keys(arg as keyof T).length){
        return {value:arg,is:false}
    }
    // for those who are truthy in nature
    return {value:arg,is:!!arg}
}
```

### 2) Narrowing Interface with Generics

When working with generics, you can use the `extends` keyword to apply constraints. This ensures that the provided generic type satisfies certain conditions.

**Example:**
```typescript
interface HasId {
    id: number,
}

function processUser<T extends HasId>(user: T): T {
    // Logic to process the user with the constraint that it must have an 'id' property.
}
```

### 3) Multiple Type Variables & Extends with keyof

You can use multiple type variables in generics along with `extends keyof` to further specify constraints. This is handy when you want to work with properties that are keys of a certain type.

**Example:**
```typescript
function getUserProperty<T extends HasId, K extends keyof T>(users: T[], key: K): T[K][] {
    // Returns an array of property values corresponding to the specified key
}
```

In the `getUserProperty` function, `T` represents a type with an 'id' property, and `K` represents a key of that type. The function then returns an array of property values based on the specified key.

These approaches add flexibility and safety to your TypeScript code, ensuring that it works seamlessly with various types while maintaining type constraints.

### Class with Generics in TypeScript

#### 1. **Introduction to Generics:**
   - **Generics** in TypeScript provide a way to create components (functions, classes, interfaces) that can work with different data types while maintaining type safety.

#### 2. **Understanding the Class:**
   - The class `StateObject<T>` is a **generic class** where `T` is a type parameter.
   - `T` acts as a placeholder for the actual data type that the class will work with.

   ```typescript
   class StateObject<T>{
       private data: T;
       constructor(value: T) {
           this.data = value;
       }
       get state() {
           return this.data;
       }
       set state(value: T) {
           this.data = value;
       }
   }
   ```

#### 3. **Constructor and State Accessors:**
   - The class has a private property `data` of type `T`.
   - The constructor accepts an initial value of type `T` and assigns it to `data`.
   - The `get` accessor allows retrieving the current state (`data`), and the `set` accessor allows updating the state.

#### 4. **Example 1: Inferred Type**
   - `const store1 = new StateObject("yash")`: TypeScript **infers** that `store1` should have a value of type string.
   - `store1.state = "hello world"`: Successfully updates the state with a new string.
   - `store1.state = 12`: **Error** - TypeScript infers the value to be a string, and assigning a number throws an error.

   ```typescript
   const store1 = new StateObject("yash");
   console.log(store1.state); // Output: yash
   store1.state = "hello world";
   console.log(store1.state); // Output: hello world
   // Error: store1.state = 12; // TypeScript error
   ```

#### 5. **Example 2: Specifying Object Type**
   - `const store2 = new StateObject<(string | number | boolean)[]>([15])`: Specifies that `store2` should have an array of strings, numbers, or booleans.
   - `store2.state = ['yash', 56, true]`: Successfully updates the state with a new array.
   - `store2.state = { name: 'John' }`: **Error** - The specified object type is an array, and assigning an object throws an error.

   ```typescript
   const store2 = new StateObject<(string | number | boolean)[]>([15]);
   console.log(store2.state); // Output: [15]
   store2.state = ['yash', 56, true];
   console.log(store2.state); // Output: ['yash', 56, true]
   // Error: store2.state = { name: 'John' }; // TypeScript error
   ```

#### 6. **Key Takeaways:**
   - Generics provide flexibility by allowing a class to work with various data types.
   - TypeScript infers the data type based on the provided value during instantiation.
   - You can explicitly specify the type when creating an instance, ensuring type safety.

**Using generics in classes enables you to create reusable and type-safe components that can adapt to different data types. The inferred or explicitly specified type parameter enhances code clarity and ensures correctness.**