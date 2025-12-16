import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";
import { Bell, Loader, CheckCircle } from "lucide-react";
import api from "@/api/axios";
import { toast } from "sonner";

interface PreorderModalProps {
  children: React.ReactNode;
}

export function PreorderModal({ children }: PreorderModalProps) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const resetForm = () => {
    setName("");
    setEmail("");
    setSubmitted(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);

    try {
      const res = await api.post("/newsletter/subscribe", { name, email });

      if (res.status === 201) {
        toast.success(res.data.message);
        setSubmitted(true);

        // ⏱ afficher succès puis fermer
        setTimeout(() => {
          setOpen(false);
          resetForm();
        }, 1200);
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Erreur inconnue survenue");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !isLoading && setOpen(v)}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="sm:max-w-md border-0 bg-background/95 backdrop-blur-xl shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Soyez le premier informé 🚀
          </DialogTitle>
          <DialogDescription className="text-base">
            Le lancement est imminent. Inscrivez-vous pour recevoir votre lien
            de téléchargement exclusif.
          </DialogDescription>
        </DialogHeader>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-5 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nom complet</Label>
              <Input
                id="name"
                placeholder="Sarah Masika"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Adresse Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="sarah@exemple.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full gap-2 rounded-full h-12"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader className="animate-spin size-4" />
              ) : (
                <>
                  <Bell className="h-4 w-4" />
                  M'avertir du lancement
                </>
              )}
            </Button>
          </form>
        ) : (
          <div className="py-8 text-center space-y-4 animate-in fade-in zoom-in duration-300">
            <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mx-auto">
              <CheckCircle className="h-8 w-8" />
            </div>
            <h3 className="font-bold text-xl">C'est noté !</h3>
            <p className="text-muted-foreground text-sm">
              Merci <span className="font-semibold">{name}</span>. Vous recevrez
              une notification dès que l'app sera disponible.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
