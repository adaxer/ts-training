// es geht um null-Option und undefined-Option
// Variablen / Ausdrücke oder Props mit dem `!` - definite assignment assertion of prop
// -//- mit dem `?` - undefined type of prop 

// bei Union-Type nur die gemeinsamen Member sind ok
// dieses Beispiel kommt von der offiz. Seite, umschreiben!
interface Bird {
    fly();
    layEggs();
  }
  
  interface Fish {
    swim();
    layEggs();
  }
  
  function getSmallPet(): Fish | Bird {
    // ...
  }
  
  let pet = getSmallPet();
  pet.layEggs(); // okay
  pet.swim();    // errors
  
  
  /* union types & control flow based type analysis */
  
  function composeCommand(
      command: string | string[]
    ): string {
      if (typeof command === "string") {
        return command;
      }
    
      return command.join(" ");
    }
  // https://mariusschulz.com/blog/control-flow-based-type-analysis-in-typescript
  
  type UnionType1 = unknown | null;       // unknown
  type UnionType2 = unknown | undefined;  // unknown
  type UnionType3 = unknown | string;     // unknown
  type UnionType4 = unknown | number[];   // unknown
  
  type UnionType5 = unknown | any;  // any
  
  
  
  /* String Literal Type & Union Type */
  // https://mariusschulz.com/blog/string-literal-types-in-typescript
  
  
  
  /* tagged union type */
  // https://mariusschulz.com/blog/tagged-union-types-in-typescript