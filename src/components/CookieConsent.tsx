import { useState, useEffect } from "react"
import { Button } from "./ui/button"


export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent")
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1500)
            return () => clearTimeout(timer)
        }
    }, [])

    const acceptCookies = () => {
        localStorage.setItem("cookieConsent", "true")
        setIsVisible(false)
    }

    if (!isVisible) return null

    return (
        <div className="fixed bottom-0 left-0 right-0 p-4 md:p-6 z-50 animate-in slide-in-from-bottom-20 duration-500">
            <div className="container max-w-4xl mx-auto">
                <div className="bg-background/90 backdrop-blur-lg border shadow-2xl rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                    <div className="flex-1 space-y-2">
                        <h4 className="font-semibold">🍪 Cookies & Confidentialité</h4>
                        <p className="text-sm text-muted-foreground">
                            Nous utilisons des cookies pour améliorer votre expérience. En continuant, vous acceptez notre politique de confidentialité.
                        </p>
                    </div>
                    <div className="flex gap-3 shrink-0">
                        <Button variant="outline" size="sm" onClick={() => setIsVisible(false)} className="rounded-full">
                            Refuser
                        </Button>
                        <Button size="sm" onClick={acceptCookies} className="rounded-full px-6">
                            Accepter
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
