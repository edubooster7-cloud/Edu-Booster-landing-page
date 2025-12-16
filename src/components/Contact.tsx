import { Mail, MapPin, Phone } from "lucide-react"


export function Contact() {
    return (
        <section id="contact" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contactez-nous</h2>
                    <p className="text-muted-foreground mt-4">Une question ? Une suggestion ? Nous sommes là pour vous.</p>
                </div>

                <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
                    <div className="flex flex-col items-center text-center p-6 bg-background rounded-2xl shadow-sm border hover:shadow-md transition-all">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                            <Mail className="h-6 w-6" />
                        </div>
                        <h3 className="font-semibold mb-2">Email</h3>
                        <p className="text-sm text-muted-foreground mb-4">Pour toute assistance technique</p>
                        <a href="mailto:contact@edubooster.com" className="text-primary font-medium hover:underline">
                            team@edubooster.org
                        </a>
                    </div>

                    <div className="flex flex-col items-center text-center p-6 bg-background rounded-2xl shadow-sm border hover:shadow-md transition-all">
                        <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 mb-4">
                            <Phone className="h-6 w-6" />
                        </div>
                        <h3 className="font-semibold mb-2">Téléphone</h3>
                        <p className="text-sm text-muted-foreground mb-4">Du Lundi au Vendredi, 8h-17h</p>
                        <a href="tel:+243995209133" className="text-primary font-medium hover:underline">
                            +243 995 209 133
                        </a>
                    </div>

                    <div className="flex flex-col items-center text-center p-6 bg-background rounded-2xl shadow-sm border hover:shadow-md transition-all">
                        <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-600 mb-4">
                            <MapPin className="h-6 w-6" />
                        </div>
                        <h3 className="font-semibold mb-2">Bureau</h3>
                        <p className="text-sm text-muted-foreground mb-4">Venez nous rencontrer</p>
                        <span className="text-sm font-medium">
                            Av. de la Paix, Kinshasa/Gombe<br />RDC
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
