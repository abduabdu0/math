const topics = {
  school: ["Алгебра", "Геометрия", "Тригонометрия"],
  university: ["Матанализ", "Линейная алгебра", "Диффуры"]
};

const levelSelect = document.getElementById("level");
const topicSelect = document.getElementById("topic");

function loadTopics() {
  topicSelect.innerHTML = "";
  topics[levelSelect.value].forEach(t => {
    const opt = document.createElement("option");
    opt.textContent = t;
    topicSelect.appendChild(opt);
  });
}

levelSelect.addEventListener("change", loadTopics);
loadTopics();


// ===== ВАРИАНТ 1 (работает сразу) =====
function generateTasks() {
  const topic = topicSelect.value;
  let result = "";

  for (let i = 0; i < 5; i++) {
    result += `<div class="card">${generateLocalTask(topic)}</div>`;
  }

  document.getElementById("tasks").innerHTML = result;
}

function generateLocalTask(topic) {
  if (topic === "Алгебра") {
    let a = Math.floor(Math.random()*10)+1;
    let b = Math.floor(Math.random()*10);
    return `${a}x + ${b} = 0 <br> Ответ: x = ${-b/a}`;
  }

  if (topic === "Геометрия") {
    return `Найти гипотенузу: 3 и 4 <br> Ответ: 5`;
  }

  if (topic === "Тригонометрия") {
    return `sin(30°) = ? <br> Ответ: 1/2`;
  }

  if (topic === "Матанализ") {
    return `∫ x² dx <br> Ответ: x³/3 + C`;
  }

  if (topic === "Линейная алгебра") {
    return `det([[1,2],[3,4]]) <br> Ответ: -2`;
  }

  if (topic === "Диффуры") {
    return `y' = y <br> Ответ: y = Ce^x`;
  }

  return "2+2 = 4";
}


// ===== ВАРИАНТ 2 (AI - НЕБЕЗОПАСНО) =====
// Раскомментируй если хочешь AI (ключ будет виден)

// async function generateTasks() {
//   const level = levelSelect.value;
//   const topic = topicSelect.value;

//   const response = await fetch("https://api.openai.com/v1/chat/completions", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": "Bearer ТВОЙ_API_KEY"
//     },
//     body: JSON.stringify({
//       model: "gpt-4o-mini",
//       messages: [
//         { role: "user", content: `Создай 5 задач по теме ${topic} (${level}) с решениями` }
//       ]
//     })
//   });

//   const data = await response.json();
//   document.getElementById("tasks").innerHTML =
//     `<div class="card">${data.choices[0].message.content}</div>`;
// }