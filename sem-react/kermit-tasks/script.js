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

          <i class="delete-button bi bi-trash clicavel fs-lg"></i>
  `;

  novaTarefa
    .querySelector(".delete-button")
    .addEventListener("click", deletarTarefa);

  document.getElementById("lista-tarefas").appendChild(novaTarefa);

  alert("Tarefa adicionada!");

  inputNomeTarefa.value = "";
});

const deletarTarefa = (e) => {
  e.currentTarget.parentElement.remove()
};
