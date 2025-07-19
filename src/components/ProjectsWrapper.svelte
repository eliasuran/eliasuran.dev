<script lang="ts">
  import Icon from "@iconify/svelte"
  import { text } from "../lib/styles"
  import { projects } from "../lib/projects"
  import { technologies } from "../lib/technologies"
  import { loadIcons } from "@iconify/svelte"

  let selectedProject: string = projects[Math.floor(Math.random()*projects.length)].id

  const icons = Object.values(technologies).map((icon) => icon)
  loadIcons(icons)

  const workProjects = projects.filter((p) => p.type === "work")
  const personalProjects = projects.filter((p) => p.type === "personal")

  const projectsSections = [
    {"title":"Work","projects":workProjects},
    {"title":"Personal projects","projects":personalProjects},
  ]
</script>

<div class="flex flex-col gap-2">
  {#each projectsSections as section}
    <h2>{section.title}</h2>
    {#each section.projects as project}
      <div class="flex justify-between">
        <div class="w-full">
          <button 
            on:click={() => selectedProject = project.id}
            class={`cursor-pointer transition-all ${text.default} ${selectedProject === project.id && "text-primary"}`}
          >
            {project.title}
          </button>
          {#if selectedProject === project.id}
            <div class="font-normal transition-all duration-300 animate-slideUp flex flex-col gap-2">
              <p>{project.desc}</p>
              <div class="flex justify-between">
                <div class="flex gap-2">
                  {#each project.technologies as technology}
                    <Icon class="text-lg" icon={technologies[technology]} />
                  {/each}
                </div>
                {#if project.repo}
                  <a target="_blank" aria-label={`Link to ${project.title} github repo`} href={project.repo}>
                    <Icon class={`self-end text-2xl ${text.default}`} icon="mdi:github" />
                  </a>
                {/if}
                {#if project.url}
                  <a class={text.default} target="_blank" aria-label={`Link to ${project.title}`} href={project.url}>
                    Visit
                  </a>
                {/if}
              </div>
            </div>
          {/if}
        </div>
      </div>
    {/each}
  {/each}
  <a class={text.default} target="_blank" href="https://github.com/eliasuran?tab=repositories">
    More projects..
  </a>
</div>
