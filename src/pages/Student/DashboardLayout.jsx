import React from "react";
import { Outlet } from "react-router-dom";
import StudentNavbar from "../../components/StudentNavbar";
import CategoryNav from "./CategoryNav";
import Footer from "../../components/Footer";
import BreadCrumNav from "./BreadCrumNav";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <StudentNavbar />
      <BreadCrumNav />
      <CategoryNav />
      {/* the main content goes here */}
      <>
        <Outlet />
      </>
      <Footer />
    </div>
  );
}