function track(target, key) {
  if (!activeEffect) {
    return
  }
  let despMap = bucket.get(target)
  if (!despMap) {
    bucket.set(target, (despMap = new Map()))
  }
  let deps = despMap.get(key)
  if (!deps) {
    despMap.set(key, (deps = new Set()))
  }
  deps.add(activeEffect)

  activeEffect.deps.push(deps)
}