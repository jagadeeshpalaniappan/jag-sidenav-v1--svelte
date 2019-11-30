<script>
  import SideNav from "./SideNav.svelte";

  const items = [
    {
      id: "m1",
      name: "Module 1",
      items: [
        { id: "m1a1", name: "App 1" },
        { id: "m1a2", name: "App 2" },
        { id: "m1a3", name: "App 3" }
      ]
    },
    {
      id: "m1",
      name: "Module 2",
      items: [
        { id: "m2a1", name: "App 1" },
        { id: "m3a2", name: "App 2" },
        { id: "m4a3", name: "App 3" }
      ]
    },
    {
      id: "m1",
      name: "Module 3",
      items: [
        { id: "m3a1", name: "App 1" },
        { id: "m3a2", name: "App 2" },
        { id: "m3a3", name: "App 3" }
      ]
    }
  ];
</script>

<style>
  main {
    font-family: sans-serif;
    text-align: center;
  }
</style>

<main>
	<SideNav items={items} />
</main>