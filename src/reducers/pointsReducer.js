export default function (state = [] ,action) {
  console.log(action.type);
  switch (action.type) {
    case 'FETCH_POINTS': {
      return (state = action.payload)
      break;
    }
    default: {
      return state
    }
  }

}
