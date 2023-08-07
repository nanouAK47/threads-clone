export const sidebarLinks = [
  {
    imgURL: "/home.svg",
    route: "/",
    label: "Accueil",
  },
  {
    imgURL: "/search.svg",
    route: "/search",
    label: "Rechercher",
  },
  {
    imgURL: "/heart.svg",
    route: "/activity",
    label: "Activité",
  },
  {
    imgURL: "/create.svg",
    route: "/create-thread",
    label: "Créer un thread",
  },
  {
    imgURL: "/community.svg",
    route: "/communities",
    label: "Communautés",
  },
  {
    imgURL: "/user.svg",
    route: "/profile",
    label: "Profil",
  },
];

export const profileTabs = [
  { value: "threads", label: "Threads", icon: "/reply.svg" },
  { value: "replies", label: "Réponses", icon: "/members.svg" },
  { value: "tagged", label: "Tagué", icon: "/tag.svg" },
];

export const communityTabs = [
  { value: "threads", label: "Threads", icon: "/reply.svg" },
  { value: "members", label: "Members", icon: "/members.svg" },
  { value: "requests", label: "Requests", icon: "/request.svg" },
];
