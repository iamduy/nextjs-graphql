export * from './endPoint';
import _ from 'lodash';

export const parseUrl = (params: { [key: string]: string }) => {
  if (location.pathname === '/') return location.pathname;
  return _.dropRight(location.pathname)
    .join('')
    .concat(`[${Object.keys(params)}]`);
};
