# Arrays, Tuples, Objects and Enums
## Arrays in TS

### 1. **Array Declaration and Initialization:**

You can declare and initialize arrays in TypeScript using the following syntax:

```typescript
// Array of numbers
let numbers: number[] = [1, 2, 3, 4, 5];

// Array of strings
let fruits: string[] = ["apple", "banana", "orange"];

// Array of mixed types (not recommended for static typing)
let mixedArray: (number | string)[] = [1, "two", 3, "four"];
```

### 2. **Array Type Inference:**

TypeScript can often infer the type of the array based on the elements present during initialization. However, it's good practice to explicitly specify the array type for better code clarity.

```typescript
// Type inference for numbers array
let inferredNumbers = [1, 2, 3]; // TypeScript infers number[]

// Explicitly specifying type
let explicitNumbers: number[] = [1, 2, 3];
```

### 3. **Accessing Array Elements:**

Array elements are accessed using zero-based indices, just like in JavaScript.

```typescript
let fruits: string[] = ["apple", "banana", "orange"];
let firstFruit: string = fruits[0]; // "apple"
```

### 4. **Array Methods:**

Arrays in TypeScript come with various built-in methods for common operations like adding, removing, and transforming elements. These methods include `push`, `pop`, `shift`, `unshift`, `slice`, `splice`, `map`, `filter`, and more.

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];

numbers.push(6); // Adds 6 to the end
numbers.pop(); // Removes the last element
numbers.unshift(0); // Adds 0 to the beginning
numbers.shift(); // Removes the first element

let slicedArray = numbers.slice(1, 3); // Returns [2, 3]
```

### 5. **Array Destructuring:**

TypeScript supports array destructuring, allowing you to extract values from arrays into variables easily.

```typescript
let coordinates: [number, number] = [5, 10];
let [x, y] = coordinates;
console.log(x); // 5
console.log(y); // 10
```

### 6. **Array Type with Generics:**

You can use TypeScript generics to define arrays with a specific element type.

```typescript
let genericArray: Array<number> = [1, 2, 3];
```

### 7. **Readonly Arrays:**

You can make an array readonly using `readonly` keyword to prevent modifications after initialization.

```typescript
let readonlyArray: readonly number[] = [1, 2, 3];
```

### 8. **Array Methods with Function Signatures:**

TypeScript provides accurate function signatures for array methods when using arrow functions.

```typescript
const shopItems: { name: string; price: number }[] = [
  { name: "Laptop", price: 1500 },
  { name: "Mouse", price: 70 },
  { name: "Keyboard", price: 150 },
  { name: "mobile", price: 99 },
];

// TypeScript understands the signature of the callback function
shopItems.filter((item: { name: string; price: number }): void => {
  if (item.price < 100) {
    console.log("Item with less prices is/are ", item.name);
  }
});
```

### 9. **Array Spread and Rest:**

TypeScript supports the spread and rest syntax for arrays.

```typescript
let firstArray: number[] = [1, 2, 3];
let secondArray: number[] = [4, 5, 6];

let combinedArray = [...firstArray, ...secondArray]; // [1, 2, 3, 4, 5, 6]

function logNumbers(...numbers: number[]): void {
  console.log(numbers);
}

logNumbers([1, 2, 3, 4]); // Outputs: 1 , 2, 3,4
```

## Tuples in TS
A tuple in TypeScript is a fixed-size, ordered list of elements where each element may have a different type. Unlike arrays, the types of elements in a tuple are fixed and known at compile time.

### 1. **Tuple Declaration:**

To declare a tuple in TypeScript, you specify the types of each element within square brackets.

```typescript
// Tuple with two elements: number and string
let myTuple: [number, string] = [1, "hello"];
```

In this example, `myTuple` is declared as a tuple with the first element being a `number` and the second element being a `string`.

### 2. **Accessing Tuple Elements:**

Accessing elements in a tuple is similar to accessing elements in an array, using zero-based indices.

```typescript
let firstElement: number = myTuple[0]; // 1
let secondElement: string = myTuple[1]; // "hello"
```

### 3. **Tuple Type Inference:**

Like arrays, TypeScript can often infer the types of elements in a tuple based on the assigned values.

```typescript
let inferredTuple = [1, "world"]; // TypeScript infers the type as [number, string]
```

### 4. **Tuple Destructuring:**

Tuple destructuring allows you to assign individual elements of a tuple to variables in a concise manner.

```typescript
let myTuple: [number, string] = [1, "hello"];
let [a, b] = myTuple;
console.log(a); // 1
console.log(b); // "hello"
```

### 5. **Tuple with Optional Elements:**

You can mark elements in a tuple as optional by appending `?` to their type.

```typescript
let optionalTuple: [number, string?] = [1];
// valid: optionalTuple can have one or two elements
let optionalTup: [number,boolean,...string[]] =[12,false] //correct
```

### 6. **Tuple with Rest Elements:**

Using the rest (`...`) syntax, you can collect multiple elements of the same type into a tuple.

```typescript
let restTuple: [number, ...string[]] = [1, "a", "b", "c"];
// valid: restTuple can have at least one number followed by any number of strings
```

### 7. **Readonly Tuples:**

You can make a tuple readonly using `readonly` to prevent modifications after initialization.

```typescript
let readonlyTuple: readonly [number, string] = [1, "hello"];
// readonlyTuple[0] = 2; // Error: Index signature in type 'readonly [number, string]' only permits reading.
```

### 8. **Tuple Type with Generics:**

You can use TypeScript generics to define tuples with specific element types.

```typescript
let genericTuple: [number, string] = [1, "hello"];
```

### 9. **Tuple vs. Array:**

Tuples are similar to arrays but differ in their fixed size and ability to have different types for each element. Arrays are more flexible and allow for dynamic resizing.

```typescript
// Tuple
let tuple: [number, string] = [1, "hello"];

// Array
let array: (number | string)[] = [1, "hello", 2, "world"];
```

### Conclusion:

Tuples in TypeScript offer a way to define and work with fixed-size, ordered lists of elements with different types. They are particularly useful when you want to ensure a specific structure for your data and leverage TypeScript's static typing features for enhanced code safety and readability. Understanding tuples allows you to create more expressive and reliable TypeScript code.

In TypeScript, assigning an array to a tuple is allowed because an array is more flexible—it can have a dynamic size and allow elements of different types. However, assigning a tuple to an array is not allowed because a tuple has a fixed size and specific types for each position, and converting it to an array may violate these constraints.

So, in short:

- **Correct (Array to Tuple):**

  ```typescript
  // Tuple
  let tuple: [number, string] = [1, "hello", false]; // Allowed
  ```

- **Incorrect (Tuple to Array):**
  ```typescript
  // Array
  let array: (number | string)[] = tuple; // Not allowed
  ```

Attempting to assign the tuple to an array results in a TypeScript error, as the tuple's fixed size and specific types cannot be guaranteed in the array.

### Objects in TS -

```typescript
//self infered
const user = {
    name : 'yash',
    age : 21,
    email : 'y@g.com',
    hasSubscribed : false
}
//Defining object property type on place
const user:{
    id : number | string
    name : string,
    // ?: means optional
    age ?: number,
    email : string,
    hasSubscribed?: boolean,
    // method
    subscribe : () => string
} = {
    // order does not matter
    email : 'y@g.com',
    id : "p12",
    name : 'yash',
    // age : 21, no problem
    subscribe : function():string{
        return `${this.name}  subscribed`
    },
    hasSubscribed : false
}
// accessing properties and methods of object
console.log(user.email)
console.log(user.subscribe())
// type in TS

type User = {
    id : number | string,
    name : string,
    age? : number,
    email : string,
    hasSubscribed?:boolean,
    subscribe() : string,
   
}
const user1:User = {
    id : "u101" ,
    name : "John Doe" ,
    email : "johnDoe@gmail.com",
    age : 34,
    subscribe(){
        return `Hello ${ this.name } is Subscribed!`;
    },
    hasSubscribed:false,
    
}
console.log(user1.age)
console.log(user1.subscribe());
```

### type vs interface

- **Type:**
  - Used for defining aliases for existing types or creating new ones.
  - Supports unions, intersections, mapped types, and more.
  - Often preferred for complex types and utility types.

- **Interface:**
  - Used for defining shapes or structures of objects.
  - Supports extending other interfaces and declaration merging.
  - Often preferred for contracts, especially in object-oriented scenarios.

**When to Use:**

- **Use `type` when:**
  - You need to create complex or utility types.
  - You want to use unions, intersections, or mapped types.

- **Use `interface` when:**
  - You want to define the structure of objects.
  - You are working with classes or extending other interfaces.




### Narrowing
In TypeScript, narrowing refers to refining the type of a variable based on certain conditions or checks. It allows you to be more specific about the type of a variable within a certain code block. This can be particularly useful when dealing with union types, optional fields, or discriminated unions.

Let's use the example of a `User` interface with an optional field `active: boolean` to illustrate narrowing:

```typescript
interface User {
  id: number;
  username: string;
  email: string;
  active?: boolean; // Optional field
}
```

Now, let's discuss narrowing based on the optional field `active`:

### Example:

```typescript
function displayUserInfo(user: User) {
  console.log(`User ID: ${user.id}`);
  console.log(`Username: ${user.username}`);
  console.log(`Email: ${user.email}`);

  // Narrowing based on the existence of the 'active' field
  if (user.active !== undefined) {
    console.log(`Active: ${user.active ? 'Yes' : 'No'}`);
  } else {
    console.log(`Active status not available`);
  }
}

// Example usage
const activeUser: User = {
  id: 1,
  username: 'john_doe',
  email: 'john@example.com',
  active: true
};

const inactiveUser: User = {
  id: 2,
  username: 'jane_doe',
  email: 'jane@example.com'
};

displayUserInfo(activeUser);
displayUserInfo(inactiveUser);
```

In this example:

- The `displayUserInfo` function takes a `User` as a parameter and logs information about the user.
- Inside the function, we use narrowing to check whether the `active` field is present.
- If the `active` field is present, we log its value. If not, we inform that the active status is not available.

## Enums in TS

Enums in TypeScript provide a way to define a set of named constants, making it easier to work with fixed sets of values. Enums can improve code readability and maintainability by giving meaningful names to numeric or string values.

```typescript

enum HttpStatus {
    OK = 200,
    NotFound = 404,
    InternalServerError = 500,
  }
  
  // Function that simulates an HTTP request and returns a status code
  function simulateHttpRequest(): HttpStatus {
    // Simulate a random HTTP status code for the example
    const randomStatusCode = Math.random() > 0.5 ? HttpStatus.OK : HttpStatus.InternalServerError;
    return randomStatusCode;
  }
  
  // Main program
  const responseStatus: HttpStatus = simulateHttpRequest();
  
  // Check the HTTP status and provide a message
  switch (responseStatus) {
    case 200:
      console.log("Request was successful.");
      break;
    case HttpStatus.NotFound:
      console.log("Resource not found.");
      break;
    case 500:
      console.log("Internal server error occurred.");
      break;
    default:
      console.log("Unexpected HTTP status code.");
      break;
  }
  console.log(HttpStatus.NotFound) // 500
  console.log(HttpStatus.OK) //404
  
```
If we dont explicitly set the value for an enum operator ,TS will automatically assign a value for previous memeber plus one.
```typescript
enum Direction {
    Up,
    Down,
    Left,
    Right
}
```
Up=0, Down = 1, Left =2 ,Right =3 [By Default]