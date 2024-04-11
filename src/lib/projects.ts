export interface Project {
  title: string;
  repo: string;
  desc: string;
  url?: string;
}

export async function getProjects(): Promise<Project[]> {
  return [
    {
      title: "e-stats",
      repo: "https://github.com/ivermoka/e-stats",
      desc: "Session logging and statistics for Elvebakken VGS esport",
      url: "https://e-stats.no",
    },
    {
      title: "gomon",
      repo: "https://github.com/eliasuran/gomon",
      desc: "Automatically restart go http server when changing the file",
    },
    {
      title: "ufc-api",
      repo: "https://github.com/eliasuran/ufc-api",
      desc: "Web scraper and api for ufc.com",
    },
    {
      title: "mpuVim",
      repo: "https://github.com/eliasuran/mpuVim",
      desc: "Personal Neovim configuration built with lazy package manager",
    },
    {
      title: "konfidensurl",
      repo: "https://github.com/Elvinos33/konfidensurl",
      desc: "URL shortener for Konfidens",
    },
    {
      title: "terminal-spotify",
      repo: "https://github.com/eliasuran/terminal-spotify",
      desc: "Control spotify through a with a cli written in rust",
    },
  ];
}
