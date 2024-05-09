function tirarScreenshot() {
    const body = document.querySelector('body');
  
    html2canvas(document.body).then(function(canvas) {
      const link = document.createElement('a');
      link.href = canvas.toDataURL();
      link.download = 'screenshot.png';
  
      body.appendChild(link);
      link.click();
  
      body.removeChild(link);
    });
  }