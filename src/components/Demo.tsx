import { Button } from "./ui/button"
import { Play } from "lucide-react"

export function Demo() {
    return (
        <section id="demo" className="py-20 md:py-32 bg-primary/5 text-primary-foreground dark:bg-primary/10">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <div className="max-w-3xl mx-auto mb-10">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
                        Découvrez l'expérience Edubooster
                    </h2>
                    <p className="mt-4 text-muted-foreground md:text-xl">
                        Une interface intuitive conçue pour vous aider à apprendre plus vite.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl border bg-black/50 group cursor-pointer">
                    {/* Backdrop / Thumbnail Placeholder */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                        <span className="text-white/20 text-9xl font-bold select-none">DEMO</span>
                    </div>

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center transition-all group-hover:scale-110">
                        <Button size="icon" className="h-20 w-20 rounded-full text-white bg-primary/90 hover:bg-primary border-4 border-white/20 shadow-xl">
                            <Play className="h-8 w-8 ml-1 fill-current" />
                            <span className="sr-only">Play Demo</span>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
