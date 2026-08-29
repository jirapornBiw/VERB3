import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "กริยา 3 ช่อง — ค้นหาคำกริยาอังกฤษได้ทุกช่อง", description: "ค้นหากริยาอังกฤษ 3 ช่องจากคำช่อง 1, 2 หรือ 3 พร้อมความหมายภาษาไทยและตัวอย่างประโยค", icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="th"><body>{children}</body></html>; }
