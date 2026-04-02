import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Shreyash Dhage Resume — Next.js Developer | Pune, India",
  description: "Download the resume of Shreyash Dhage, a Next.js developer and AI automation specialist based in Pune, India. 1+ year of production experience.",
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
