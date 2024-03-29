import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Provider from '@/components/Provider';
import MainContainer from '@/components/MainContainer';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Avaan coek:v',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${inter.className} dark:bg-dark-primary flex justify-center overflow-y-scroll relative`}
      >
        <Provider>
          <Header />
          <MainContainer>{children}</MainContainer>
        </Provider>
      </body>
    </html>
  );
}
