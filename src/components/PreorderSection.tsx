import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Bell, CheckCircle, Mail } from "lucide-react"

export function PreorderSection() {
    const [email, setEmail] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        // Simulate API call and email sending
        await new Promise(resolve => setTimeout(resolve, 1500))

        console.log("Preorder subscription from section:", email)
        setSubmitted(true)
        setIsLoading(false)
    }

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-top-left scale-110 z-0"></div>

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 rounded-3xl bg-background border p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    {/* Decorative Blob */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>

                    <div className="flex-1 space-y-6 text-center lg:text-left">
                        <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium backdrop-blur-sm bg-background/50 text-primary">
                            <Bell className="h-4 w-4 mr-2" />
                            Liste d'attente prioritaire
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                            Ne manquez pas le lancement
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Rejoignez les +2,000 élèves déjà inscrits. Recevez une notification instantanée et un guide de révision exclusif lors de la sortie.
                        </p>
                    </div>

                    <div className="flex-1 w-full max-w-md bg-card/50 backdrop-blur-md p-6 rounded-2xl border shadow-sm">
                        {!submitted ? (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <h3 className="font-semibold text-lg">Inscrivez-vous maintenant</h3>
                                    <p className="text-sm text-muted-foreground">Pas de spam, promis.</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                                        <Input
                                            type="email"
                                            placeholder="votre@email.com"
                                            className="pl-10 h-12 bg-background border-input"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <Button type="submit" size="lg" className="w-full h-12 text-base rounded-xl" disabled={isLoading}>
                                        {isLoading ? "Enregistrement..." : "M'inscrire gratuitement"}
                                    </Button>
                                </div>
                            </form>
                        ) : (
                            <div className="py-8 text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mx-auto">
                                    <CheckCircle className="h-8 w-8" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl">Inscription réussie !</h3>
                                    <p className="text-muted-foreground mt-2">
                                        Surveillez votre boîte mail ({email}).<br />On se retrouve très vite !
                                    </p>
                                </div>
                                <Button variant="ghost" onClick={() => { setSubmitted(false); setEmail("") }}>
                                    Inscrire une autre adresse
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
