function addNewItem () {
    let userInput = $('#shopping-list-entry').val();
    $('.shopping-list').append(`<li>
    <span class="shopping-item">${userInput}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`);
  $('#shopping-list-entry').val('');
};

function checkItem () {
    $(this).closest('li').children('.shopping-item').toggleClass('shopping-item__checked');
};

function deleteItem () {
    $(this).closest('li').remove();
}

$(function () {
    $('#js-shopping-list-form').on('click', 'button', function(event){
        event.preventDefault();
        addNewItem();
    });

    $('.shopping-list').on('click', '.shopping-item-toggle', checkItem);
    
    $('.shopping-list').on('click', '.shopping-item-delete', deleteItem);

});
