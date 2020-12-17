let classes = {};

document.querySelectorAll('input').forEach(($el) => {
  $el.addEventListener('click', () => {
    if ($el.checked) classes[$el.id] = 1;
    else classes[$el.id] = 0;
    let sel = '';
    Object.keys(classes).forEach((k) => {
      if (classes[k] == 1)
        sel += '.' + k;
    });
    document.querySelectorAll('tbody tr').forEach((t) => t.classList.add('hidden'));
    document.querySelectorAll('tbody tr' + sel).forEach((t) => t.classList.remove('hidden'));
  }, false)
})