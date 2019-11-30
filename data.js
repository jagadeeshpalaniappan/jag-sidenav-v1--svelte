import icons from "./icons";
const bottomItems = [
  // {
  //   id: "b1",
  //   name: "Help",
  //   icon: "help",
  //   hideLabel: true,
  //   bottom: true
  // },
  {
    id: "b2",
    name: "App Settings",
    icon: "settings",
    hideLabel: true,
    bottom: true,
    hideSearch: true,
    items: [
      { id: "s1", name: "Setting 1", icon: "settings" },
      { id: "s2", name: "Setting 2", icon: "settings" },
      { id: "s3", name: "Setting 3", icon: "settings" }
    ]
  },
  {
    id: "b3",
    name: "User",
    icon: "person",
    hideLabel: true,
    bottom: true,
    hideSearch: true,
    user: {
      name: "Jagadeesh Palaniappan",
      status: "Available",
      imgUrl:
        "https://raw.githubusercontent.com/jagadeeshpalaniappan/jagadeeshpalaniappan.github.io/master/assets/img/jag/hero-sm.jpg"
    },
    items: [
      { id: "b3o1", name: "My Profile", icon: "perm_contact_calendar" },
      { id: "b3o2", name: "My Favorites", icon: "favorite" },
      { id: "b3o3", name: "User Settings", icon: "perm_data_setting" },
      { id: "b3o4", name: "Change Password", icon: "lock_open", divider: true },
      { id: "b3o5", name: "Logout", icon: "exit_to_app" }
    ]
  }
];

const modules = ["list", "polymer", "language", "work_outline"];

const topItems = modules.map((icon, i) => ({
  id: `m${i}`,
  name: `Module ${i}`,
  icon,
  active: i === 0,
  items: icons.slice(i + 1 * 100, i + 1 * 130).map((icon, idx) => ({
    id: `m1a${idx}`,
    name: `App Menu${idx}`,
    icon,
    active: i === 0 && idx === 2
  }))
}));

const items = [...topItems, ...bottomItems];

export default {
  items
};
