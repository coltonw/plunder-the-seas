<script lang="ts">
  export let icon: string;
  export let number: number | undefined = undefined;
  export let size: "small" | "large" = "large";
</script>

<span class="icon {icon} {size}">
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
  .small {
    height: 32px;
    width: 32px;
    background-size: 32px;
    vertical-align: -7px; /* magic number */
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
  .small .icon-number {
    top: 50%;
    left: 50%;
    bottom: auto;
    transform: translate(-50%, -50%);
    font: bold 24px sans-serif;
    color: white;
    -webkit-text-stroke: 0;
  }
</style>
