<script lang="ts">
  import Icon from "@iconify/svelte"
  import { text } from "../lib/styles"
  import { projects } from "../lib/projects"
  import { technologies } from "../lib/technologies"
  import { loadIcons } from "@iconify/svelte"

  let selectedProject = null as number | null;

  function setSelectedProject(index: number) {
    selectedProject === index ? selectedProject = null : selectedProject = index
  }

  const icons = Object.values(technologies).map((icon) => icon)
  loadIcons(icons)
</script>

<div class="flex flex-col gap-2">
  {#each projects as project, index}
    <div class="flex justify-between">
      <div class="w-full">
        <button 
          on:click={() => setSelectedProject(index)}
          class={`cursor-pointer transition-all ${text.default} ${selectedProject === index && "text-primary"}`}
        >
          {project.title}
        </button>
        {#if selectedProject === index}
          <div class="font-normal transition-all duration-300 animate-slideUp flex flex-col gap-2">
            <p>{project.desc}</p>
            <div class="flex justify-between">
              <div class="flex gap-2">
                {#each project.technologies as technology}
                  <Icon class="text-lg" icon={technologies[technology]} />
                {/each}
              </div>
              <a target="_blank" aria-label={`Link to ${project.title} github repo`} href={project.repo}>
                <Icon class={`self-end text-2xl ${text.default}`} icon="mdi:github" />
              </a>
            </div>
          </div>
        {/if}
      </div>
    </div>
  {/each}
</div>
