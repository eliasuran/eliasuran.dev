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
      title: "License generator",
      repo: "https://github.com/eliasuran/license-generator",
      desc: "Generate any license for your github project from the command line",
    },
    {
      title: "mpuVim",
      repo: "https://github.com/eliasuran/mpuVim",
      desc: "Personal Neovim configuration built with lazy package manager",
    },
  ];
}
