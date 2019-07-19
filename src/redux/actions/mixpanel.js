import mixpanel from 'mixpanel-browser';
mixpanel.init(process.env.REACT_APP_MIXPANEL);//mixpanel token.


let env_check = process.env.NODE_ENV === 'production';
// let env_check = true;
  console.log(process.env.NODE_ENV)
let actions = {
  
  identify: (id) => {
    if (env_check) mixpanel.identify(id);
  },
  alias: (id) => {
    if (env_check) mixpanel.alias(id);
  },
  track: (name, props) => {
     
    if (env_check){
        mixpanel.track(name, props);
    } 
  },
  people: {
    set: (props) => {
      if (env_check) mixpanel.people.set(props);
    },
  },
};

export let Mixpanel = actions;

