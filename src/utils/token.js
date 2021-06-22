import { STORAGE, TOKEN_NAME } from "@/constant";
import cookie from "js-cookie";

/**
 * 获取 token
 */
export function getToken() {
  if (STORAGE) {
    if ("localStorage" === STORAGE) {
      return localStorage.getItem(TOKEN_NAME);
    } else if ("sessionStorage" === STORAGE) {
      return sessionStorage.getItem(TOKEN_NAME);
    } else if ("cookie" === STORAGE) {
      return cookie.get(TOKEN_NAME);
    } else {
      return localStorage.getItem(TOKEN_NAME);
    }
  } else {
    return localStorage.getItem(TOKEN_NAME);
  }
}

/**
 * 保存 token
 */
export function setToken(token) {
  if (STORAGE) {
    if ("localStorage" === STORAGE) {
      return localStorage.setItem(TOKEN_NAME, token);
    } else if ("sessionStorage" === STORAGE) {
      return sessionStorage.setItem(TOKEN_NAME, token);
    } else if ("cookie" === STORAGE) {
      return cookie.set(TOKEN_NAME, token);
    } else {
      return localStorage.setItem(TOKEN_NAME, token);
    }
  } else {
    return localStorage.setItem(TOKEN_NAME, token);
  }
}

/**
 * 清除 token
 */
export function removeToken() {
  if (STORAGE) {
    if ("localStorage" === STORAGE) {
      return localStorage.removeItem(TOKEN_NAME);
    } else if ("sessionStorage" === STORAGE) {
      return sessionStorage.clear();
    } else if ("cookie" === STORAGE) {
      return cookie.remove(TOKEN_NAME);
    } else {
      return localStorage.removeItem(TOKEN_NAME);
    }
  } else {
    return localStorage.removeItem(TOKEN_NAME);
  }
}
