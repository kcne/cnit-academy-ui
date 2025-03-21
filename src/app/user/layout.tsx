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
      <Header />
      <div className="max-w-4xl mx-auto p-6">
        <UserNavigation />
        {children}
      </div>
      <Footer />
    </>
  );
}
