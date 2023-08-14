function makeList() {
  let items = [];

  return {
    add(item) {
      items.push(item);
      console.log(item + ' added!');
    },
    list() {
      items.forEach(item => console.log(item));
    },
    remove(item) {
      let index = items.indexOf(item);
      items.splice(index, 1);
      console.log(item + ' removed!');
    },
  };
}

let list = makeList();
list.add('peas');
list.list();
list.add('corn');
list.list();
list.remove('peas');
list.list();