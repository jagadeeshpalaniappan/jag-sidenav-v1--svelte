<script>
  import SideNav from "./SideNav.svelte";
  import Main from "./Main.svelte";
  import data from "./data";
</script>

<body class="sidemenu">
  <SideNav items={data.items} />
  <Main/>
</body>