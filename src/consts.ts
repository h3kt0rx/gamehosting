// This is your config file, place any global data here.
// You can import this data from anywhere in your site by using the `import` keyword.

type Config = {
  title: string;
  description: string;
  lang: string;
  profile: {
    author: string;
    description?: string;
  }
}

type SocialLink = {
  icon: string;
  friendlyName: string; // for accessibility
  link: string;
}

export const siteConfig: Config = {
  title: "GameServer Hosting",
  description: "",
  lang: "en-GB",
  profile: {
    author: "OrtegaTalks",
  }
}

/** 
  These are you social media links. 
  It uses https://github.com/natemoo-re/astro-icon#readme
  You can find icons @ https://icones.js.org/
*/
export const socialLinks: Array<SocialLink> = [
  {
    icon: "mdi:email",
    friendlyName: "email",
    link: "mailto:ortegatalks@gmail.com",
  }
];

export const NAV_LINKS: Array<{ title: string, path: string }> = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "GameHosting List",
    path: "/gamelist.astro",
  },
  {
    title: "GameServer Panel",
    path: "https://panel.ortegatalks.net",
  },
  {
    title: "Contact Us",
    path: "/contactus",
  },
];
