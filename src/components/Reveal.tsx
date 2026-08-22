import { useReveal } from "@/hooks/useReveal";

interface RevealProps {
  children: React.ReactNode;
  /** Задержка появления, мс */
  delay?: number;
}

/**
 * Обёртка для появления секции при входе во вьюпорт.
 * Анимируются только opacity и transform, срабатывает один раз.
 */
export const Reveal = ({ children, delay = 0 }: RevealProps) => {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? "reveal-in" : ""}`}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
};
