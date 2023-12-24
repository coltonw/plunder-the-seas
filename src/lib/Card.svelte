<script lang="ts">
  import type { Card } from "../types";
  import Ability from "./Ability.svelte";
  import Icon from "./Icon.svelte";

  export let card: Card;
  const { name, type, cost, resource, ability, dispose } = card;
</script>

<div class={`container ${type}`}>
  <div class="ocean-footer"></div>
  <div class="main-image"></div>
  <div class="name-container">
    <div class="name">{name}</div>
  </div>
  <div class="cost-container">
    <div class="cost">{cost}</div>
  </div>
  <div class="gap" />
  <div class="ability-container">
    <Ability {type} {ability} />
  </div>
  <div class="resource-container">
    {#each { length: resource } as _}
      <Icon icon="coin" />
    {/each}
    {#if dispose}
      <div class="dispose">❌</div>
    {/if}
  </div>
</div>

<style>
  .container {
    position: relative;
    box-sizing: border-box;
    width: 409px;
    height: 567px;
    font: 20px sans-serif;
    text-wrap: pretty;
    /* text-wrap: balance; */
    display: flex;
    flex-direction: column;
    border: 10px solid white;
    border-radius: 50px;
  }

  .ocean-footer {
    position: absolute;
    width: 389px;
    height: 200px;
    left: 0;
    bottom: 0;
    background-image: url("../assets/ocean_bottom.png");
    background-size: cover;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
  }

  .main-image {
    position: absolute;
    top: 40px;
    left: 0;
    width: 389px;
    height: 327px;
    background-image: url("../assets/pirate_ship.png");
    background-size: cover;
    background-position: center;
  }
  .equipment .main-image {
    background-image: url("../assets/cannon.png");
    background-position: top;
  }
  .crew .main-image {
    background-image: url("../assets/crew.png");
    background-position: top;
  }
  .privateObjective .main-image,
  .publicObjective .main-image {
    background-image: url("../assets/treasure_map.png");
  }
  .publicEvent .main-image {
    background-image: url("../assets/looking_at_horizon.png");
  }

  .name-container,
  .cost-container,
  .ability-container {
    display: flex;
    position: relative;
    margin: 8px 8px 0 8px;
    padding: 0;
    border-radius: 32px;
    background: #f4f4f4;
    border: 1px solid #424949;

    box-shadow:
      0 0 0 4px white,
      0 0 0 6px silver,
      0 0 0 7px #424949;
    justify-content: center;
    align-items: center;
  }

  .name-container {
    padding: 0;
    height: 64px;
    padding-left: 72px;
  }
  .name {
    font: bold 24px sans-serif;
  }

  .cost-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 64px;
    height: 64px;
  }
  .cost {
    font-size: 36px;
    font-weight: bold;
  }

  .ability-container {
    margin: 30px;
    margin-bottom: 60px;
    height: 160px;
  }

  .resource-container {
    position: absolute;
    height: 50px;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: start;
    align-items: start;

    overflow: hidden;
    border-bottom-left-radius: 40px;
  }

  .dispose {
    align-self: center;
    font-size: 35px;
  }

  .gap {
    flex-grow: 1;
  }
</style>
