function calculateTotalWeight() {
  const weight = document.getElementById('weightInput').value;
  const barWeight = document.getElementById('barType').value; 

  if (weight < 0) {
    document.getElementById('resultText').textContent = 'Haru kapat av stången eller?😂';
    return;
  }

  const totalWeight = (weight * 2) + parseInt(barWeight);
  document.getElementById('resultText').textContent = totalWeight + ' kg';
}
