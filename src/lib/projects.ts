import type { Technologies } from "./technologies";

export interface Project {
  id: string,
  title: string;
  repo?: string;
  desc: string;
  url?: string;
  technologies: Technologies[];
  type: "personal" | "work"
}

export const projects: Project[] =
[
  {
    id: "prokarimi",
    title: "Prokarimi",
    desc: "Backend developer & DevOps engineer for microbiota testing and results application",
    technologies: ["aws", "postgres", "python"],
    type: "work"
  },
  {
    id: "langory",
    title: "Langory",
    desc: "Fullstack developer & DevOps engineer for AI story and language learning application",
    technologies: ["ts", "react", "aws", "postgres", "python"],
    type: "work"
  },
  {
    id: "symetrisk",
    title: "Symetrisk",
    desc: "Fullstack developer & DevOps engineer for real time accounting data application for banks",
    technologies: ["ts", "react", "aws", "postgres", "python"],
    type: "work",
    url: "https://symetrisk.com"
  },
  {
    id: "inschool_google_calendar_integration",
    title: "InSchool Google Calendar Integration",
    repo: "https://github.com/eliasuran/inschool_google_calendar_integration",
    desc: "Authorizing and fetching data from Visma InSchool, and creating timetable events in directly in Google Calendar",
    technologies: ["python"],
    type: "personal",
  },
  {
    id: "konfidensurl",
    title: "konfidensurl",
    repo: "https://github.com/Elvinos33/konfidensurl",
    desc: "Backend developer on a url shortener for journal application Konfidens",
    technologies: ["ts", "react", "prisma"],
    type: "personal",
  },
  {
    id: "gomon",
    title: "gomon",
    repo: "https://github.com/eliasuran/gomon",
    desc: "Automatically restart go http server when changing the file",
    technologies: ["go"],
    type: "personal",
  },
  {
    id: "mpuvim",
    title: "mpuVim",
    repo: "https://github.com/eliasuran/mpuVim",
    desc: "Personal Neovim configuration built with lazy package manager",
    technologies: ["lua"],
    type: "personal",
  },
  {
    id: "terminalspotify",
    title: "terminal-spotify",
    repo: "https://github.com/eliasuran/terminal-spotify",
    desc: "Control spotify through a terminal interface written in rust",
    technologies: ["rust"],
    type: "personal",
  },
];
