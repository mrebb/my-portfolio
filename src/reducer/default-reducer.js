let initialState = [];

export default (state = initialState, action) => {

  let {type, payload} = action;
  console.log(payload)
  switch(type) {
    default: return state;
  }

};