import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { BookCheck, Smartphone, TrendingUp, Download, Clock, Globe } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

const features = [
    {
        title: "Mode Hors Connexion",
        description: "Téléchargez les cours et questions pour étudier sans internet, où que vous soyez.",
        icon: Globe,
    },
    {
        title: "+10,000 Questions",
        description: "Accédez à une banque immense d'items des examens d'État passés pour vous entraîner.",
        icon: BookCheck,
    },
    {
        title: "Suivi de Progression",
        description: "Visualisez vos progrès par branche et identifiez vos points faibles à améliorer.",
        icon: TrendingUp,
    },
    {
        title: "Disponible sur Mobile",
        description: "Une expérience fluide et intuitive sur votre smartphone Android ou iPhone.",
        icon: Smartphone,
    },
    {
        title: "Mises à jour Régulières",
        description: "De nouvelles questions et résumés ajoutés chaque semaine par nos professeurs.",
        icon: Download,
    },
    {
        title: "Simulation d'Examen",
        description: "Testez-vous en conditions réelles avec un chronomètre intégré.",
        icon: Clock,
    },
]

export function Features() {
    const containerRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const cards = gsap.utils.toArray<HTMLElement>(".feature-card")

        gsap.fromTo(cards,
            { y: 50, opacity: 0, rotationX: 15 },
            {
                y: 0,
                opacity: 1,
                rotationX: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                }
            }
        )
    }, { scope: containerRef })

    return (
        <section id="features" ref={containerRef} className="py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Tout ce dont vous avez besoin pour réussir
                    </h2>
                    <p className="mt-4 text-muted-foreground md:text-xl">
                        Edubooster est conçu pour maximiser vos chances de réussite grâce à des outils pédagogiques modernes.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <Card key={index} className="feature-card transition-all hover:shadow-xl hover:-translate-y-2 h-full border-muted/50 overflow-hidden backdrop-blur-md bg-card/50">
                            <CardHeader>
                                <div className="p-3 w-fit rounded-lg bg-primary/10 text-primary mb-4">
                                    <feature.icon className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-xl">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
