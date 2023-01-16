interface Elementos {
  a: HTMLAnchorElement;
  video: HTMLVideoElement;
  div: HTMLElement;
  body: HTMLBodyElement;
  audio: HTMLAudioElement;
}

function selecionar<K extends keyof Elementos>(
  seletor: K
): Elementos[K] | null {
  return document.querySelector(seletor);
}

selecionar("a")?.href;
selecionar("video")?.volume;
selecionar(".botao");
