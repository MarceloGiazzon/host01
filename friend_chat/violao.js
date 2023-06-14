// Função para reproduzir a nota ao passar o mouse sobre a corda
function playNote(note) {
    var audioData = getAudioData(note);
    if (audioData) {
      var audio = new Audio();
      audio.src = "data:audio/wav;base64," + audioData;
      audio.play();
    }
  }
  
  // Função para obter os dados de áudio da nota
  function getAudioData(note) {
    var audioData = "";
    switch (note) {
      case "1":
        audioData = "INSERT_BASE64_DATA_FOR_NOTE_1_HERE";
        break;
      case "2":
        audioData = "INSERT_BASE64_DATA_FOR_NOTE_2_HERE";
        break;
      case "3":
        audioData = "INSERT_BASE64_DATA_FOR_NOTE_3_HERE";
        break;
      case "4":
        audioData = "INSERT_BASE64_DATA_FOR_NOTE_4_HERE";
        break;
      default:
        console.log("Nota não encontrada: " + note);
    }
    return audioData;
  }
  
  // Adicionar eventos de mouseover (passar o mouse sobre) às cordas
  var strings = document.querySelectorAll("line");
  strings.forEach(function(string) {
    string.addEventListener("mouseover", function() {
      var note = this.id.replace("string", ""); // Obter o número da corda
      playNote(note);
    });
  });