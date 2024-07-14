export function updateClasses(oldClasses: string, newClasses: string): string {
  const regex = /^(?<prefix>.+-)?(?<key>\D+)(?<mod>-\d+)?$/;

  let oldClassesArray: string[] = oldClasses.split(' ');
  let newClassesArray: string[] = newClasses.split(' ');
  let removeClasses: string[] = [];

  newClassesArray.forEach(newClass => {
    const newMatch = newClass.match(regex)?.groups as { [key: string]: string } | undefined;
    if (!newMatch) return; // Handle potential undefined case
    
    // Check if newMatch contains the required properties
    if (!newMatch.key) return;

    const { prefix: newPrefix, key: newKey } = newMatch;

    oldClassesArray.forEach(oldClass => {
      const oldMatch = oldClass.match(regex)?.groups as { [key: string]: string } | undefined;
      if (!oldMatch) return; // Handle potential undefined case

      // Check if oldMatch contains the required properties
      if (!oldMatch.key) return;

      const { prefix: oldPrefix, key: oldKey } = oldMatch;

      const samePrefix = oldPrefix !== undefined && newPrefix !== undefined && oldPrefix === newPrefix;
      const sameKey = oldKey !== undefined && newKey !== undefined && oldKey === newKey;

      if (samePrefix || sameKey) {
        removeClasses.push(oldClass);
      }
    });
  });

  const updatedClasses = [...newClassesArray, ...oldClassesArray.filter(cls => !removeClasses.includes(cls))];
  return updatedClasses.join(' ');
}
