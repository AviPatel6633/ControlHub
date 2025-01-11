import AccountSettingIndex from "@/app/components/theme-pages/account-settings";
import BreadcrumbComp from "../../layout/shared/breadcrumb/BreadcrumbComp";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Account Settings Page",
  description: "Generated by create next app",
};

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Account Setting",
  },
];
const Accountsettings = () => {
  return (
    <>
      <BreadcrumbComp title="Account Setting" items={BCrumb} />
      <AccountSettingIndex />
    </>
  );
};

export default Accountsettings;
