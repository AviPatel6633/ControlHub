
import CardBox from "@/app/components/shared/CardBox";
import React from "react";
import SocialButtons from "../../authforms/SocialButtons";
import Link from "next/link";
import AuthRegister from "../../authforms/AuthRegister";
import type { Metadata } from "next";
import FullLogo from "@/app/(DashboardLayout)/layout/shared/logo/FullLogo";
export const metadata: Metadata = {
  title: "Boxed Register Authentication",
  description: "Generated by create next app",
};

const BoxedRegister = () => {
  return (
    <>
      <div className="relative overflow-hidden h-screen bg-lightprimary dark:bg-darkprimary">
        <div className="flex h-full justify-center items-center px-4">
          <CardBox className="md:w-[450px] w-full border-none">
            <div className="mx-auto mb-6">
              <FullLogo />
            </div>
            <SocialButtons title="or sign up with" />
            <AuthRegister />
            <div className="flex gap-2 text-base text-ld font-medium mt-6 items-center justify-start">
                  <p>Already have an Account?</p>
                  <Link
                    href={"/auth/auth2/login"}
                    className="text-primary text-sm font-medium"
                  >
                    Sign in
                  </Link>
                </div>
          </CardBox>
        </div>
      </div>
    </>
  );
};

export default BoxedRegister;
