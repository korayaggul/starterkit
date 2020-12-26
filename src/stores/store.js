  
import AppStore from './appStore.js';

class store {
  appStore: AppStore;

  constructor() {
    this.appStore = new AppStore(this);
  }

  init = () => {
    // initial code
  };
}

export default new store();