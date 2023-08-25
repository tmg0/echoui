import { defineComponent as u, openBlock as r, createBlock as p, resolveDynamicComponent as _, unref as a, withCtx as l, renderSlot as c, createElementBlock as f } from "vue";
const m = (t) => ({ Component: "button" }), v = /* @__PURE__ */ u({
  __name: "button",
  props: {
    variant: {},
    color: {},
    size: {}
  },
  setup(t) {
    const { Component: o } = m();
    return (n, e) => (r(), p(_(a(o)), null, {
      default: l(() => [
        c(n.$slots, "default")
      ]),
      _: 3
    }));
  }
}), i = (t, o) => {
  const n = t.__vccOpts || t;
  for (const [e, s] of o)
    n[e] = s;
  return n;
}, d = {};
function B(t, o) {
  return r(), f("div", null, [
    c(t.$slots, "default")
  ]);
}
const k = /* @__PURE__ */ i(d, [["render", B]]);
export {
  v as Button,
  k as ButtonGroup
};
