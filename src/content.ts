console.log("Web Translator iniciado");

const textNodes = document.createTreeWalker(
  document.body,
  NodeFilter.SHOW_TEXT
);

let count = 0;

while (textNodes.nextNode()) {
  const node = textNodes.currentNode;

  if (node.textContent?.trim()) {
    count++;
  }
}

console.log(`Nodos de texto encontrados: ${count}`);
