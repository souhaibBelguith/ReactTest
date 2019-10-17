let listNuits = [];
let oldlistNuits = [];
const NbrNuits = (state = listNuits, action) => {
  switch(action.type)
  {
      case 'getNbrNuits' :
      oldlistNuits.push(action.data);
            return state = listNuits.concat(oldlistNuits);
        default:
            return state;
  }
}

export default NbrNuits;