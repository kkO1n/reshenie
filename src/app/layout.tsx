import type { Metadata } from "next";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import "./globals.css";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "ООО «РЕШЕНИЕ» | Поставки материалов для реставрации и капитального ремонта",
  description:
    "Комплексные поставки материалов для реставрации и капитального ремонта: подбор, техническое сопровождение, логистика и поддержка проекта.",
  keywords: [
    "реставрация",
    "капитальный ремонт",
    "поставка материалов",
    "техническое сопровождение",
    "ООО РЕШЕНИЕ",
    "строительные материалы"
  ]
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ru">
      <body className="overflow-x-hidden font-[var(--font-body)]">
        <a
          href="#main-content"
          className="focus-ring sr-only left-4 top-4 z-50 rounded-md bg-white px-3 py-2 text-sm font-semibold text-brand-900 shadow-panel focus:not-sr-only"
        >
          Перейти к основному контенту
        </a>
        {children}
      </body>
    </html>
  );
}
