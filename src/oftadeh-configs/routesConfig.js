import React from "react";
import { Redirect } from "react-router-dom";

import { DashboardPageConfig } from "../pages/dashboard/DashboardPageConfig";
import { AddPostPageConfig } from "../pages/posts/add-post/AddPostPageConfig";
import { AllPostsPageConfig } from "../pages/posts/all-posts/AllPostsPageConfig";
import { CalendarPageConfig } from "../pages/calendar/CalendarPageConfig";

const routeConfigs = [
  ...DashboardPageConfig.routes,
  ...AllPostsPageConfig.routes,
  ...AddPostPageConfig.routes,
  ...CalendarPageConfig.routes
];

const routes = [
  ...routeConfigs,
  {
    component: () => <Redirect to="/pages/errors/error-404" />
  }
  // {
  //   path: "/test",
  //   exact: true,
  //   component: <Example />
  // }
];

export default routes;
