let activeEffect
function effect(fn) {
  const effectFn = ()=> {
    activeEffect = effectFn
    fn()
  }
  effectFn.deps = []
  effectFn()
}