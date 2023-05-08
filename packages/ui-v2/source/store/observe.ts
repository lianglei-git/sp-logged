/** observe message */

import { Notify } from '@sparrowend/ui'
import { AppStore } from ".";

class ObserveGlobal {
  constructor(public app: AppStore) {
    this.watch();
  }
  watch() {
    window.addEventListener('error', (err: ErrorEvent) => {
      Notify({
        type: 'error',
        title: 'ObserveGlobal',
        message: err.message
      })
      return false;
    })

    const errFunc = console.error;
    console.error = (...a) => {
      Notify({
        type: 'error',
        title: 'console-error',
        message: a[0]
      })
      errFunc(...a);
    }

    window.addEventListener('unhandledrejection', (e: any) => {
      throw e.reason;
    })

  }
}

export default ObserveGlobal;