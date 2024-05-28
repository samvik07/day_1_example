import UserNav from "@/components/UserNav";
 
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <main className="flex">
        <UserNav/>
        <div className="w-full max-w-6xl">
          {children}
        </div>
       </main>
    
    );
  }