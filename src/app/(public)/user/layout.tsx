import UserNavigation from "../../components/UserNavigation";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Main Content */}

      <UserNavigation />
      {children}
    </>
  );
}
