import UserNavigation from "../components/UserNavigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-6">
        <UserNavigation />
        {children}
      </div>
    </>
  );
}
