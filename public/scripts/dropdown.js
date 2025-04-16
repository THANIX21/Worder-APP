export function initCustomDropdowns() {
  const toggleDropdown = (element) => {
    const dropdown = element.nextElementSibling;
    dropdown?.classList.toggle('hidden');
  };

  const selectOption = (option) => {
    const dropdown = option.closest('.custom-dropdown');
    if (!dropdown) return;

    const selected = dropdown.querySelector('.selected-option');
    if (selected) {
      selected.textContent = option.textContent || '';
    }

    const dropdownList = dropdown.querySelector('.dropdown-options');
    dropdownList?.classList.add('hidden');
    const event = new CustomEvent('dropdownChange', {
      detail: {
        id: option.dataset.id,
        desc: option.textContent
      },
      bubbles: true,
    });

    dropdown.dispatchEvent(event);
  };

  document.querySelectorAll('.selected-option').forEach((el) => {
    el.onclick = () => toggleDropdown(el);
  });

  document.querySelectorAll('.dropdown-options li').forEach((li) => {
    li.onclick = () => selectOption(li);
  });

  window.addEventListener('click', (e) => {
    const target = e.target;
    document.querySelectorAll('.custom-dropdown').forEach((drop) => {
      if (!drop.contains(target)) {
        const options = drop.querySelector('.dropdown-options');
        options?.classList.add('hidden');
      }
    });
  });
}

initCustomDropdowns();