import "./globals.css";
import "./main.less";

import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

let classes = {};
let tippies = {};

import jsonUrl from "url:./config.json";

fetch(jsonUrl).then((response) => {
  return response.json().then(function (json) {
    let $thead = document.querySelector("thead tr");
    for (let i = 0; i < json.clues.length; i++) {
      let clue = json.clues[i];
      $thead.innerHTML += `
      <th>
        <div>
          <input id="${clue.id}" name="${clue.id}" type="checkbox" />
          <label for="${clue.id}" 
                 id="l_${clue.id}"
                 data-tippy-content="${clue.title.fr}" 
                 data-title-fr="${clue.title.fr}" 
                 data-title-en="${clue.title.en}"
          >${clue.emoji}</label>
        </div>
      </th>
      `;
    }
    let $tbody = document.querySelector("tbody");
    for (let i = 0; i < json.ghosts.length; i++) {
      let ghost = json.ghosts[i];
      let clues = ``;
      for (let j = 0; j < json.clues.length; j++) {
        let clue = json.clues[j];
        if (ghost.clues.indexOf(clue.id) != -1) clues += `<td>✔</td>`;
        else clues += `<td></td>`;
      }
      let tooltip_en = `
        💪 : ${ghost.strengths.en}
        <br />
        <br />
        👎 : ${ghost.weaknesses.en}
      `;
      let tooltip_fr = `
        💪 : ${ghost.strengths.fr}
        <br />
        <br />
        👎 : ${ghost.weaknesses.fr}
      `;
      $tbody.innerHTML += `
        <tr class="${ghost.clues.join(" ")}">
          <td>
            <span id="n_${ghost.clues.join("_")}"
                  data-tippy-content="${tooltip_fr}" 
                  data-title-en="${tooltip_en}" 
                  data-title-fr="${tooltip_fr}"
            >
              🔍 
              <span class="name en">${ghost.name.en}</span>
              <span class="name fr">${ghost.name.fr}</span>
            </span>
          </td>
          ${clues}
        </tr>
      `;
    }
    document.querySelectorAll("input").forEach(($el) => {
      $el.addEventListener(
        "click",
        () => {
          if ($el.checked) classes[$el.id] = 1;
          else classes[$el.id] = 0;
          let sel = "";
          Object.keys(classes).forEach((k) => {
            if (classes[k] == 1) sel += "." + k;
          });
          document
            .querySelectorAll("tbody tr")
            .forEach((t) => t.classList.add("hidden"));
          document
            .querySelectorAll("tbody tr" + sel)
            .forEach((t) => t.classList.remove("hidden"));
        },
        false
      );
    });

    document.querySelectorAll("[data-tippy-content]").forEach(($el) => {
      tippies[$el.id] = tippy($el, {
        placement: "right",
        animation: "scale",
        allowHTML: true,
      });
    });

    document.querySelectorAll("#lang a").forEach(($el) => {
      $el.addEventListener(
        "click",
        (e) => {
          e.preventDefault();
          document.querySelectorAll("#lang a").forEach(($e) => {
            $e.classList.remove("active");
          });
          $el.classList.add("active");
          const lang = $el.getAttribute("href").slice(1);
          document.querySelectorAll(".name").forEach(($el) => {
            $el.style.display = "none";
            if ($el.classList.contains(lang)) $el.style.display = "inline";
          });
          document.querySelectorAll("[data-tippy-content]").forEach(($eli) => {
            tippies[$eli.id].setContent(
              $eli.getAttribute(`data-title-${lang}`)
            );
          });
          return false;
        },
        false
      );
    });
  });
});
