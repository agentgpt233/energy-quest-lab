import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, X } from "lucide-react";
import { useEffect } from "react";

interface DocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: JSX.Element;
  pdfPath: string;
}

export const DocumentModal = ({ isOpen, onClose, title, content, pdfPath }: DocumentModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = pdfPath.split('/').pop() || 'document.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[900px] max-h-[85vh] p-0 gap-0 overflow-hidden">
        <DialogHeader className="px-6 md:px-10 pt-6 md:pt-10 pb-4 flex-row items-center justify-between space-y-0 border-b">
          <DialogTitle className="text-xl md:text-2xl font-semibold text-[#333] pr-4">
            {title}
          </DialogTitle>
          <Button
            onClick={handleDownload}
            className="bg-[#4CAF50] hover:bg-[#45a049] text-white shrink-0"
            size="sm"
          >
            <Download className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">PDF</span>
          </Button>
        </DialogHeader>
        
        <div className="overflow-y-auto px-6 md:px-10 py-6 max-h-[calc(85vh-140px)]">
          <div className="text-[#555] text-sm md:text-base leading-relaxed space-y-6">
            {content}
          </div>
        </div>

        <div className="px-6 md:px-10 py-4 md:py-6 border-t flex flex-col sm:flex-row gap-3 justify-between">
          <Button
            onClick={onClose}
            variant="outline"
            className="w-full sm:w-auto"
          >
            Закрыть
          </Button>
          <Button
            onClick={handleDownload}
            className="bg-[#4CAF50] hover:bg-[#45a049] text-white w-full sm:w-auto"
          >
            <Download className="w-4 h-4 mr-2" />
            Скачать PDF
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
