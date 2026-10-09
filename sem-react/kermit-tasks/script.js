let listaTarefas = [];

const formAddTask = document.querySelector("#form-add-tarefa");

formAddTask.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputNomeTarefa = document.querySelector("#input-nome-tarefa");

  listaTarefas.push(inputNomeTarefa.value);

  const novaTarefa = document.createElement("div");

  novaTarefa.className =
    "tarefa bg-white border rounded-6 d-flex justify-content-between p-6";

  novaTarefa.innerHTML = `
          <div class="d-flex gap-4">
            <i class="bi bi-circle"></i>
            <span>${inputNomeTarefa.value}</span>
          </div>

          <i class="bi bi-trash"></i>
  `;

  document.getElementById("lista-tarefas").appendChild(novaTarefa);

  alert("Tarefa salva!");

  inputNomeTarefa.value = "";
});
