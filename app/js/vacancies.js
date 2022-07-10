$(function(){
  document.querySelectorAll(".custom-select").forEach(item=>{
    $(item).select2({
         minimumResultsForSearch: -1,
         dropdownParent: item.parentNode,
    });
  })
})