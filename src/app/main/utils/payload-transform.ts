import { camelCase, snakeCase, kebabCase } from 'lodash';

const conversionTypes = {
  camelCase,
  snakeCase,
  kebabCase,
};

type PayloadConversionType = 'camelCase' | 'snakeCase' | 'kebabCase';

export const validateObject = (testObject: unknown): boolean => {
  return (
    testObject === Object(testObject) &&
    !Array.isArray(testObject) &&
    typeof testObject !== 'function'
  );
};

export const convertPayload = (
  payload: unknown,
  type: PayloadConversionType
): unknown => {
  if (validateObject(payload)) {
    const newObject = {};
    Object.keys(payload).forEach((key) => {
      const convertedKey = conversionTypes[type](key);
      newObject[convertedKey] = convertPayload(payload[key], type);
    });
    return newObject;
  } else if (Array.isArray(payload)) {
    return payload.map((item) => {
      return convertPayload(item, type);
    });
  }
  return payload;
};
