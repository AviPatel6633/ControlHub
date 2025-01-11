import React from 'react'
import BreadcrumbComp from '@/app/(adminpanel)/components/layout/shared/breadcrumb/BreadcrumbComp';
import CardBox from "@/app/components/shared/CardBox";

const page = () => {
  return (
    <div>
      <BreadcrumbComp title="User Profile" />
      <CardBox>
        <h1>Users</h1>
      </CardBox>
    </div>
  )
}

export default page