import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import certificateImage from "@/assets/certificate.jpg";

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal = ({ isOpen, onClose }: CertificateModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            📜 Свидетельство о регистрации программы для ЭВМ
          </DialogTitle>
          <DialogDescription>
            Medical Mind — официально зарегистрированная программа в Роспатенте РФ
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4">
          <img 
            src={certificateImage} 
            alt="Свидетельство о регистрации программы Medical Mind" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
          
          <div className="mt-6 p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">Основные данные:</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Название:</strong> Medical Mind</li>
              <li>• <strong>Правообладатель:</strong> ООО "ФАРМИКО" (RU)</li>
              <li>• <strong>Авторы:</strong> Борисов Денис Андреевич, Шаков Аслан Русланович</li>
              <li>• <strong>Дата регистрации:</strong> 25 июля 2025 г.</li>
              <li>• <strong>Номер заявки:</strong> 2025668357</li>
            </ul>
          </div>
          
          <div className="mt-4 text-center">
            <a 
              href="/certificate.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline text-sm font-medium"
            >
              📄 Скачать PDF версию свидетельства
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
