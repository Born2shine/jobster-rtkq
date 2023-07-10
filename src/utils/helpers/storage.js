// set session storage
export const setSessionStorageItem = (key, data) => sessionStorage.setItem(key, JSON.stringify(data))

// get session storage
export const getSessionStorageItem = (key) => {
	const item = sessionStorage.getItem(key)
	const data = item ? JSON.parse(item) : null
	return data
}

// remove session storage
export const removeSessionStorageItem = (key) => sessionStorage.remove(key)

// clear session storage
export const clearSessionStorage = () => sessionStorage.clear()
