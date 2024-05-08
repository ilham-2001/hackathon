// document.addEventListener('DOMContentLoaded', function() {
//     var progressBar = document.getElementById('match-progress');
//     var matchPercentageDisplay = document.getElementById('match-percentage');
//     var form = document.getElementById('registration-form');
//     var inputDataContainer = document.getElementById('input-data');
//     var inputNik = document.getElementById('input-nik');
//     var inputNama = document.getElementById('input-nama');
//     var aiOutputContainer = document.getElementById('ai-output');
//     var aiOutputData = document.getElementById('ai-output-data');

//     const buttonSubmit = document.querySelector('.submit')
//     var dokumenInput = document.getElementsByClassName('input-file');

//   form.addEventListener('submit', function(event) {
//     console.log('dmakdmaks');
//     event.preventDefault();

//     // Mendapatkan file yang dipilih
//     var selectedFile = dokumenInput.files[0];

//     // Periksa apakah file telah dipilih
//     if (selectedFile) {
//       // Lakukan operasi yang diinginkan dengan file
//       console.log('Nama file:', selectedFile.name);
//       console.log('Tipe file:', selectedFile.type);
//       console.log('Ukuran file (bytes):', selectedFile.size);
//     } else {
//       console.log('Tidak ada file yang dipilih.');
//     }
//   })

//     // Generate random match percentage for demonstration
//     var matchPercentage = Math.floor(Math.random() * 101);
//     progressBar.style.width = matchPercentage + '%';
//     matchPercentageDisplay.textContent = matchPercentage + '%';

//     form.addEventListener('submit', function(event) {
//       event.preventDefault();

//       // Fill in static data for input
//       inputNik.textContent = 'NIK: 1234567890'; // Replace with actual input data
//       inputNama.textContent = 'Nama: John Doe'; // Replace with actual input data
//       fileUpload.
//       // Fill in static data for AI output
//       aiOutputData.textContent = 'Hasil Output AI: Data hasil AI'; // Replace with actual AI output data

//       // Show AI output container
//       aiOutputContainer.style.display = 'block';

//     });


//   buttonSubmit.addEventListener('click', (e) => {

//     console.log(    dokumenInput.value      );
//     e.preventDefault();
//   })
//   }); 

async function getApi() {
  console.log('daldm');
  const response = await fetch("http://127.0.0.1:8000");
  const movies = await response.json();
  console.log(movies);
}

getApi();

const buttonSubmit = document.querySelector('.submit')
const dokumenInput = document.getElementsById('dokumen');

buttonSubmit.addEventListener('click', (e) => {

  console.log(dokumenInput);
  e.preventDefault();
})