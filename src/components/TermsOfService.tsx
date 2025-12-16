import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"

export function TermsOfService({ children }: { children: React.ReactNode }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="max-w-2xl h-[80vh] flex flex-col">
                <DialogHeader>
                    <DialogTitle>Conditions d'Utilisation</DialogTitle>
                    <DialogDescription>Dernière mise à jour : 15 Décembre 2025</DialogDescription>
                </DialogHeader>
                <div className="flex-1 overflow-y-auto pr-2">
                    <div className="space-y-4 text-sm text-foreground/80">
                        <section>
                            <h3 className="font-bold text-base mb-2">1. Acceptation des conditions</h3>
                            <p>En téléchargeant ou en utilisant l'application EduBooster, ces conditions s'appliqueront automatiquement à vous – vous devez donc vous assurer de les lire attentivement avant d'utiliser l'application.</p>
                        </section>
                        <section>
                            <h3 className="font-bold text-base mb-2">2. Propriété intellectuelle</h3>
                            <p>L'application elle-même, et toutes les marques, droits d'auteur, droits de base de données et autres droits de propriété intellectuelle liés à celle-ci, appartiennent toujours à EduBooster.</p>
                        </section>
                        <section>
                            <h3 className="font-bold text-base mb-2">3. Modifications</h3>
                            <p>Nous nous réservons le droit de retirer ou de modifier des services sans préavis. Nous ne serons pas responsables si, pour une raison quelconque, tout ou partie de l'Application est indisponible à tout moment ou pour toute période.</p>
                        </section>
                        <section>
                            <h3 className="font-bold text-base mb-2">4. Abonnement et Paiements</h3>
                            <p>L'accès à certaines fonctionnalités nécessite un paiement. Tous les paiements sont définitifs et non remboursables, sauf disposition contraire de la loi applicable.</p>
                        </section>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
