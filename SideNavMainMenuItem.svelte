<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let item;
  export let bottomStart;

  $: dataTooltip =
    item.tooltip || item.hideLabel ? { "data-tooltip": item.name } : {};

  $: isBootomStart = !!bottomStart;

  const onSelectMenu = e => {
    e.preventDefault();
    dispatch("selectMenu", item);
  };
</script>



<a href 
  class:active={item.active}
  class:tooltip-right={item.tooltip || item.hideLabel}
  { ...dataTooltip }
  class={isBootomStart ? "sidemenu-main-menu-item bottom" : "sidemenu-main-menu-item"}  on:click={onSelectMenu}>
  <i class="material-icons" class:user-rounded={item.user}>{item.icon? item.icon: 'list'}</i>
  {#if !item.hideLabel}{item.name}{/if}
</a>