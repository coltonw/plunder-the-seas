<script lang="ts">
  import Icon from "./Icon.svelte";

  export let text: string;
  const textSplit = text.split(/[\[\]]/) as string[];
  const iconOptions: string[] = [
    "cannon",
    "swashbuckling",
    "explosive",
    "carousing",
    "shiftiness",
    "move",
    "coin",
    "announcement",
  ];
</script>

{#each textSplit as part, i}
  {#if part.split(":").length > 1 && iconOptions.includes(part.split(":")[0])}
    <Icon
      icon={part.split(":")[0]}
      number={parseInt(part.split(":")[1], 10)}
      size="small"
    />
  {:else if iconOptions.includes(part)}
    <Icon icon={part} size="small" />
  {:else if part === "strength"}
    💪
  {:else if part === "creativity"}
    🎨
  {:else if part === "intelligence"}
    🧠
  {:else if part === "space"}
    🚀
  {:else if part === "br"}
    <br />
  {:else if part === "hr"}
    <hr />
  {:else if i % 2 == 1}
    {`[${part}]`}
  {:else}
    {part}
  {/if}
{/each}
