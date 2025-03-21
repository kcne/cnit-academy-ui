import UserNavigation from "../components/UserNavigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-6">
        <Header />
        <UserNavigation />
        <Footer />
        {children}
      </div>
    </>
  );
}
