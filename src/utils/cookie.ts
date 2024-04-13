import { APP_NAME } from '@/config/const';

/**
 * set cookie
 * @param key
 * @param value
 * @param expireDay
 */
export function setCookie(key, value, expireDay) {
  let expires = '';
  if (expireDay) {
    const date = new Date();
    date.setTime(date.getTime() + expireDay * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${normalizeKey(key)}=${value || ''}${expires}; path=/`;
}

/**
 * get cookie
 * @param key
 * @returns
 */
export function getCookie(key) {
  const name = `${normalizeKey(key)}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return null;
}

/**
 * add prefix to key
 * @param key
 * @returns
 */
export function normalizeKey(key: string) {
  return `${APP_NAME}_${key}`;
}
