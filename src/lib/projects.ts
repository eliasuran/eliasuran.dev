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
      title: "License Generator",
      repo: "https://github.com/eliasuran/license-generator",
      desc: "Generate a license for github projects from command line",
    },
    {
      title: "Workout app",
      repo: "https://github.com/eliasuran/gym",
      desc: "Track your workouts and progress in the minimum amount of clicks",
      url: "https://mpu-gym.vercel.app",
    },
    {
      title: "mpuVim",
      repo: "https://github.com/eliasuran/mpuVim",
      desc: "Personal Neovim configuration built with lazy package manager",
    },
  ];
}
