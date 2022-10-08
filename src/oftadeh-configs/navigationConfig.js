// import { MaterialUIComponentsNavigation } from "../pages/documentation/material-ui-components/MaterialUIComponentsNavigation";

const navigationConfig = [
  {
    id: "Main",
    title: "MAIN",
    type: "group",
    children: [
      {
        id: "dashboard",
        title: "Dashboard",
        type: "item",
        icon: "apps",
        url: "/",
        exact: true
      },
      {
        id: "posts",
        title: "Posts",
        type: "collapse",
        icon: "file_copy",
        badge: {
          title: "2",
          bg: "#525E8A",
          fg: "#FFFFFF"
        },
        children: [
          {
            id: "all posts",
            title: "All Posts",
            type: "item",
            url: "/pages/posts",
            exact: true
          },
          {
            id: "add post",
            title: "Add Post",
            type: "item",
            url: "/pages/posts/add-post",
            exact: true
          }
        ]
      },
      {
        id: "calendar",
        title: "Calendar",
        type: "item",
        icon: "event",
        url: "/pages/calendar",
        exact: true
      }
    ]
  },

  {
    id: "divider-1",
    type: "divider"
  }
];

export default navigationConfig;
