import isObject from 'lodash/isObject';
import { PINO_ERROR_KEY } from '@repo/logger/src/loggerConfig';
import type { LogObject } from '@repo/logger/src/types';

export const resolveLogObj = (someProp: LogObject) => {
  console.log(someProp);
  console.log(isObject(PINO_ERROR_KEY));
};
