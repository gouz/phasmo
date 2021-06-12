import "./globals.css";
import "./main.less";

import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

let classes = {};

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
          <label for="${clue.id}" data-tippy-content="${clue.title}" title="${clue.title}">${clue.emoji}</label>
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
      let tooltip = `
        ${ghost.desc}
        <br />
        <br />
        Forces uniques: ${ghost.forces}
        <br />
        <br />
        Faiblesses: ${ghost.faiblesses}
      `;
      $tbody.innerHTML += `
        <tr class="${ghost.clues.join(" ")}">
          <td>
            <span data-tippy-content="${tooltip}" title="${tooltip}">
              🔍 ${ghost.name}
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
    tippy("[data-tippy-content]", {
      placement: "right",
      animation: "scale",
      allowHTML: true,
    });
  });
});
