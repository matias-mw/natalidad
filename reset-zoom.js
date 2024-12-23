document.addEventListener('DOMContentLoaded', function () {
  // Add a reset zoom button
  const resetButton = document.createElement('button');
  resetButton.textContent = 'Reset Zoom';
  resetButton.style.position = 'fixed';
  resetButton.style.bottom = '10px';
  resetButton.style.right = '10px';
  resetButton.style.zIndex = 1000;

  resetButton.addEventListener('click', function () {
    // Reset zoom to default level
    document.body.style.transform = 'scale(1)';
  });

  document.body.appendChild(resetButton);
});