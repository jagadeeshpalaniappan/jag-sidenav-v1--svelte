<script>
    import SideNavSubMenuHeader from "./SideNavSubMenuHeader.svelte";
    import SideNavSubMenuItem from "./SideNavSubMenuItem.svelte";
    export let item;
</script>

<style>
  main {
    font-family: sans-serif;
    text-align: center;
    color: red;
  }
</style>

<main>
	<h1>Sub Menu</h1>

    <SideNavSubMenuHeader name={item.name} />

    {#if item.items.length !== 0}
        {#each item.items as item}
        <SideNavSubMenuItem item={item} />
        {/each}
    {/if}
</main>