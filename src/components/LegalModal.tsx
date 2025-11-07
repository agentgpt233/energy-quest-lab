import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Building2, MapPin, Mail, Phone, Globe, FileText } from "lucide-react";
import { DocumentModal } from "./DocumentModal";
import { PrivacyPolicyContent } from "./documents/PrivacyPolicyContent";
import { TermsOfServiceContent } from "./documents/TermsOfServiceContent";
import { PersonalDataConsentContent } from "./documents/PersonalDataConsentContent";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type DocumentType = 'privacy' | 'terms' | 'consent' | null;

export const LegalModal = ({ isOpen, onClose }: LegalModalProps) => {
  const [activeDocument, setActiveDocument] = useState<DocumentType>(null);

  const handleDocumentClick = (docType: DocumentType) => {
    setActiveDocument(docType);
  };

  const handleDocumentClose = () => {
    setActiveDocument(null);
  };

  const getDocumentProps = () => {
    switch (activeDocument) {
      case 'privacy':
        return {
          title: 'Политика конфиденциальности',
          content: <PrivacyPolicyContent />,
          pdfPath: '/documents/privacy-policy.pdf'
        };
      case 'terms':
        return {
          title: 'Пользовательское соглашение',
          content: <TermsOfServiceContent />,
          pdfPath: '/documents/terms-of-service.pdf'
        };
      case 'consent':
        return {
          title: 'Согласие на обработку персональных данных',
          content: <PersonalDataConsentContent />,
          pdfPath: '/documents/personal-data-consent.pdf'
        };
      default:
        return {
          title: '',
          content: <></>,
          pdfPath: ''
        };
    }
  };

  const documentProps = getDocumentProps();
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <Building2 className="w-6 h-6 text-primary" />
            Юридическая информация
          </DialogTitle>
          <DialogDescription>
            Реквизиты и контактные данные правообладателя Medical Mind
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4 space-y-6">
          {/* О компании */}
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-3 text-lg">О компании</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Полное наименование:</strong> Общество с ограниченной ответственностью «ФармиКо»
              </li>
              <li>
                <strong>Краткое наименование:</strong> ООО «ФармиКо»
              </li>
              <li>
                <strong>Товарный знак:</strong> Medical Mind
              </li>
            </ul>
          </div>

          {/* Реквизиты */}
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-3 text-lg">Реквизиты</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>ИНН:</strong> 5433970294</li>
              <li><strong>КПП:</strong> 543301001</li>
              <li><strong>ОГРН:</strong> 1195476028736</li>
              <li><strong>ОКПО:</strong> 38952447</li>
              <li><strong>ОКВЭД:</strong> 46.38.2</li>
            </ul>
          </div>

          {/* Адрес */}
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-3 text-lg flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Адрес
            </h3>
            <p className="text-sm">
              <strong>Юридический адрес:</strong><br />
              630559, Новосибирская область, р.п. Кольцово, д. 12, оф.2
            </p>
          </div>

          {/* Контакты */}
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-3 text-lg">Контакты</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <strong>Email:</strong>
                <a 
                  href="mailto:farmico@list.ru" 
                  className="text-primary hover:underline"
                >
                  farmico@list.ru
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <strong>Телефон:</strong>
                <a 
                  href="tel:+73832021909" 
                  className="text-primary hover:underline"
                >
                  +7 (383) 202-19-09
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary" />
                <strong>Сайт:</strong>
                <a 
                  href="https://energy-quest-lab.lovable.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  energy-quest-lab.lovable.app
                </a>
              </li>
            </ul>
          </div>

          {/* Документы */}
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-3 text-lg flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Документы
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleDocumentClick('privacy')}
                  className="text-primary hover:underline cursor-pointer text-left"
                >
                  Политика конфиденциальности
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleDocumentClick('terms')}
                  className="text-primary hover:underline cursor-pointer text-left"
                >
                  Пользовательское соглашение
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleDocumentClick('consent')}
                  className="text-primary hover:underline cursor-pointer text-left"
                >
                  Согласие на обработку персональных данных
                </button>
              </li>
            </ul>
          </div>

          {/* Футер модального окна */}
          <div className="pt-4 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 ООО «ФармиКо». Все права защищены.
            </p>
          </div>
        </div>
      </DialogContent>

      {activeDocument && (
        <DocumentModal
          isOpen={!!activeDocument}
          onClose={handleDocumentClose}
          title={documentProps.title}
          content={documentProps.content}
          pdfPath={documentProps.pdfPath}
        />
      )}
    </Dialog>
  );
};
