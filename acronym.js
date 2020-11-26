function acronymize(string) {
  let array = string.split(" ");
  let acronym = "";
  for (let i = 0; i < array.length; i++) {
    const element = array[i].charAt(0).toUpperCase();
    acronym += element;
  }
  console.log(acronym);
}

acronymize("method returns a new string consisting of the single");
