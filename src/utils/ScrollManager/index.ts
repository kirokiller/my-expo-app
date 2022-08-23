export default class ScrollManager {
  scrollController: any
  contentOffset: number
  constructor() {
    this.scrollController = {}
    this.contentOffset = 0
  }

  addListener = (ref: any, name: string) => {
    this.scrollController[name] = ref
    this.initContentOffset()
  }

  initContentOffset = () => {
    if (this.contentOffset !== 0) {
      setTimeout(() => {
        this.emitListener(this.contentOffset, '')
      }, 200) // 等待UI渲染完成
    }
  }

  resetScroll = () => {
    this.emitListener(0, '')
  }

  emitListener = (x: number, trigger: string) => {
    this.saveContentOffset(x)
    Object.keys(this.scrollController).forEach(key => {
      if (key !== trigger) {
        if (this.scrollController[key] && this.scrollController[key].scrollTo) {
          this.scrollController[key].scrollTo({
            x,
            animated: false,
            duration: 0,
          })
        }
      }
    })
  }

  saveContentOffset = (contentOffset: number) => {
    this.contentOffset = contentOffset
  }
}
