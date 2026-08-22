import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";
import logoImage from "@/assets/medical-mind-logo.png";
import logoWebp from "@/assets/medical-mind-logo.webp";
import { reachGoal, RUSTORE_URL } from "@/lib/analytics";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal = ({ isOpen, onClose }: DownloadModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <picture>
              <source type="image/webp" srcSet={logoWebp} />
              <img src={logoImage} alt="Medical Mind" width={96} height={96} className="w-24 h-24" />
            </picture>
          </div>
          <DialogTitle className="text-center text-2xl">
            Скачайте Medical Mind
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <p className="text-center text-lg text-muted-foreground">
            Анализ еды по фото, дефициты и персональные нормы — бесплатно,
            <br />
            сразу после установки.
          </p>

          <div className="space-y-3">
            <Button 
              size="lg" 
              className="w-full bg-muted text-muted-foreground text-lg py-6 cursor-not-allowed"
              disabled
            >
              <Apple className="w-5 h-5 mr-2" />
              Скоро на iOS
            </Button>

            <a
              href={RUSTORE_URL}
              target="_blank"
              rel="noopener"
              onClick={() => reachGoal("click_rustore", { place: "modal" })}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary py-6 text-lg font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Play className="w-5 h-5" aria-hidden="true" />
              Скачать в RuStore — бесплатно
            </a>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            Безопасно. Научно. Интерактивно. 🔒
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
