  // synchronously turn a blob into text
  function blobText(blob) {
    if (typeof FileReaderSync !== 'undefined') {
      return new FileReaderSync().readAsText(blob);
    }
    // create blob url
    const url = URL.createObjectURL(blob);
    // create an ajax request targeted ar rge blob url
    // set async to false
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    // execute the "network" request
    xhr.send();
    //return the response as text
    const txt = xhr.responseText;
    URL.revokeObjectURL(url);
    return txt;
  };
  // test 
  const helloWorlBlob = new Blob(['Hello World']);
  const helloWorldText = blobText(helloWorlBlob);
  console.log(helloWorldText);
