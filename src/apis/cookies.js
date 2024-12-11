const keyValues = document.cookie?.split('; ');

class Cookie {
  constructor() {
    this.cookies = () =>
      keyValues.reduce((cum, it) => {
        const [k, v] = it.split('=');
        return { [k]: v, ...cum };
      }, {});
  }

  getCooke = (key) => {
    return this.cookies[key];
  };
  setCooke = (key, value, expires) => {
    // const now = new Date().getTime() / 1000;
    const exp = new Date(expires * 1000);
    document.cookie = `${key}=${value}; expires=${exp}`;
    return undefined;
  };

  clearCooke(keys = ['token', 'refresh_token']) {
    keys.forEach((key) => {
      this.setCooke(key, '', 0);
    });
  }
}
export const cookeStorage = new Cookie();
