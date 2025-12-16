export function Partners() {
    const partners = [
        { name: "Les éleves du Collège Boboto", logo: "" },
        { name: "Les éleves du Lycée Bosembo", logo: "" },
        { name: "Les éleves du Complexe Scolaire Cardinal Malula", logo: "" },
        { name: "Les éleves d'Institut de la Gombe", logo: "" },
        { name: "Les éleves d'Institut de la Mwanga Goma", logo: "" },
    ]

    return (
        <section id="partners" className="py-12 bg-muted/30 border-y">
            <div className="container mx-auto px-4 md:px-6">
                <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
                    Ils nous font confiance
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale transition-all hover:grayscale-0">
                    {partners.map((partner, index) => (
                        <div key={index} className="text-xl font-bold text-muted-foreground flex items-center gap-2">
                            {/* Logo Placeholder */}
                            <div className="h-8 w-8 bg-black/10 dark:bg-white/10 rounded-full flex items-center justify-center">
                                <span className="text-xs">{partner.name[0]}</span>
                            </div>
                            <span>{partner.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
