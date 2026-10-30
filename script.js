let activeSection = null;

function switchSection(sectionId) {
  activeSection = sectionId;

  document.getElementById('currentHashLabel').textContent = '#' + sectionId;

  const panels = ['guidelines', 'loves', 'cv'];
  panels.forEach(id => {
    const panelEl = document.getElementById('panel-' + id);
    const btnEl = document.getElementById('btn-' + id);
    if (panelEl) {
      if (id === sectionId) {
        panelEl.classList.remove('hidden');
      } else {
        panelEl.classList.add('hidden');
      }
    }
    if (btnEl) {
      if (id === sectionId) {
        btnEl.classList.add('active-btn');
      } else {
        btnEl.classList.remove('active-btn');
      }
    }
  });

  const middleDividerLine = document.getElementById('middleDividerLine');
  if (middleDividerLine) {
    middleDividerLine.classList.toggle('hidden', !sectionId);
  }
}

function closeMiddlePanel() {
  activeSection = null;
  const panels = ['guidelines', 'loves', 'cv'];
  panels.forEach(id => {
    document.getElementById('panel-' + id)?.classList.add('hidden');
    document.getElementById('btn-' + id)?.classList.remove('active-btn');
  });
  document.getElementById('middleDividerLine')?.classList.add('hidden');
  document.getElementById('currentHashLabel').textContent = '#home';
}

function resetToHome() {
  closeMiddlePanel();
}

function handleTermsClick() {
  switchSection('loves');
}

function toggleThankYouNote() {
  const note = document.getElementById('footerThankYou');
  const label = document.getElementById('footerToggleText');
  const isHidden = note.classList.contains('hidden');
  note.classList.toggle('hidden', !isHidden);
  label.textContent = isHidden ? '− hide' : '+ note';
}

let toastTimeout;
function showToast(msg) {
  const box = document.getElementById('toastBox');
  const text = document.getElementById('toastText');
  text.textContent = msg;
  box.classList.remove('opacity-0');
  box.classList.add('opacity-100');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    box.classList.remove('opacity-100');
    box.classList.add('opacity-0');
  }, 2600);
}
