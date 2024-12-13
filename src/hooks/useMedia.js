import { useState, useEffect } from 'react'

export function useMedia(media) {
    const [isDesktop, setIsDesktop] = useState(() => window.matchMedia(media).matches)
    useEffect(() => {
        const desktop = window.matchMedia(media)
        function handleMediaChange(e) {
            setIsDesktop(e.matches)
        }
        desktop.addEventListener('change', handleMediaChange)

        return () => desktop.removeEventListener('change', handleMediaChange)
    }, [media])

    return { isDesktop }
}