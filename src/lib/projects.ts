import type { Technologies } from "./technologies";

export interface Project {
  title: string;
  repo: string;
  desc: string;
  url?: string;
  technologies: Technologies;
}

export const projects: Project[] =
[
  {
    title: "konfidensurl",
    repo: "https://github.com/Elvinos33/konfidensurl",
    desc: "URL shortener for Konfidens",
    technologies: ["ts", "react"]
  },
  {
    title: "gomon",
    repo: "https://github.com/eliasuran/gomon",
    desc: "Automatically restart go http server when changing the file",
    technologies: ["go"]
  },
  {
    title: "ufc-api",
    repo: "https://github.com/eliasuran/ufc-api",
    desc: "Web scraper and api for ufc.com",
    technologies: ["go", "svelte", "astro", "ts"]
  },
  {
    title: "file-explorer",
    repo: "https://github.com/eliasuran/if-file-explorer-was-good",
    desc: "Fast file explorer for mac and windows written in rust and typescript with tauri",
    technologies: ["rust", "ts", "react"]
  },
  {
    title: "mpuVim",
    repo: "https://github.com/eliasuran/mpuVim",
    desc: "Personal Neovim configuration built with lazy package manager",
    technologies: ["lua"]
  },
  {
    title: "terminal-spotify",
    repo: "https://github.com/eliasuran/terminal-spotify",
    desc: "Control spotify through a terminal interface written in rust",
    technologies: ["rust"]
  },
];
