import { useRef } from "react"
import { Card, CardContent, CardFooter } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Star } from "lucide-react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const testimonials = [
    {
        name: "Sarah Masika",
        role: "Élève (Math-Physique)",
        content: "Grâce à Edubooster, j'ai pu revoir toutes mes formules de mathématiques et réussir mon Exétat avec 72% ! L'application est vraiment facile à utiliser.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
        name: "Jonathan Ilunga",
        role: "Élève (Commerciale)",
        content: "Les items des années passées m'ont beaucoup aidé à comprendre la structure des questions. Je recommande vivement à tous les finalistes.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jonathan",
    },
    {
        name: "Merveille Kabedi",
        role: "Élève (Bio-Chimie)",
        content: "Le mode hors connexion est un vrai plus. Je pouvais étudier dans le bus sans consommer mes forfaits. Merci Edubooster !",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Merveille",
    },
]

export function Testimonials() {
    const containerRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const cards = gsap.utils.toArray<HTMLElement>(".testimonial-card")

        gsap.fromTo(cards,
            { y: 50, opacity: 0, scale: 0.9 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                stagger: 0.2,
                duration: 0.8,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                }
            }
        )
    }, { scope: containerRef })

    return (
        <section id="testimonials" ref={containerRef} className="py-20 md:py-32 bg-muted/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
                        Ce que disent nos élèves
                    </h2>
                    <p className="mt-4 text-muted-foreground md:text-xl">
                        Découvrez pourquoi des milliers d'élèves font confiance à Edubooster pour leur préparation.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((t, i) => (
                        <Card key={i} className="testimonial-card flex flex-col justify-between h-full hover:shadow-lg transition-shadow duration-300 backdrop-blur-md bg-card/50">
                            <CardContent className="pt-6">
                                <div className="flex mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                                    ))}
                                </div>
                                <blockquote className="text-lg italic text-muted-foreground leading-relaxed">
                                    "{t.content}"
                                </blockquote>
                            </CardContent>
                            <CardFooter className="flex items-center gap-4 border-t pt-6 mt-auto">
                                <Avatar className="h-12 w-12 border-2 border-primary/10">
                                    <AvatarImage src={t.avatar} alt={t.name} />
                                    <AvatarFallback>{t.name[0]}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <div className="font-semibold text-foreground">{t.name}</div>
                                    <div className="text-sm text-primary/80 font-medium">{t.role}</div>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
