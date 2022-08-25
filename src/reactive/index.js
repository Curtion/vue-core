let data = { a: 'a', b: 'b' };

let obj = new Proxy(data, {
  set(target, key, value) {
    target[key] = value
    trigger(target, key)
    return
  },
  get(target, key) {
    track(target, key)
    return target[key]
  }
})

effect(() => {
  console.log('effectFn1 run')
  const element = document.querySelector("#app1");
  effect(() => {
    console.log('effectFn2 run')
    const element = document.querySelector("#app2");
    element.innerHTML = obj.b;
  })
  element.innerHTML = obj.a;
})


setTimeout(() => {
  obj.a = 'Hello World'
}, 500)
