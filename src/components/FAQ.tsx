import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion"

export function FAQ() {
    return (
        <section id="faq" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Questions Fréquentes</h2>
                    <p className="text-muted-foreground">
                        Tout ce que vous devez savoir sur Edubooster et le simulateur d'Exétat.
                    </p>
                </div>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>L'application fonctionne-t-elle sans internet ?</AccordionTrigger>
                        <AccordionContent>
                            Oui absolument. Une fois les cours et les questionnaires téléchargés, vous pouvez réviser et passer des simulations d'examens sans aucune connexion internet.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Combien coûte l'accès à Edubooster ?</AccordionTrigger>
                        <AccordionContent>
                            L'application est en téléchargement gratuit. L'accès complet à tous les cours et simulateurs d'examens est disponible via un abonnement unique de 10$ par an.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Quels sont les modes de paiement acceptés ?</AccordionTrigger>
                        <AccordionContent>
                            Nous acceptons les paiements mobiles populaires en RDC : M-Pesa, Airtel Money et Orange Money.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Puis-je utiliser l'application sur iPhone ?</AccordionTrigger>
                        <AccordionContent>
                            Oui, Edubooster sera disponible sur l'App Store pour iOS ainsi que sur le Google Play Store pour Android dès le lancement.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>Les questions sont-elles conformes à l'Exétat ?</AccordionTrigger>
                        <AccordionContent>
                            Tout à fait. Notre banque de questions est constituée des items des examens d'État des 10 dernières années, organisés par année et par branche.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}
