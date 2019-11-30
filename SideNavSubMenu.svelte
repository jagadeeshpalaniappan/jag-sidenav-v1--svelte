<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  import SideNavSubMenuHeader from "./SideNavSubMenuHeader.svelte";
  import SideNavSubMenuItemSearch from "./SideNavSubMenuItemSearch.svelte";
  import SideNavSubMenuItem from "./SideNavSubMenuItem.svelte";
  export let item;

  $: filteredItems = item.items;

  const onSelectMenu = e => {
    dispatch("selectMenu", e.detail);
  };

  const onSearch = e => {
    const searchKeyword = e.detail.toLowerCase().trim();
    console.log("onSearch", searchKeyword);
    if (searchKeyword && searchKeyword !== "") {
      filteredItems = item.items.filter(item =>
        item.name.toLowerCase().startsWith(searchKeyword)
      );
    } else {
      filteredItems = [...item.items];
    }
  };
</script>



<div class="sidemenu-sub-menu" class:hide={!item.show}>
  <SideNavSubMenuHeader item={item}/>
  <div class="sidemenu-sub-menu-body">

    {#if !item.hideSearch}<SideNavSubMenuItemSearch on:search={onSearch}/>{/if}

    {#each filteredItems as item}
      <SideNavSubMenuItem item={item} on:selectMenu={onSelectMenu}/>
    {/each}

  </div>
</div>