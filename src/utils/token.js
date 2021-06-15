import { storage, tokenName } from "@/config";
import cookie from "js-cookie";

/**
 * 获取 token
 */
export function getToken() {
  if (storage) {
    if ("localStorage" === storage) {
      return localStorage.getItem(tokenName);
    } else if ("sessionStorage" === storage) {
      return sessionStorage.getItem(tokenName);
    } else if ("cookie" === storage) {
      return cookie.get(tokenName);
    } else {
      return localStorage.getItem(tokenName);
    }
  } else {
    return localStorage.getItem(tokenName);
  }
}

/**
 * 保存 token
 */
export function setToken(token) {
  if (storage) {
    if ("localStorage" === storage) {
      return localStorage.setItem(tokenName, token);
    } else if ("sessionStorage" === storage) {
      return sessionStorage.setItem(tokenName, token);
    } else if ("cookie" === storage) {
      return cookie.set(tokenName, token);
    } else {
      return localStorage.setItem(tokenName, token);
    }
  } else {
    return localStorage.setItem(tokenName, token);
  }
}

/**
 * 清除 token
 */
export function removeToken() {
  if (storage) {
    if ("localStorage" === storage) {
      return localStorage.removeItem(tokenName);
    } else if ("sessionStorage" === storage) {
      return sessionStorage.clear();
    } else if ("cookie" === storage) {
      return cookie.remove(tokenName);
    } else {
      return localStorage.removeItem(tokenName);
    }
  } else {
    return localStorage.removeItem(tokenName);
  }
}
