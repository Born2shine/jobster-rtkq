import React from 'react'

const useSessionStorage = () => {
    const setSessionStorageItem = (key, data) => sessionStorage.setItem(key, JSON.parse(data))
    const getSessionStorageItem = (key, data) => sessionStorage.getItem(key, JSON.stringify(data))
    const removeSessionStorageItem = (key) => sessionStorage.remove(key)
    const clearSessionStorage = () => sessionStorage.clear()

    return { setSessionStorageItem, getSessionStorageItem, removeSessionStorageItem, clearSessionStorage }
}

export default useSessionStorage