import chalk from "chalk";

function extraiLinks(arrLinks) {
  return arrLinks.map((objetoLink) => Object.values(objetoLink).join());
}

async function checaStatus(listaURL) {
  const arrStatus = await Promise.all(
    listaURL.map(async (url) => {
      try {
        const response = await fetch(url, { method: "HEAD" });
        return response.status;
      } catch (erro) {
        return manejaErros(erro);
      }
    })
  );
  return arrStatus;
}

function manejaErros(erro) {
  if (erro.cause.code === "ENOTFOUND") {
    return "link não encontrado";
  } else {
    return "ocorreu algum erro";
  }
}

export default async function listaValidada(listaLinks) {
  const links = extraiLinks(listaLinks);
  const status = await checaStatus(links);

  return listaLinks.map((objeto, index) => ({
    ...objeto,
    status: status[index],
  }));
}
