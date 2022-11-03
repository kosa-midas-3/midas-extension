const background = document.querySelector("body");
background.childNodes.forEach((v) => v.remove());
background.childNodes.forEach((v) => v.remove());
background.childNodes.forEach((v) => v.remove());

const iframe = document.createElement("iframe");

iframe.src = "http://localhost:3000";
iframe.width = "100%";
iframe.height = "100%";
iframe.frameBorder = "0";

background.appendChild(iframe);
