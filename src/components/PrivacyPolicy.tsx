import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"


export function PrivacyPolicy({ children }: { children: React.ReactNode }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="max-w-2xl h-[80vh] flex flex-col">
                <DialogHeader>
                    <DialogTitle>Politique de Confidentialité</DialogTitle>
                    <DialogDescription>Dernière mise à jour : 15 Décembre 2025</DialogDescription>
                </DialogHeader>
                <div className="flex-1 overflow-y-auto pr-2">
                    <div className="space-y-4 text-sm text-foreground/80">
                        <section>
                            <h3 className="font-bold text-base mb-2">1. Collecte de l'information</h3>
                            <p>Nous recueillons des informations lorsque vous vous inscrivez sur notre site, lorsque vous vous connectez à votre compte, faites un achat, participez à un concours, et / ou lorsque vous vous déconnectez. Les informations recueillies incluent votre nom, votre adresse e-mail, numéro de téléphone.</p>
                        </section>
                        <section>
                            <h3 className="font-bold text-base mb-2">2. Utilisation des informations</h3>
                            <p>Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :</p>
                            <ul className="list-disc pl-5 space-y-1 mt-1">
                                <li>Personnaliser votre expérience et répondre à vos besoins individuels</li>
                                <li>Fournir un contenu publicitaire personnalisé</li>
                                <li>Améliorer notre site Web</li>
                                <li>Améliorer le service client et vos besoins de prise en charge</li>
                                <li>Vous contacter par e-mail</li>
                                <li>Administrer un concours, une promotion, ou une enquête</li>
                            </ul>
                        </section>
                        <section>
                            <h3 className="font-bold text-base mb-2">3. Confidentialité du commerce en ligne</h3>
                            <p>Nous sommes les seuls propriétaires des informations recueillies sur ce site. Vos informations personnelles ne seront pas vendues, échangées, transférées, ou données à une autre société pour n'importe quelle raison, sans votre consentement, en dehors de ce qui est nécessaire pour répondre à une demande et / ou une transaction.</p>
                        </section>
                        {/* More mock content */}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
