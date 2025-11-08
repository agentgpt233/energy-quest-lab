import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PersonalDataConsentContent } from "@/components/documents/PersonalDataConsentContent";

const PersonalDataConsent = () => {
  const navigate = useNavigate();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/documents/personal-data-consent.pdf";
    link.download = "personal-data-consent.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm pb-4 mb-6 border-b border-border">
          <div className="flex items-center justify-between gap-4">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Назад
            </Button>
            <h1 className="text-2xl font-bold text-foreground">
              Согласие на обработку персональных данных
            </h1>
            <Button
              onClick={handleDownload}
              className="gap-2"
            >
              <Download className="w-4 h-4" />
              PDF
            </Button>
          </div>
        </div>

        <div className="prose prose-sm max-w-none">
          <PersonalDataConsentContent />
        </div>
      </div>
    </div>
  );
};

export default PersonalDataConsent;
