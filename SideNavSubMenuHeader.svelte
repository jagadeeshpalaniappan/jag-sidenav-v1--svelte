<script>
    export let item;
</script>

<div class="sidemenu-sub-menu-header">

{#if item.user}

<div class="sidemenu-sub-menu-header--user-img">
<img src={item.user.imgUrl} alt={item.user.name}/>

</div>

<div class="sidemenu-sub-menu-header--user">
<div>{item.user.name}</div>
<div class="sidemenu-sub-menu-header--user-status">
    <i class="material-icons">check_circle</i>
    <span>{item.user.status}</span>
</div>
</div>


{:else}{item.name}{/if}




</div>
