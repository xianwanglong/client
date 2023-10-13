
export const debounce = (fun: any, delay: any) => {
  let timer: any = null;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fun.apply(this, args)
    }, delay)
  }
}

