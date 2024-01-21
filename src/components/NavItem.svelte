<script lang="ts">
  import { onMount } from 'svelte';
  export let href: string;

  let url = ''
  onMount(() => {
    url = window.location.pathname
  });
</script>

<a class={`${url === href && 'underline'} hover:text-base-content duration-500`} href={href}>
  {href.replace('/', '')}
  </a>
