export const CheckTentativeClowder = (clowderValues: { [x: string]: any }) => {
  /* In this function we make sure that the cats are compatible, as no cat stat should be in a 2:1 ratio */  
  let theClowderWillBePeaceful = true;
  const disorderCause:string[] = [];
  for (const key in clowderValues) {
    if (Object.hasOwnProperty.call(clowderValues, key)) {
      const property = clowderValues[key];
      for (const subKey in property) {
        if (Object.hasOwnProperty.call(property, subKey)) {
          if (property[subKey] === 2) {
            disorderCause.push(key)
            theClowderWillBePeaceful = false;
          }
        }
      }
    }
  }
  return {theClowderWillBePeaceful, disorderCause};
};