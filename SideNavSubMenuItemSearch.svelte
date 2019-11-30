<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let item;

  const onSearch = e => {
    dispatch("search", e.target.value);
  };
</script>
<div class="sidemenu-sub-menu-item">
    <input type="text" class=" sidemenu-sub-menu-item--search" placeholder="Search"  on:input={onSearch}/>
</div>