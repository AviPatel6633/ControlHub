export interface ChildItem {
  id?: number | string;
  name?: string;
  icon?: any;
  children?: ChildItem[];
  item?: any;
  url?: any;
  color?: string;
  disabled?:boolean,
  subtitle?:string,
  badge?:boolean,
  badgeType?:string,
}

export interface MenuItem {
  heading?: string;
  name?: string;
  icon?: any;
  id?: number;
  to?: string;
  items?: MenuItem[];
  children?: ChildItem[];
  url?: any;
  disabled?:boolean,
  subtitle?:string,
  badgeType?:string,
  badge?:boolean,
}


import { uniqueId } from "lodash";

const SidebarContent: MenuItem[] = [
  {
    // heading: "Menu",
    children: [
      {
        name: "Dashboard",
        icon: 'tabler:layout-grid',
        id: uniqueId(),
        url: "/admin",
      },
      {
        name: "User",
        icon: 'tabler:user-circle',
        id: uniqueId(),
        children: [
          {
            id: uniqueId(),
            name: "Manage Users",
            url: "/admin/users",
          },
          {
            id: uniqueId(),
            name: "User Profile",
            url: "/admin/users/user-profile",
          },
          {
            id: uniqueId(),
            name: "Add Users",
            url: "/admin/users/add-user",
          },
          {
            id: uniqueId(),
            name: "Edit Users",
            url: "/admin/users/edit-user",
          },
        ]
      },
      {
        name: "SEO",
        id: uniqueId(),
        icon: "tabler:app-window",
        children: [
          {
            id: uniqueId(),
            name: "Manage SEO",
            url: "/admin/seo",
          },
          {
            id: uniqueId(),
            name: "Add SEO",
            url: "/admin/seo/add-seo",
          },
          {
            id: uniqueId(),
            name: "Edit SEO",
            url: "/admin/seo/edit-seo",
          },
        ],
      },
      {
        name: "Blog",
        id: uniqueId(),
        icon: "tabler:chart-donut-3",
        children: [
          {
            id: uniqueId(),
            name: "Manage Blog",
            url: "/admin/blog",
          },
          {
            id: uniqueId(),
            name: "Add Blog",
            url: "/admin/blog/add-blog",
          },
          {
            id: uniqueId(),
            name: "Edit Blog",
            url: "/admin/blog/edit-blog",
          },
        ],
      },
      {
        name: "Leads",
        id: uniqueId(),
        icon: "tabler:list-details",
        children: [
          {
            id: uniqueId(),
            name: "Manage Leads",
            url: "/admin/lead",
          },
        ],
      },
    ],
  }
];

export default SidebarContent;
