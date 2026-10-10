// "Try a question" mini game on the home page.
// Runs only in the browser and stores nothing.
// The words come from data-… attributes on #try-game, so each language page sets its own.
(function () {
  var root = document.getElementById("try-game");
  if (!root) return;

  var text = root.dataset;
  var cheers = text.right.split("|");
  var say = text.say.split("|"); // plus | minus | times | equals what?

  var ROUNDS = 3;
  var qEl = root.querySelector(".question");
  var answersEl = root.querySelector(".answers");
  var feedback = root.querySelector(".feedback");
  var dots = root.querySelectorAll(".dots span");
  var cat = root.querySelector(".try-cat");
  var playArea = root.querySelector(".try-play");
  var done = root.querySelector(".try-done");
  var again = root.querySelector(".try-again");
  var calm = window.matchMedia("(prefers-reduced-motion: reduce)");
  var round = 0;
  var locked = false;

  function rand(min, max) { return min + Math.floor(Math.random() * (max - min + 1)); }

  function shuffle(list) {
    for (var i = list.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = list[i]; list[i] = list[j]; list[j] = t;
    }
    return list;
  }

  // Beginner-level questions, like the app's 1–10 range.
  function makeQuestion() {
    var kind = ["+", "−", "×"][round % 3];
    var a, b, answer;
    if (kind === "+") { a = rand(1, 9); b = rand(1, 9); answer = a + b; }
    else if (kind === "−") { a = rand(4, 10); b = rand(1, a - 1); answer = a - b; }
    else { a = rand(2, 5); b = rand(2, 5); answer = a * b; }
    return { text: a + " " + kind + " " + b + " = ?", answer: answer };
  }

  // Three wrong options near the answer, with the same number of digits (as in the app).
  function options(answer) {
    var lo = answer < 10 ? 0 : 10;
    var hi = answer < 10 ? 9 : 99;
    var set = [answer];
    var tries = 0;
    while (set.length < 4 && tries < 100) {
      tries++;
      var n = answer + rand(-4, 4);
      if (n >= lo && n <= hi && set.indexOf(n) === -1) set.push(n);
    }
    return shuffle(set);
  }

  function confetti() {
    if (calm.matches) return;
    var colours = ["#FFCC38", "#FF8F26", "#FF6B6B", "#FF80B8", "#9461E0", "#2EBDC2", "#66C752"];
    for (var i = 0; i < 26; i++) {
      var p = document.createElement("span");
      p.className = "confetti";
      p.style.background = colours[i % colours.length];
      p.style.setProperty("--x", rand(-240, 240) + "px");
      p.style.setProperty("--y", rand(-200, 160) + "px");
      p.style.setProperty("--r", rand(-360, 360) + "deg");
      root.appendChild(p);
      setTimeout(p.remove.bind(p), 1100);
    }
  }

  function hop() {
    cat.classList.remove("hop");
    void cat.offsetWidth; // restart the animation
    cat.classList.add("hop");
  }

  function show() {
    var q = makeQuestion();
    qEl.textContent = q.text;
    qEl.setAttribute("aria-label", q.text.replace("+", say[0]).replace("−", say[1]).replace("×", say[2]).replace("= ?", say[3]));
    feedback.textContent = "";
    answersEl.innerHTML = "";
    locked = false;
    options(q.answer).forEach(function (n) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = n;
      btn.addEventListener("click", function () { pick(btn, n === q.answer); });
      answersEl.appendChild(btn);
    });
  }

  function pick(btn, right) {
    if (locked) return;
    if (!right) {
      btn.classList.add("wrong");
      btn.disabled = true;
      feedback.textContent = text.wrong;
      return;
    }
    locked = true;
    btn.classList.add("right");
    feedback.textContent = cheers[round % cheers.length];
    dots[round].classList.add("on");
    hop();
    confetti();
    round++;
    setTimeout(function () {
      if (round < ROUNDS) { show(); answersEl.querySelector("button").focus(); }
      else finish();
    }, 1100);
  }

  function finish() {
    playArea.hidden = true;
    done.hidden = false;
    done.querySelector("h3").focus();
  }

  again.addEventListener("click", function () {
    round = 0;
    dots.forEach(function (d) { d.classList.remove("on"); });
    done.hidden = true;
    playArea.hidden = false;
    show();
    answersEl.querySelector("button").focus();
  });

  show();
})();
