<script>
  import SideNavMainMenu from "./SideNavMainMenu.svelte";
  import SideNavSubMenu from "./SideNavSubMenu.svelte";
  export let items;
  let selectedMainMenu = items[0];
  let selectedSubMenu = selectedMainMenu.items[0];

  const onSelectMainMenu = e => {
    const mainMenu = e.detail;
    console.log("onSelectMainMenu:mainMenu", mainMenu);
    selectedMainMenu = {
      ...mainMenu,
      hide: !mainMenu.hide
    };
    console.log("onSelectMainMenu:selectedMainMenu", selectedMainMenu);

    items = items.map(item => ({
      ...item,
      active: item.id === selectedMainMenu.id,
      hide: !item.hide && item.id === selectedMainMenu.id
    }));

    console.log("onSelectMainMenu--end", items);
  };
  const onSelectSubMenu = e => {
    console.log("onSelectSubMenu", e.detail);
    selectedSubMenu = { ...e.detail };

    items = items.map(item => {
      if (item.active) {
        const newSubMenuItems = item.items.map(item => ({
          ...item,
          active: item.id === e.detail.id
        }));
        selectedMainMenu = { ...item, items: newSubMenuItems };
        return selectedMainMenu;
      } else {
        return {
          ...item,
          // hide: false,
          items: item.items.map(item => ({
            ...item,
            active: false
          }))
        };
      }
    });

    console.log("selectedMainMenu", selectedMainMenu);
    console.log("items", items);
  };
</script>

  <div class="sidemenu-left-container">

  <SideNavMainMenu items={items} on:selectMenu={onSelectMainMenu}/>
  <SideNavSubMenu item={selectedMainMenu} on:selectMenu={onSelectSubMenu}/>

  </div>



