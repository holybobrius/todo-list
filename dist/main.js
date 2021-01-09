(() => {
  "use strict";
  const e = document.querySelector("#tasks"),
    t = document.querySelector("#lists-container");
  let n = document.querySelector(".selected"),
    c = Array.from(document.querySelectorAll(".list")),
    o = Array.from(document.querySelectorAll(".task"));
  function l(t, n, c, o, l) {
    const s = document.createElement("div");
    s.classList.add("task"), s.classList.add("container-item");
    const i = document.createElement("div");
    i.classList.add("task-data");
    const a = document.createElement("p");
    a.classList.add("task-name"), (a.innerHTML = t);
    const d = document.createElement("p");
    d.classList.add("task-dueDateP"), (d.innerHTML = `Until: ${c}`);
    const r = document.createElement("p");
    r.classList.add("task-priorityP"), (r.innerHTML = `Priority: ${o}`);
    const u = document.createElement("p");
    u.classList.add("task-description"),
      (u.innerHTML = `Description: ${n}`),
      i.appendChild(a),
      i.appendChild(d),
      i.appendChild(r),
      i.appendChild(u);
    const p = document.createElement("div");
    p.classList.add("task-buttons");
    const m = document.createElement("a");
    m.classList.add("checked-task-icon");
    const h = document.createElement("i");
    h.classList.add("fas", "fa-check"), m.appendChild(h);
    const k = document.createElement("a");
    k.classList.add("expand-task-icon");
    const y = document.createElement("i");
    y.classList.add("fas", "fa-search"), k.appendChild(y);
    const f = document.createElement("a");
    f.classList.add("delete-task-icon");
    const E = document.createElement("i");
    E.classList.add("fas", "fa-trash-alt"),
      f.appendChild(E),
      !0 === l && i.classList.add("checked"),
      p.appendChild(m),
      p.appendChild(k),
      p.appendChild(f),
      s.appendChild(i),
      s.appendChild(p),
      e.appendChild(s);
  }
  let s = !1,
    i = !1;
  function a(e) {
    let t = e.parentElement.parentElement;
    const n = t.getElementsByClassName("task-description").item(0);
    0 == s
      ? ((t.style.minHeight = "16%"), (n.style.display = "block"), (s = !0))
      : ((t.style.minHeight = "8%"), (n.style.display = "none"), (s = !1));
  }
  function d(t) {
    let n = t.parentElement;
    (e.innerHTML = ""), n.remove();
  }
  function r(e) {
    return (o = Array.from(document.querySelectorAll(".task"))), o.indexOf(e);
  }
  const u = document.querySelector("#popup-task-name-input"),
    p = document.querySelector("#popup-task-description-input"),
    m = document.querySelector("#popup-task-duedate-input"),
    h = document.querySelector("#popup-task-priority-input"),
    k = document.querySelector(".new-task-popup");
  let y = document.querySelector("#tasks"),
    f = [];
  class E {
    constructor(e, t, n, c, o) {
      (this.name = e),
        (this.description = t),
        (this.dueDate = n),
        (this.priority = c),
        (this.checked = o);
    }
  }
  class q {
    constructor(e) {
      (this.name = e), (this.content = []);
    }
    addTaskToList(e) {
      this.content.push(e);
    }
    render() {
      for (let e = 0; e < this.content.length; e++)
        l(
          this.content[e].name,
          this.content[e].description,
          this.content[e].dueDate,
          this.content[e].priority,
          this.content[e].checked
        );
    }
  }
  let S = new q("Default");
  f.push(S);
  const L = document.querySelector("#popup-list-name-input"),
    v = document.querySelector(".new-list-popup");
  function A(e) {
    S.content.splice(r(e), 1),
      (function (e) {
        e.remove();
      })(e);
  }
  function C(e) {
    !1 === S.content[r(e)].checked
      ? (S.content[r(e)].checked = !0)
      : (S.content[r(e)].checked = !1),
      (function (e) {
        let t = e.getElementsByClassName("task-data").item(0);
        0 == i
          ? (t.classList.add("checked"), (i = !0))
          : (t.classList.remove("checked"), (i = !1));
      })(e);
  }
  const w = document.querySelector("#new-task-icon"),
    H = document.querySelector(".new-task-popup"),
    T = document.querySelector(".close-task-popup"),
    b = document.querySelector("#submit-task"),
    M = document.querySelector("#submit-list");
  let x = document.querySelectorAll(".expand-task-icon"),
    D = document.querySelectorAll(".checked-task-icon"),
    g = document.querySelectorAll(".delete-task-icon");
  const $ = document.querySelector(".new-list-icon"),
    P = document.querySelector(".new-list-popup"),
    B = document.querySelector(".close-list-popup");
  let N = document.querySelectorAll(".delete-list-icon"),
    O = document.querySelectorAll(".list");
  document.querySelectorAll(".tasks"),
    (w.onclick = function () {
      H.style.display = "block";
    }),
    (T.onclick = function () {
      H.style.display = "none";
    }),
    (B.onclick = function () {
      P.style.display = "none";
    }),
    ($.onclick = function () {
      P.style.display = "block";
    }),
    b.addEventListener("click", () => {
      !(function () {
        if ("" != u.value && "" != p.value && "" != m.value && "" != h.value) {
          let e = new E(u.value, p.value, m.value, h.value, !1);
          S.content.push(e),
            l(e.name, e.description, e.dueDate, e.priority, e.checked),
            (k.style.display = "none");
        }
      })(),
        (x = document.querySelectorAll(".expand-task-icon")),
        (D = document.querySelectorAll(".checked-task-icon")),
        (g = document.querySelectorAll(".delete-task-icon")),
        x.forEach(
          (e) =>
            (e.onclick = function () {
              a(this);
            })
        ),
        D.forEach(
          (e) =>
            (e.onclick = function () {
              C(this.parentElement.parentElement);
            })
        ),
        g.forEach(
          (e) =>
            (e.onclick = function () {
              A(this.parentElement.parentElement);
            })
        );
    }),
    M.addEventListener("click", () => {
      (function () {
        if ("" != L.value) {
          let e = new q(L.value);
          !(function (e) {
            const n = document.createElement("div");
            n.classList.add("list", "container-item");
            const c = document.createElement("p");
            c.classList.add("list-name"), (c.innerHTML = e);
            const o = document.createElement("a");
            o.classList.add("delete-list-icon");
            const l = document.createElement("i");
            o.classList.add("far", "fa-trash-alt"),
              o.appendChild(l),
              n.appendChild(c),
              n.appendChild(o),
              t.appendChild(n);
          })(e.name),
            f.push(e),
            console.table(`Lists array: ${f}`),
            (v.style.display = "none");
        }
      })(),
        (O = document.querySelectorAll(".list")),
        (N = document.querySelectorAll(".delete-list-icon")),
        N.forEach(
          (e) =>
            (e.onclick = function () {
              d(this);
            })
        ),
        O.forEach((e) =>
          e.addEventListener("click", () => {
            var t;
            (t = e),
              n.classList.remove("selected"),
              t.classList.add("selected"),
              (n = t),
              (function (e) {
                (S =
                  f[
                    (function (e) {
                      return (
                        (c = Array.from(document.querySelectorAll(".list"))),
                        c.indexOf(e)
                      );
                    })(e)
                  ]),
                  (y.innerHTML = ""),
                  S.render();
              })(e),
              (x = document.querySelectorAll(".expand-task-icon")),
              (D = document.querySelectorAll(".checked-task-icon")),
              (g = document.querySelectorAll(".delete-task-icon")),
              x.forEach(
                (e) =>
                  (e.onclick = function () {
                    a(this);
                  })
              ),
              D.forEach(
                (e) =>
                  (e.onclick = function () {
                    C(this.parentElement.parentElement);
                  })
              ),
              g.forEach(
                (e) =>
                  (e.onclick = function () {
                    A(this.parentElement.parentElement);
                  })
              );
          })
        );
    }),
    x.forEach(
      (e) =>
        (e.onclick = function () {
          a(this);
        })
    ),
    D.forEach((e) => (e.onclick = C((void 0).parentElement.parentElement))),
    g.forEach((e) => (e.onclick = A((void 0).parentElement.parentElement))),
    N.forEach(
      (e) =>
        (e.onclick = function () {
          d(this);
        })
    );
})();
