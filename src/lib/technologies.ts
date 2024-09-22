export type AvailableTechnologies = "ts" | "js" | "rust" | "go" | "python" | "lua" | "react" | "svelte" | "astro"
export type Technologies = AvailableTechnologies[]

export interface Techonology  {
  name: AvailableTechnologies;
  icon: string;
}

export const technologies: Techonology[] = [
  { name: "js", icon: "vscode-icons:file-type-js-official" },
  { name: "ts", icon: "logos:typescript-icon" },
  { name: "rust", icon: "logos:rust" },
  { name: "go", icon: "logos:go" },
  { name: "python", icon: "logos:python" },
  { name: "lua", icon: "logos:lua" },
  { name: "react", icon: "logos:react" },
  { name: "svelte", icon: "logos:svelte-icon" },
  { name: "astro", icon: "logos:astro-icon" }
]
