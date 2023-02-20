import { makeObservable, observable } from 'mobx'
import { createContext, useContext } from 'react';
import MonitorsStore from './Monitors';
import DashboardStore from './Dashboard';
import Ws from './ws'
import writeConfig from '../../config'
import Observe from './observe'
export type IPanelType = 'Dashboard' | 'Monitors';

class AppStore {
  constructor() {
    makeObservable(this);
  }

  Config = writeConfig;
  Monitors = new MonitorsStore(this);
  Dashboard = new DashboardStore(this);
  Ws = Ws.create(this.Config);
  Observe = new Observe(this);

  @observable panelType: IPanelType = 'Dashboard'
  @observable key = null;

  getCurrentPanelStore = () => {
    return this[this.panelType];
  };


  /** layout config */
  LayoutEnum: { key: IPanelType }[] = [
    {
      key: 'Dashboard',
      // component: this.Dashboard.getPanelDom()
    },
    {
      key: 'Monitors',
      // component: this.Monitors.getPanelDom()
    }
  ]
}

const appStore = new AppStore();

(window as any).app = appStore;

const AppStoreContext = createContext(appStore);

export { appStore, AppStore, AppStoreContext };