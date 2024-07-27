export interface Project {
  title: string;
  repo: string;
  desc: string;
  url?: string;
}

export function getProjects(): Project[] {
  return [
    {
      title: "konfidensurl",
      repo: "https://github.com/Elvinos33/konfidensurl",
      desc: "URL shortener for Konfidens",
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
      title: "file-explorer",
      repo: "https://github.com/eliasuran/if-file-explorer-was-good",
      desc: "Fast file explorer for mac and windows written in rust and typescript with tauri",
    },
    {
      title: "mpuVim",
      repo: "https://github.com/eliasuran/mpuVim",
      desc: "Personal Neovim configuration built with lazy package manager",
    },
    {
      title: "terminal-spotify",
      repo: "https://github.com/eliasuran/terminal-spotify",
      desc: "Control spotify through a with a cli written in rust",
    },
  ];
}
