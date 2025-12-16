export function About() {
    return (
        <section id="about" className="py-20 md:py-32 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Notre Mission
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Chez <strong className="text-foreground">EduBooster</strong>, nous croyons que chaque élève mérite les meilleures chances de réussite. Notre mission est de démocratiser l'accès à une préparation d'excellence pour l'Examen d'État en RDC.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Né de la volonté d'enseignants passionnés et d'experts en technologie, EduBooster combine pédagogie éprouvée et innovation numérique pour offrir un compagnon d'étude infatigable, disponible 24/7, même sans internet.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
