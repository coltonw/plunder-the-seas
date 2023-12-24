<script lang="ts">
  import { isNumber, startCase } from "lodash-es";
  import type { Card } from "../types";
  import Icon from "./Icon.svelte";
  import TaggedText from "./TaggedText.svelte";

  export let type: Card["type"];
  export let ability: Card["ability"];
  const { perCrew, custom } = ability;
  const abilityOptions: (keyof Card["ability"])[] = [
    "cannon",
    "swashbuckling",
    "explosive",
    "carousing",
    "shiftiness",
    "move",
    "resource",
  ];
  let and = false;
  const abilityArray: [string, number][] = abilityOptions.flatMap<
    [string, number]
  >((opt) => {
    const cur = ability[opt] as number | undefined;
    if (cur && isNumber(cur)) {
      return [[opt, cur]];
    } else if (cur) {
      and = true;
      return (cur as any as number[]).map<[string, number]>((spl) => [
        opt,
        spl,
      ]);
    }
    return [];
  });
</script>

<div class="container">
  <div class="type">{startCase(type)}</div>
  {#if type === "crew"}<div class="modifier">1x</div>{/if}
  {#if type === "upgrade"}<div class="modifier">+</div>{/if}
  {#each abilityArray as a, i}
    {#if i > 0 && and}+{/if}
    {#if i > 0 && !and}/{/if}
    <Icon icon={a[0]} number={a[1]} />
  {/each}
  {#if custom}
    <div class="custom"><TaggedText text={custom} /></div>
  {/if}
  {#if perCrew}<div class="modifier">x💃</div>{/if}
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 50px;
  }
  .type {
    position: absolute;
    top: 5px;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 16px;
  }
  .modifier {
    margin-right: 15px;
  }
  .custom {
    padding: 10px;
    font-size: 24px;
  }
</style>
