function onSubmit(e) {
    e.preventDefault();
  
    document.querySelector('.msg').textContent = '';
    document.querySelector('#image').src = '';
  
    const prompt = document.querySelector('#prompt').value;
    const size = document.querySelector('#size').value;
  
    if (prompt === '') {
      alert('Please add some text');
      return;
    }
  
    generateImageRequest(prompt, size);
  }
  
  async function generateImageRequest(prompt, size) {
    try {
      showText();
  
      const response = await fetch('/openai/generateimage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          size,
        }),
      });
  
      if (!response.ok) {
        removeText();
        throw new Error('That image could not be generated');
      }
  
      const data = await response.json();
  
      const imageUrl = data.data;
  
      document.querySelector('#image').src = imageUrl;
  
      removeText();
    } catch (error) {
      document.querySelector('.msg').textContent = error;
    }
  }
  
  function showText() {
    document.querySelector('.msg').textContent = "It may take sometime...";
    // document.querySelector('.loading-text').style.visibility= "visible";
  }
  
  function removeText() {
    document.querySelector('.msg').textContent = "";
    // document.querySelector('.loading-text').style.visibility= "hidden";
  }
  
  document.querySelector('#image-form').addEventListener('submit', onSubmit);