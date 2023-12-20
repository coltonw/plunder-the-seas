<script lang="ts">
  import Card from "./Card.svelte";
  import cards from "../cards.yaml";
</script>

<div class="cards">
  {#each cards as card}
    <Card {card} />
  {/each}
</div>

<style>
  .cards {
    display: flex;
    flex-wrap: wrap;
    min-height: 1134px; /* due to a weird limitation where you need at least 2 rows in TTS */
  }
</style>
