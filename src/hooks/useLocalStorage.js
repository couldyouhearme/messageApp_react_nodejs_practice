import React, { useState, useEffect } from 'react'

const PREFIX = 'msgapp-'

export default function useLocalStorage(key, initVal) {
    const prefixedKey = PREFIX + key

    const [val, setVal] = useState(() => {
        const jsonVal = localStorage.getItem(prefixedKey)
        if (jsonVal != null) return JSON.parse(jsonVal) // ?
        if (typeof initVal === 'function') { // check here...
            return initVal()
        } else {
            return initVal
        }
    })

    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(val))
    }, [prefixedKey, val])

    return [val, setVal]
}

