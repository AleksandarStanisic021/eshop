import { APP_NAME } from "@/lib/constants";

const FooterPage = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full border-t">
      <div className="p-5 flex-center">
        {APP_NAME} {currentYear} All Rights Reserved
      </div>
    </footer>
  );
};

export default FooterPage;
