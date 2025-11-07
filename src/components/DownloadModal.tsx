import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";
import logoImage from "@/assets/medical-mind-logo.png";

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
            <img 
              src={logoImage} 
              alt="Medical Mind" 
              className="w-24 h-24 animate-scale-in"
            />
          </div>
          <DialogTitle className="text-center text-2xl">
            🎁 Восстанови энергию дня
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <p className="text-center text-lg text-muted-foreground">
            Скачай по ссылке и получи{" "}
            <span className="text-primary font-bold">1000 Витакойнов</span> в подарок! 💎
          </p>

          <div className="space-y-3">
            <Button 
              size="lg" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6"
              onClick={() => window.open('exp://hwpetlo-anonymous-8081.exp.direct', '_blank')}
            >
              <Apple className="w-5 h-5 mr-2" />
              Скачать iOS
            </Button>

            <Button 
              size="lg" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6"
              onClick={() => window.open('exp://hwpetlo-anonymous-8081.exp.direct', '_blank')}
            >
              <Play className="w-5 h-5 mr-2" />
              Скачать Android
            </Button>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            Безопасно. Научно. Интерактивно. 🔒
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
