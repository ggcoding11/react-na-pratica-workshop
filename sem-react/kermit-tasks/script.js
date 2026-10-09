let listaTarefas = [];

const formAddTask = document.querySelector("#form-add-tarefa");

formAddTask.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputNomeTarefa = document.querySelector("#input-nome-tarefa");

  listaTarefas.push(inputNomeTarefa.value);

  const novaTarefa = document.createElement("p");

  novaTarefa.innerHTML = `
    <h1 class="mb-2">${inputNomeTarefa.value}</h1>
  `;

  document.getElementById("lista-tarefas").appendChild(novaTarefa);

  alert("Tarefa salva!");

  inputNomeTarefa.value = "";
});
