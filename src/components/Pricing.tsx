import { CheckCircle2 } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { PreorderModal } from "./PreorderModal"

export function Pricing() {
    return (
        <section id="pricing" className="py-20 md:py-32 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
                        Investissez dans votre réussite
                    </h2>
                    <p className="text-muted-foreground md:text-xl">
                        Un tarif unique, accessible, pour toute une année de préparation intensive.
                    </p>
                </div>

                <div className="max-w-md mx-auto">
                    <Card className="border-primary/20 shadow-2xl bg-background/50 backdrop-blur-xl relative overflow-hidden group">

                        {/* Popular Badge */}
                        <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-xl z-20">
                            OFFRE DE LANCEMENT
                        </div>

                        <CardHeader className="text-center pb-2">
                            <CardTitle className="text-xl text-muted-foreground uppercase tracking-widest font-semibold">Premium</CardTitle>
                            <div className="flex items-center justify-center gap-1 mt-4">
                                <span className="text-5xl font-bold tracking-tighter">10$</span>
                                <span className="text-muted-foreground text-sm font-medium self-end mb-2">/ an</span>
                            </div>
                            <CardDescription className="pt-2">Accès illimité à toutes les fonctionnalités.</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-6 pt-6">
                            <ul className="space-y-3">
                                {[
                                    "Banque de +10,000 questions",
                                    "Simulateur d'examen illimité",
                                    "Accès hors connexion complet",
                                    "Résumés de cours PDF",
                                    "Suivi de progression détaillé",
                                    "Support prioritaire 7j/7"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                                        <span className="text-sm font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>

                        <CardFooter className="pt-4 pb-8">
                            <PreorderModal>
                                <Button size="lg" className="w-full rounded-full h-12 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-[1.02]">
                                    Pré-commander maintenant
                                </Button>
                            </PreorderModal>
                        </CardFooter>
                    </Card>
                    <p className="text-center text-xs text-muted-foreground mt-4">
                        Paiement via M-Pesa, Airtel Money, et Orange Money.
                    </p>
                </div>
            </div>
        </section>
    )
}
