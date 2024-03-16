// @ts-nocheck
// @ts-ignore

import React from "react"; // Import React if you're using JSX
import {
  BetweenHorizonalEndIcon,
  BookDashedIcon,
  CloudLightning,
  Layout,
  ListChecksIcon,
  Share2,
  Users2,
  Magnet,
  Mailbox,
  BookCopyIcon,
} from "lucide-react";
import { SidebarItem } from "./types";

export const AdminSidebarItems: SidebarItem[] = [
  {
    name: "Dashboard",
    url: "/",
    icon: Layout,
  },
  {
    name: "User Management",
    url: "/users",
    icon: Users2,
  },
  {
    name: "Plans & Pricing",
    url: "/plans-pricing",
    icon: BetweenHorizonalEndIcon,
  },
  {
    name: "Support",
    url: "/support",
    icon: CloudLightning,
  },
  {
    name: "Features Request",
    url: "/features-request",
    icon: ListChecksIcon,
  },
  {
    name: "Affiliate",
    url: "/affiliate",
    icon: Share2,
  },
  {
    name: "Landing Page Builder",
    url: "/landing-page",
    icon: BookDashedIcon,
  },
  {
    name: "Lead Magnet Builder",
    url: "/lead-magnet",
    icon: Magnet,
  },
  {
    name: "Sales Page Builder",
    url: "/sales-page",
    icon: Magnet,
  },
  {
    name: "Email Marketing",
    url: "/email-marketing",
    icon: Mailbox,
  },
  {
    name: "Blogs",
    url: "/blogs",
    icon: BookCopyIcon,
  },
];
