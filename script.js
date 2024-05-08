document.addEventListener('DOMContentLoaded', function() {
    var progressBar = document.getElementById('match-progress');
    var matchPercentageDisplay = document.getElementById('match-percentage');
    var form = document.getElementById('registration-form');
    var inputDataContainer = document.getElementById('input-data');
    var inputNik = document.getElementById('input-nik');
    var inputNama = document.getElementById('input-nama');
    var aiOutputContainer = document.getElementById('ai-output');
    var aiOutputData = document.getElementById('ai-output-data');
  
    // Generate random match percentage for demonstration
    var matchPercentage = Math.floor(Math.random() * 101);
    progressBar.style.width = matchPercentage + '%';
    matchPercentageDisplay.textContent = matchPercentage + '%';
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Fill in static data for input
      inputNik.textContent = 'NIK: 1234567890'; // Replace with actual input data
      inputNama.textContent = 'Nama: John Doe'; // Replace with actual input data
  
      // Fill in static data for AI output
      aiOutputData.textContent = 'Hasil Output AI: Data hasil AI'; // Replace with actual AI output data
  
      // Show AI output container
      aiOutputContainer.style.display = 'block';
    });
  });
  