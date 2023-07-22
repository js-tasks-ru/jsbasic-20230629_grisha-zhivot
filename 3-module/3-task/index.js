let camelize = str => {
  return str
    .split('-')
    .map((list, index) =>

      index == 0 ? list : list[0].toUpperCase() + list.slice(1)
      
    )
    .join('');
};
