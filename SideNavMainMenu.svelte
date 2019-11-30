<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import SideNavMainMenuItem from "./SideNavMainMenuItem.svelte";
  export let items;

  $: topItems = items.filter(item => !item.bottom);
  $: bottomItems = items.filter(item => item.bottom);

  const onSelectMenu = e => {
    dispatch("selectMenu", e.detail);
  };
</script>

<style>
</style>



<div class="sidemenu-main-menu">
  <a href="/" class="sidemenu-main-menu-item">
    <i class="material-icons">local_play</i>
    Logo
  </a>

  {#if topItems.length}
    {#each topItems as item}
    <SideNavMainMenuItem item={item} on:selectMenu={onSelectMenu} />
  {/each}
  {/if}



{#if bottomItems.length}
  {#each bottomItems as item, i}
    <SideNavMainMenuItem item={item} on:selectMenu={onSelectMenu} bottomStart={i===0}/>
  {/each}

{/if}

</div>