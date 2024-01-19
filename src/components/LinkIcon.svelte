<script lang="ts">
  import Icon from "@iconify/svelte";
  export let href: string;
  export let icon: string;
</script>

<a {href}>
  <Icon {icon} height={30} class="" />
</a>
