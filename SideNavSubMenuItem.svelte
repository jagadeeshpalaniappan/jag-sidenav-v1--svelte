<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let item;

  const onSelectMenu = e => {
    e.preventDefault();
    dispatch("selectMenu", item);
  };
</script>

 <a href class="{item.active ? 'sidemenu-sub-menu-item active' : 'sidemenu-sub-menu-item'}" on:click={onSelectMenu}>
  <i class="material-icons">{item.icon ? item.icon: 'bar_chart'} </i>{item.name}
 </a>