
import type { Metadata } from 'next';
import './globals.css';
import UpperHeader from '@/components/header/UpperHeader';
import Header from '@/components/header/Header';
import Footer from '@/components/home/Footer';
import Countries from '@/components/home/Countries';
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../style/main.css';
import { Toaster } from "@/components/ui/sonner"
import logo from '../assets/images/home/logo.png'





export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Ataa',
    description: 'مؤسسة العطاء والتنمية الوقفية مؤسسة لا ربحية تعمل في مجال إدارة وتطوير واستشارات الأوقاف ، للقائمين عليها خبرة في هذا المجال تمتد لسنوات عديدة ، تحقق خلالها ولله الحمد نجاحات متميزة في مجال تمكين الواقفين من الاستفادة القصوى من أوقافهم...',
    keywords: "Ataa , donation , Ataa , Ataa ,Ataa",
    openGraph: {
      title: "Ataa",
      description: 'مؤسسة العطاء والتنمية الوقفية مؤسسة لا ربحية تعمل في مجال إدارة وتطوير واستشارات الأوقاف ، للقائمين عليها خبرة في هذا المجال تمتد لسنوات عديدة ، تحقق خلالها ولله الحمد نجاحات متميزة في مجال تمكين الواقفين من الاستفادة القصوى من أوقافهم...',
      url: 'https://ataa-beryl.vercel.app/',
      siteName: "Ataa",
      // images: [
      //   {
      //     url: {logo.src},
      //     width: 1200,
      //     height: 630,
      //     alt: 'Ataa',
      //   },
      // ],
      type: 'website',
      locale: 'ar_EG',
    },
  };
}

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
