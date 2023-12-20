<script lang="ts">
  import type { Card } from "../types";
  import Icon from "./Icon.svelte";
  // import TaggedText from "./TaggedText.svelte";

  export let type: Card["type"];
  export let ability: Card["ability"];
  const {
    cannon,
    swashbuckling,
    explosive,
    carousing,
    shiftiness,
    move,
    resource,
    perCrew,
    custom,
  } = ability;
</script>

<div class="container">
  {#if type === "crew"}<div class="modifier">1x</div>{/if}
  {#if cannon}
    <Icon icon="cannon" number={cannon} />
  {/if}
  {#if swashbuckling}
    {#if cannon}/{/if}
    <Icon icon="swashbuckling" number={swashbuckling} />
  {/if}
  {#if explosive}
    {#if cannon || swashbuckling}/{/if}
    <Icon icon="explosive" number={explosive} />
  {/if}
  {#if carousing}
    {#if cannon || swashbuckling || explosive}/{/if}
    <Icon icon="carousing" number={carousing} />
  {/if}
  {#if shiftiness}
    {#if cannon || swashbuckling || explosive || carousing}/{/if}
    <Icon icon="shiftiness" number={shiftiness} />
  {/if}
  {#if move}
    {#if cannon || swashbuckling || explosive || carousing || shiftiness}/{/if}
    <Icon icon="move" number={move} />
  {/if}
  {#if resource}
    {#if cannon || swashbuckling || explosive || carousing || shiftiness || move}/{/if}
    <Icon icon="coin" number={resource} />
  {/if}
  {#if custom}
    <div class="custom">{custom}</div>
  {/if}
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 50px;
  }
  .modifier {
    margin-right: 15px;
  }
  .custom {
    padding: 10px;
    font-size: 20px;
  }
</style>
