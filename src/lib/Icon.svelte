<script lang="ts">
  export let icon:
    | "cannon"
    | "swashbuckling"
    | "explosive"
    | "carousing"
    | "shiftiness"
    | "move"
    | "coin"
    | "announcement";
  export let number: number | undefined = undefined;
</script>

<span class="icon {icon}">
  {#if number}<span class="icon-number">{number}</span>{/if}
</span>

<style>
  .icon {
    position: relative;
    display: inline-block;
    height: 110px;
    width: 110px;
    background-size: 110px;
  }
  .cannon {
    background-image: url("../assets/cannonballs.png");
  }
  .swashbuckling {
    background-image: url("../assets/crossed_cutlasses.png");
  }
  .explosive {
    background-image: url("../assets/explosion.png");
  }
  .carousing {
    background-image: url("../assets/rum.png");
  }
  .shiftiness {
    background-image: url("../assets/key.png");
  }
  .move {
    background-image: url("../assets/compass.png");
  }
  .coin {
    background-image: url("../assets/doubloon.png");
  }
  .announcement {
    background-image: url("../assets/megaphone.png");
  }

  .icon-number {
    position: absolute;
    bottom: 15px;
    left: 32px;
    font: bold 70px sans-serif;
    -webkit-text-stroke: 2px white;
  }
</style>
