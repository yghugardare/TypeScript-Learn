### Utility Types in JavaScript

#### 1. **Introduction to Utility Types:**
   - **Utility types** in JavaScript are predefined generic types provided by TypeScript that operate on other types, helping to manipulate and transform them.

#### 2. **Partial Utility Type:**
   - The `Partial<Type>` utility type allows making all properties of a type optional by creating a new type with the same properties as the original type, but each property marked as optional using `?`.

   ```typescript
   interface Assignment {
       studentId: string;
       title: string;
       grade: number;
       verified?: boolean;
   }

   const updateAssignment = (
       assignment: Assignment,
       propsToUpdate: Partial<Assignment>
   ) => {
       return { ...assignment, ...propsToUpdate };
   };

   const assign1: Assignment = {
       studentId: "12",
       title: "Math Homework",
       grade: 95,
   };

   console.log(assign1);
   console.log(updateAssignment(assign1, { verified: false, grade: 70 }));
   ```

#### 3. **Required and Readonly Utility Types:**
   - The `Required<Type>` utility type ensures that all properties of a type are marked as required, removing any optional modifiers (`?`).
   - The `Readonly<Type>` utility type makes all properties of a type read-only, preventing them from being modified after assignment.

   ```typescript
   function sendAssignmentToDb(assignment: Required<Assignment>): Assignment {
       // send to db operation
       return assignment;
   }

   // Error - Argument of type 'Assignment' is not assignable to parameter of type 'Required<Assignment>'.
   // Types of property 'verified' are incompatible.
   // console.log(sendAssignmentToDb(assign1));

   console.log(sendAssignmentToDb({ ...assign1, verified: true }));

   const assign2: Readonly<Assignment> = {
       studentId: "p01",
       grade: 56,
       verified: false,
       title: "Generics in TS",
   };

   // Error - Cannot assign to 'grade' because it is a read-only property.
   // assign2.grade = 12;
   ```
### Record Utility Type in TypeScript

#### 4. **Record Utility Type:**
   - The `Record<Keys, Type>` utility type in TypeScript is used to represent an object type with specified keys of a certain type, where each key is associated with a value of a specific type.

#### 5. **Understanding Record with Examples:**
   - **Example 1: Basic Record**
      - The `hexColorMap` is a basic record where keys (color names) are of type `string`, and values (hex color codes) are also of type `string`.
      - This ensures that each color name is associated with a corresponding hex color code.

      ```typescript
      const hexColorMap: Record<string, string> = {
          red: "FFOOE",
          green: "#0F0",
          blue: "00f",
      };
      ```

   - **Example 2: Record with Mapped Types**
      - The `courseDetails` is a record mapping `StudentDomains` to `availableCourse`.
      - It ensures that each domain (`dsa`, `dev`, etc.) is associated with a valid available course (`python`, `js`, etc.).
      - Using the `Record` utility enforces type safety in the mapping.

      ```typescript
      type availableCourse = "python" | "js" | "cpp";
      type StudentDomains = "dev" | "dsa" | "ds";
      const courseDetails: Record<StudentDomains, availableCourse> = {
          dsa: "cpp",
          dev: "js",
          // Error: Type '"r"' is not assignable to type 'availableCourse'.
          ds: "python",
      };
      ```

   - **Example 3: Making Record Optional (Partial Type)**
      - The `courseDetails1` uses `Partial<Record<Keys, Type>>` to make the record optional.
      - This is useful when not all keys need to be present, and it relaxes the requirement for a complete record.

      ```typescript
      const courseDetails1: Partial<Record<StudentDomains, availableCourse>> = {
          dev: "js",
          // Error: Type '"r"' is not assignable to type 'availableCourse'.
          ds: "cpp",
      };
      ```

   - **Example 4: Record with Interface**
      - `myDept` is a record using the `Record` utility for the `Departments` keys, each associated with `DepartmentInfo`.
      - It ensures that each department has specific attributes defined by the `DepartmentInfo` interface.

      ```typescript
      type Departments = "dsa" | "dev" | "Ds";
      interface DepartmentInfo {
          availableSeats: number;
          departmentHead: string;
          deptFee: number;
          isAvailable: boolean;
      }
      const myDept: Record<Departments, DepartmentInfo> = {
          Ds: {
              availableSeats: 60,
              departmentHead: "lol",
              deptFee: 6555,
              isAvailable: false,
          },
          dev: {
              availableSeats: 46,
              departmentHead: "mlio",
              deptFee: 67554,
              isAvailable: false,
          },
          dsa: {
              availableSeats: 2,
              departmentHead: "utt",
              deptFee: 868,
              isAvailable: true,
          },
      };
      ```

#### 6. **Key Takeaways:**
   - **Record Type:**
      - Represents an object with specific keys and their associated types.
      - Ensures type safety and structure when working with complex mappings.

   - **Partial Type:**
      - Allows making a record optional by using `Partial<Record<Keys, Type>>`.
      - Useful when not all keys are required.

   - **Interface and Record:**
      - Records can be used to create structured mappings with interfaces, enforcing specific attributes for each key.

**The `Record` utility type is a powerful tool for creating and ensuring structured mappings between keys and their associated types in TypeScript.**

### Utility Types in TypeScript

#### 1. **Pick and Omit Utility Types:**
   - **Pick Utility Type:**
      - The `Pick<Type, Keys>` utility type is used to create a new type by picking only the specified keys from an existing type.
      - It selectively extracts properties from the original type.

   - **Omit Utility Type:**
      - The `Omit<Type, Keys>` utility type is used to create a new type by excluding the specified keys from an existing type.
      - It removes properties defined by the provided keys.

   ```typescript
   type DeptPickExType = Pick<DepartmentInfo, "deptFee" | "availableSeats">;
   const myDept1: DeptPickExType = {
       deptFee: 4500,
       availableSeats: 30,
       // Error: Property 'isAvailable' is missing.
   };

   type DeptOmitExType = Omit<DepartmentInfo, "availableSeats">;
   ```

#### 2. **Extract and Exclude Utility Types:**
   - **Extract Utility Type:**
      - The `Extract<Type, Union>` utility type is used to create a new type by extracting only those types from the union that are assignable to a specified type.
      - It filters types based on the provided condition.

   - **Exclude Utility Type:**
      - The `Exclude<Type, ExcludedUnion>` utility type is used to create a new type by excluding types from the union that are assignable to a specified type.
      - It filters out types based on the provided condition.

   ```typescript
   type DeptExtractType = Extract<Departments, "dsa" | "dev">;
   type DeptExcludeType = Exclude<Departments, "dsa" | "dev">;
   ```

#### 3. **Difference Between Pick/Omit and Extract/Exclude:**
   - **Pick/Omit:**
      - Operate on object types.
      - Selectively include or exclude properties from an object type.

   - **Extract/Exclude:**
      - Operate on union types.
      - Selectively include or exclude types from a union type.

#### 4. **NonNullable Utility Type:**
   - The `NonNullable<Type>` utility type is used to create a new type by excluding `null` and `undefined` from the original type.
   - It ensures that the resulting type cannot have `null` or `undefined` values.

   ```typescript
   type AllPossibleFalsyValues = 0 | false | undefined | null | "" | -1;
   type NonNullableType = NonNullable<AllPossibleFalsyValues>;
   ```

### Key Takeaways:
   - **Pick/Omit and Object Types:**
      - Used for manipulating object types by selecting or excluding specific properties.

   - **Extract/Exclude and Union Types:**
      - Used for manipulating union types by selecting or excluding specific types.

   - **NonNullable:**
      - Ensures that the resulting type cannot have `null` or `undefined` values.

**These utility types provide powerful tools for shaping and transforming types based on specific needs in TypeScript.**

### Utility Types in TypeScript

#### 1. **ReturnType and Parameters Utility Types:**
   - **ReturnType Utility Type:**
      - The `ReturnType<Type>` utility type is used to extract the return type of a function type.
      - It provides the type of the value that the function returns.

   - **Parameters Utility Type:**
      - The `Parameters<Type>` utility type is used to extract the parameter types of a function type.
      - It provides an array type containing the types of each parameter of the function.

   ```typescript
   const createNewUser = (name: string, id: number, password: string) => {
       return { name, id, password };
   };

   const PrintNewUser = (name: string, id: number, password: string) => {
       return `User ${name} has been created!`;
   };

   type UserR = ReturnType<typeof createNewUser>;
   type PrintR = ReturnType<typeof PrintNewUser>;
   type UserParamType = Parameters<typeof PrintNewUser>;
   ```

#### 2. **Awaited Utility Type:**
   - The `Awaited<Type>` utility type is used to extract the type of the value awaited by a promise.
   - It helps to determine the resolved type when awaiting a promise in an asynchronous function.

   ```typescript
   interface User2 {
       id: number;
       name: string;
       username: string;
       email: string;
   }

   async function fetchUser2(): Promise<User2[]> {
       const data = await fetch('https://jsonplaceholder.typicode.com/users')
           .then(res => res.json())
           .catch(err => {
               if (err instanceof Error) {
                   console.log(err.message);
               }
           });
       return data;
   }

   type FetchUserReturnType = Awaited<ReturnType<typeof fetchUser2>>;
   ```

### Key Takeaways:
   - **ReturnType:**
      - Extracts the type of the value returned by a function.

   - **Parameters:**
      - Extracts the parameter types of a function as an array type.

   - **Awaited:**
      - Extracts the type of the resolved value when awaiting a promise.

**These utility types enhance the expressiveness and flexibility of TypeScript by allowing developers to work with function signatures more effectively.**