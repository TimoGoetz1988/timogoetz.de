(() => {
  const valid = new Set(Array.from({length: 15}, (_, i) => 'W' + String(i + 1).padStart(3, '0')));
  const raw = new URLSearchParams(location.search).get('lead') || '';
  const lead = valid.has(raw) ? raw : 'ALLGEMEIN';
  const label = lead === 'ALLGEMEIN' ? 'Allgemeine Anfrage' : lead;
  document.getElementById('lead-code').textContent = label;
  const text = encodeURIComponent('Hallo Timo, ich möchte den kostenlosen 15-Minuten-Zeitcheck anfragen. Betriebscode: ' + label);
  document.getElementById('wa').href = 'https://wa.me/491772911339?text=' + text;
  document.getElementById('mail').href = 'mailto:timo.goetz1988@gmail.com?subject=' + encodeURIComponent('15-Minuten-Zeitcheck · ' + label) + '&body=' + text;
})();