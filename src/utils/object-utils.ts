export function areArraysEqual(arr1?: any[], arr2?: any[]): boolean {
  if (!arr1 || !arr2) {
    return false;
  }

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    const item1 = arr1[i];
    const item2 = arr2[i];

    if ((Array.isArray(item1) && !Array.isArray(item2)) || (!Array.isArray(item1) && Array.isArray(item2))) {
      return false;
    }

    if (Array.isArray(item1) && Array.isArray(item2)) {
      if (!areArraysEqual(item1, item2)) {
        return false;
      }
    } else if (typeof item1 === 'object' && typeof item2 === 'object') {
      if (!areObjectsTheSame(item1, item2)) {
        return false;
      }
    } else if (item1 !== item2) {
      return false;
    }
  }

  return true;
}

export function areObjectsTheSame(obj1: any, obj2: any): boolean {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!Object.prototype.hasOwnProperty.call(obj2, key)) {
      return false;
    }

    const val1 = obj1[key];
    const val2 = obj2[key];

    if (Array.isArray(val1) && Array.isArray(val2)) {
      if (!areArraysEqual(val1, val2)) {
        return false;
      }
    } else if (typeof val1 === 'object' && typeof val2 === 'object') {
      if (!areObjectsTheSame(val1, val2)) {
        return false;
      }
    } else if (val1 !== val2) {
      return false;
    }
  }

  return true;
}

export const getValidObjectFields = (object: any): boolean => {
  const result: any = {};
  for (const key in object) {
    if (key !== undefined) {
      result[key] = object[key];
    }
  }

  return result;
};

export const excludeObjectFields = (object: any, fields: string[]) => {
  const result: any = {};
  for (const key in object) {
    if (!fields.includes(key)) {
      result[key] = object[key];
    }
  }

  return result;
};

export const getCommaSeparatedText = (list: string[]) => list.join(', ');
