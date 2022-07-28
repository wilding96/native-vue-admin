import { LoadingBarInst } from 'naive-ui/es/loading-bar/src/LoadingBarProvider'
import { MessageApiInjection } from 'naive-ui/lib/message/src/MessageProvider'

declare global {
  const __DEV__: boolean

  interface Window {
    $message: MessageApiInjection
    $loadingBar: LoadingBarInst
  }
}
