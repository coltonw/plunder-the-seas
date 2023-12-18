<script lang="ts">
  import type { Card } from "../types";
  // import Icon from "./Icon.svelte";
  // import TaggedText from "./TaggedText.svelte";

  export let card: Card;
  const {
    name,
    type,
    cost,
    resource,
    ability: { cannon },
  } = card;
</script>

<div class={`container ${type}`}>
  <div class="ocean-footer"></div>
  <div class="main-image"></div>
  <div class="name-container">
    <div class="name">{name}</div>
  </div>
  <div class="gap" />
  <div class="ability-container">
    <div class="ability">{name}</div>
  </div>
</div>

<style>
  .container {
    position: relative;
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
    width: 409px;
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
    width: 409px;
    height: 327px;
    background-image: url("../assets/pirate_ship.png");
    background-size: cover;
  }
  .equipment .main-image {
    background-image: url("../assets/cannon.png");
  }
  .crew .main-image {
    background-image: url("../assets/pirate_captain.png");
  }

  .name-container,
  .ability-container {
    position: relative;
    margin: 8px 8px 0 8px;
    padding: 15px;
    border-radius: 32px;
    background: #f4f4f4;
    border: 1px solid #424949;

    box-shadow:
      0 0 0 4px white,
      0 0 0 6px silver,
      0 0 0 7px #424949;
    justify-content: start;
    align-items: center;
  }

  .name-container {
    display: flex;
    padding: 0;
    justify-content: center;
    text-align: center;
    height: 64px;
  }
  .name {
    font: bold 24px sans-serif;
  }

  .ability-container {
    margin: 30px;
    height: 180px;
  }

  .icon-number {
    font: bold 40px sans-serif;
    fill: black;
    stroke: white;
    stroke-width: 2px;
  }

  .gap {
    flex-grow: 1;
  }
</style>
