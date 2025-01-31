
import type { Metadata } from 'next';
import './globals.css';
import UpperHeader from '@/components/header/UpperHeader';
import Header from '@/components/header/Header';
import Footer from '@/components/home/Footer';
import Countries from '@/components/home/Countries';
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../style/main.css';
import { Toaster } from "@/components/ui/sonner"


export const metadata: Metadata = {
  title: 'Ataa',
  description: 'مؤسسة العطاء والتنمية الوقفية مؤسسة لا ربحية تعمل في مجال إدارة وتطوير واستشارات الأوقاف ، للقائمين عليها خبرة في هذا المجال تمتد لسنوات عديدة ، تحقق خلالها ولله الحمد نجاحات متميزة في مجال تمكين الواقفين من الاستفادة القصوى من أوقافهم...',
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir='rtl' id='root'>
      {/* Google Tag Manager */}
      <body className="w-full" suppressHydrationWarning={true}>
        <UpperHeader />
        <Header />
        {children}
        <Countries />
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
