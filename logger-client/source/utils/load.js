const regTmpl = /<template[^>]*>([\s\S]*)<\/template[*>]*>/;

// const xml = new XMLHttpRequest();
/** @returns new Promise */
const loadVue = (baseUrl, target) => {
  const url = baseUrl.split('/');
  url.pop();
  url.push(target);
  return new Promise((res) => {
    fetch(url.join('/'))
      .then((v) => v.text())
      .then((content) => {
        const result = regTmpl.exec(content)[1];
        res(result);
      });
  });
};
export { loadVue };
