import { API } from '../../constants';
import { get } from './axios';

export function config(locale) {
  const url = API + `/api/config/${locale}`;

  return get(url);
}
