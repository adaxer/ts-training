function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
  }
   
  let props = { a: 1, b: 2, c: 3, d: 4 };
   
  let prop = getProperty(props, "a");
  //getProperty(x, "m");
  
  console.log(p);
