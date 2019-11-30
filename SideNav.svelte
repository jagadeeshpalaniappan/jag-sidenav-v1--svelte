<script>
    import SideNavMainMenu from "./SideNavMainMenu.svelte";
    import SideNavSubMenu from "./SideNavSubMenu.svelte";
    export let items;

    let selectedItem = items[2];
</script>

<style>
  main {
    font-family: sans-serif;
    text-align: center;
    color: red;
  }
</style>

<main>
	<h1>Apps</h1>

    <SideNavMainMenu items={items} />
    <SideNavSubMenu item={selectedItem} />

</main>