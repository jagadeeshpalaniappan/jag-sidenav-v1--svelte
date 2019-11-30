<script>
    import SideNavMainMenuItem from "./SideNavMainMenuItem.svelte";
    export let items;
</script>

<style>
</style>

<main>
	<h1>Main Menu</h1>

    {#if items.length !== 0}
        {#each items as item}
          <SideNavMainMenuItem item={item} />
        {/each}
    {/if}
</main>