// Dragula
$(function() {
  dragula([$('#dragula-left')[0], $('#dragula-right')[0]], {
    revertOnSpill: true
  });

  // Copying
  dragula([$('#dragula-left-copy')[0], $('#dragula-right-copy')[0]], {
    copy: true
  });

  $.each($('.dragula-left-drag-handles'), function(index, el) {
    // Drag handle
    console.log(el)
    dragula([el], {
      moves: function (el, container, handle) {
        return handle.classList.contains('handle');
      }
    });
  });

  $.each($('.dragula-left-drag-handles-main-topics'), function(index, el) {
    // Drag handle
    console.log(el)
    dragula([el], {
      moves: function (el, container, mainTopicHandle) {
        return mainTopicHandle.classList.contains('main-topic-handle');
      }
    });
  });

  


});

// Sortable.js
$(function() {
  Sortable.create(document.getElementById('sortable-1'), { animation: 150 });
  Sortable.create(document.getElementById('sortable-2'), { animation: 150 });
  Sortable.create(document.getElementById('sortable-3'), { animation: 150 });
  Sortable.create(document.getElementById('sortable-4'), {
    animation: 150,
    handle: '.ion'
  });
});
