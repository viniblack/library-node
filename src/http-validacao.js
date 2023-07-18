function extraiLinks(arrLinks) {
  return arrLinks.map((objetoLink) => Object.values(objetoLink).join());
}

export default function listaValidada(listaLinks) {
  return extraiLinks(listaLinks);
}
