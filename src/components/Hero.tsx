import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { BookOpen, Clock, GraduationCap, CheckCircle } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { LaunchCountdown } from "./LaunchCountdown";
import { PreorderModal } from "./PreorderModal";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [launched, setLaunched] = useState(false);
  const phoneRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Initial reveal
      gsap.from(textRef.current?.children || [], {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Float animation
      gsap.to(phoneRef.current, {
        y: 20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Parallax effect on mouse move
      const container = containerRef.current;
      const phone = phoneRef.current;

      if (!container || !phone) return;

      const handleMouseMove = (e: MouseEvent) => {
        const { left, top, width, height } = container.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;

        gsap.to(phone, {
          rotationY: x * 15,
          rotationX: -y * 15,
          transformPerspective: 1000,
          duration: 1,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(phone, {
          rotationY: 0,
          rotationX: 0,
          duration: 1.5,
          ease: "power3.out",
        });
      };

      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    { scope: containerRef }
  );

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative overflow-hidden pt-20 md:pt-32 pb-24 perspective-1000 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Text Content */}
          <div
            ref={textRef}
            className="flex flex-col justify-center text-center lg:text-left space-y-8 z-20"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium backdrop-blur-sm bg-background/50 w-fit mx-auto lg:mx-0">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                Nouveau : Simulateur d'examen 2025
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                Votre réussite. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 dark:to-blue-400">
                  Assurée.
                </span>
              </h1>

              <p className="max-w-[600px] mx-auto lg:mx-0 text-lg md:text-xl text-muted-foreground leading-relaxed font-normal">
                Ne soyez plus seul face à l'Exétat.{" "}
                <strong className="font-semibold text-foreground">
                  EduBooster
                </strong>{" "}
                est votre école virtuelle. Cours complets, simulateurs
                intelligents et suivi personnalisé pour avancer avec courage.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {launched ? (
                <>
                  <Button
                    size="lg"
                    className="rounded-full h-14 px-8 text-base shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:scale-105"
                    onClick={() =>
                      window.open(
                        "https://play.google.com/store/apps/",
                        "_blank"
                      )
                    }
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6 mr-2 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.54,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L3.84,2.15C3.84,2.15 6.05,2.66 6.05,2.66Z" />
                    </svg>
                    Google Play
                  </Button>

                  <Button
                    size="lg"
                    className="rounded-full h-14 px-8 text-base shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:scale-105"
                    onClick={() =>
                      window.open("https://apps.apple.com/", "_blank")
                    }
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6 mr-2 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.54,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L3.84,2.15C3.84,2.15 6.05,2.66 6.05,2.66Z" />
                    </svg>
                    Google Play
                  </Button>
                </>
              ) : (
                <>
                  <PreorderModal>
                    <Button
                      size="lg"
                      className="rounded-full h-14 px-8 text-base shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:scale-105"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-6 w-6 mr-2 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.54,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L3.84,2.15C3.84,2.15 6.05,2.66 6.05,2.66Z" />
                      </svg>
                      Google Play
                    </Button>
                  </PreorderModal>

                  <PreorderModal>
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full h-14 px-8 text-base border-2 hover:bg-muted/50 transition-all hover:scale-105"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-6 w-6 mr-2 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.37 12.36,4.26 13,3.5Z" />
                      </svg>
                      App Store
                    </Button>
                  </PreorderModal>
                </>
              )}
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold text-muted-foreground text-center lg:text-left uppercase tracking-widest">
                Lancement officiel dans :
              </p>
              <LaunchCountdown />
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-6 text-sm text-muted-foreground pt-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-full border-4 border-background bg-muted flex items-center justify-center text-xs font-bold overflow-hidden shadow-sm"
                  >
                    <img
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`}
                      alt="user"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1 font-semibold text-foreground">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="text-yellow-500">
                        ★
                      </span>
                    ))}
                  </div>
                  <span>4.9/5</span>
                </div>
                <span>Rejoint par +10,000 élèves</span>
              </div>
            </div>
          </div>

          {/* Phone Mockup Area */}
          <div
            ref={phoneRef}
            className="relative mx-auto w-full max-w-[300px] lg:max-w-[340px] will-change-transform z-10"
          >
            {/* Glow / Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-primary/20 to-purple-500/20 blur-[100px] pointer-events-none"></div>

            {/* Phone Body */}
            <div className="relative rounded-[3rem] border-[8px] border-gray-900 bg-gray-900 ring-1 ring-white/10 shadow-2xl overflow-hidden aspect-[9/19.5]">
              {/* Screen Content */}
              <div className="h-full w-full bg-background relative flex flex-col overflow-hidden">
                {/* Status Bar */}
                <div className="px-6 py-3 flex justify-between items-center text-[10px] font-medium opacity-60">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-current"></div>
                    <div className="w-3 h-3 rounded-full bg-current"></div>
                  </div>
                </div>

                {/* App Header */}
                <div className="px-6 pb-6 pt-2">
                  <div className="flex justify-between items-center mb-6">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                      <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
                        alt="Profile"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h2 className="text-2xl font-bold tracking-tight">
                      Bonjour, Sarah
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Continuez votre progression.
                    </p>
                  </div>
                </div>

                {/* Focus Card */}
                <div className="px-6 mb-6">
                  <div className="p-5 rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                          <Clock className="h-5 w-5" />
                        </div>
                        <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
                          En cours
                        </span>
                      </div>
                      <div className="text-lg font-bold mb-1">
                        Mathématiques : Algèbre
                      </div>
                      <div className="text-sm opacity-80 mb-3">
                        Chapitre 4 • 12/20 questions
                      </div>
                      <div className="w-full h-1.5 bg-black/20 rounded-full overflow-hidden">
                        <div className="h-full bg-white w-[60%] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex-1 bg-muted/30 rounded-t-[2.5rem] p-6 space-y-4">
                  <div className="flex items-center justify-between px-2">
                    <h3 className="font-semibold text-sm">Au programme</h3>
                    <span className="text-xs text-primary font-medium">
                      Voir tout
                    </span>
                  </div>

                  <div className="space-y-3">
                    {[
                      {
                        title: "Physique",
                        sub: "Mécanique des fluides",
                        color: "bg-blue-500",
                      },
                      {
                        title: "Chimie",
                        sub: "Chimie organique",
                        color: "bg-green-500",
                      },
                      {
                        title: "Français",
                        sub: "Dissertation",
                        color: "bg-orange-500",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 p-3 rounded-2xl bg-background border shadow-sm hover:shadow-md transition-all cursor-pointer"
                      >
                        <div
                          className={`h-10 w-10 rounded-xl ${item.color} flex items-center justify-center text-white shadow-sm`}
                        >
                          <span className="text-xs font-bold">
                            {item.title[0]}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-sm">
                            {item.title}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {item.sub}
                          </div>
                        </div>
                        <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center">
                          <CheckCircle className="h-3 w-3 text-muted-foreground" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Nav */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-background/80 backdrop-blur-md border-t flex justify-around items-center px-6 pb-2">
                  <div className="flex flex-col items-center gap-1 text-primary">
                    <div className="h-1 w-12 rounded-full bg-foreground absolute top-2 left-1/2 -translate-x-1/2 opacity-20"></div>
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col items-center gap-1 text-muted-foreground">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col items-center gap-1 text-muted-foreground">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements around phone */}
            <div className="absolute -right-8 top-20 p-3 rounded-2xl bg-background border shadow-xl animate-bounce delay-700 hidden md:block">
              <div className="flex items-center gap-2">
                <span className="text-yellow-500 text-xl">🏆</span>
                <div>
                  <div className="text-xs font-semibold">Score</div>
                  <div className="text-xs font-bold text-primary">Top 1%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
