function trigger(target, key) {
  const depsMap = bucket.get(target)
  if (!depsMap) {
    return
  }
  const effects = depsMap.get(key)
  if (!effects) {
    return
  }

  const effectsToRun = new Set(effects)
  effectsToRun.forEach(fn => {
    cleanp(fn)
    fn()
  })
}

function cleanp(effectFn) {
  for(item of effectFn.deps) {
    item.delete(effectFn)
  }
  effectFn.deps.length = 0
}