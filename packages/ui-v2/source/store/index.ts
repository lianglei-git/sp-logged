import { makeObservable, observable } from 'mobx'
import { createContext, useContext } from 'react';
import MonitorsStore from './Monitors';
import DashboardStore from './Dashboard';
import Ws from './ws'
import writeConfig from '../../config'
import Observe from './observe'
export type IPanelType = 'Dashboard' | 'Monitors' | 'Logs' | 'AppStore' | 'Tools' | 'SQL-Search' | 'Settings' | 'Canvas' | 'Crash' | 'Count' | 'Console';
import { getDailySentence } from '../../api'
import SettingsStore from './Settings';
import GlobalOrAction from './global';
import CanvasStore from './Canvas';
import LogsStore from './Logs';

class AppStore {
  constructor() {
    makeObservable(this);
    getDailySentence(this.Config.dailyAPILevel).then((data: { content: string, origin: string }) => {
      this.dailySentenceLive = data;
      if (data?.origin.indexOf('《') == -1) {
        this.dailySentenceLive.origin = "《" + data.origin + "》"
      }
    })
  }

  Config = writeConfig;
  Monitors = new MonitorsStore(this);
  Dashboard = new DashboardStore(this);
  GlobalOrAction = new GlobalOrAction();
  Canvas = new CanvasStore(this);
  Logs = new LogsStore(this);
  Settings = new SettingsStore(this);
  Ws = Ws.create(this.Config);
  Observe = new Observe(this);
  @observable dailySentenceLive!: { content: string, origin?: string };


  @observable panelType: IPanelType = 'Dashboard'
  @observable key = null;

  getCurrentPanelStore = () => {
    return this[this.panelType];
  };


  /** layout config */
  LayoutEnum: { key: IPanelType, iconName?: string }[] = [
    {
      /** total */
      key: 'Dashboard',
      iconName: 'ri-dashboard-2-line',
      // component: this.Dashboard.getPanelDom()
    },
    {
      /** Monitors： */
      key: 'Monitors',
      iconName: "ri-bug-line"
      // component: this.Monitors.getPanelDom()
    },
    {
      /** Log */
      key: 'Logs',
      iconName: 'ri-file-chart-line'
      // component: this.Monitors.getPanelDom()
    },
    {
      /** 大数据展示 */
      key: 'Canvas',
      iconName: 'ri-heavy-showers-line'
      // component: this.Monitors.getPanelDom()
    },
    {
      /** app Store */
      key: 'AppStore',
      iconName: 'ri-store-2-line'
      // component: this.Monitors.getPanelDom()
    },
    {
      /** app Tools */
      key: 'Tools',
      iconName: "ri-tools-line"
      // component: this.Monitors.getPanelDom()
    },
    {
      /** discover */
      key: 'SQL-Search',
      iconName: 'ri-database-2-line'
    },
    {
      /**  */
      iconName: 'ri-settings-3-line',
      key: ('Settings'),
    },
    {
      /** 报错收集 */
      key: 'Crash',
      iconName: "ri-donut-chart-line"
    },
    {
      /** 埋点统计 */
      key: 'Count',
      iconName: "ri-compass-line"
    }
  ]

}

const appStore = new AppStore();

(window as any).app = appStore;

const AppStoreContext = createContext(appStore);

export { appStore, AppStore, AppStoreContext };