const setExpiringItemToLS = (key, item, duration) => {
  const nowTime = Date.now();

  const itemWithExprie = {
    value: JSON.stringify(item),
    expiredTime: nowTime + duration,
  }
  localStorage.setItem(key, JSON.stringify(itemWithExprie));
};

const getExpiringItemFromLS = (key) => {
  const item = localStorage.getItem(key);
  if (!item) return null;
  
  const nowTime = Date.now();
  const parsedItem = JSON.parse(item);
  if (nowTime > Number(parsedItem.expiredTime)) {
    localStorage.removeItem(key);
    return null;
  }
  return JSON.parse(parsedItem.value);
};

export { setExpiringItemToLS, getExpiringItemFromLS };
