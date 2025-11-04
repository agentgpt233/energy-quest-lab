import { Button } from "@/components/ui/button";
import { Zap, Lock } from "lucide-react";
import { useState } from "react";
import { DownloadModal } from "./DownloadModal";

export const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <footer className="py-16 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground flex items-center justify-center gap-2">
              <Zap className="w-8 h-8 text-primary" />
              Medical Mind
            </h2>
            <p className="text-xl text-muted-foreground font-medium">
              Наука. Энергия. Игра.
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <Button
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="bg-primary hover:bg-primary/90 text-white text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Восстановить энергию дня
            </Button>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
              <Lock className="w-4 h-4" />
              <span>Безопасно и конфиденциально</span>
            </div>
          </div>

          <div
            className="pt-8 border-t border-border text-sm text-muted-foreground animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <p>© 2025 Medical Mind. Все права защищены.</p>
            <p className="mt-2">
              Научно-игровое приложение для восстановления энергии через нутриенты
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};
