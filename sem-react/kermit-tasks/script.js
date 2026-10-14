const formAddTask = document.querySelector("#form-add-tarefa");

formAddTask.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputNomeTarefa = document.querySelector("#input-nome-tarefa");

  const novaTarefa = document.createElement("div");

  novaTarefa.className =
    "tarefa bg-white border rounded-6 d-flex justify-content-between p-6";

  novaTarefa.innerHTML = `
          <div class="d-flex gap-4">
            <i class="finish-button bi bi-circle clicavel"></i>
            <span>${inputNomeTarefa.value}</span>
          </div>

          <i class="delete-button bi bi-trash clicavel fs-lg"></i>
  `;

  novaTarefa
    .querySelector(".finish-button")
    .addEventListener("click", concluirTarefa);

  novaTarefa
    .querySelector(".delete-button")
    .addEventListener("click", deletarTarefa);

  document.getElementById("lista-tarefas").appendChild(novaTarefa);

  alert("Tarefa adicionada!");

  inputNomeTarefa.value = "";
});

const concluirTarefa = (e) => {
  const finishButton = e.target;

  const tarefaConcluida = finishButton.className.includes(
    "bi-check-circle-fill",
  );

  if (tarefaConcluida) {
    finishButton.className = "finish-button bi bi-circle clicavel";
  } else {
    finishButton.className = "finish-button bi bi-check-circle-fill clicavel";
  }
};

const deletarTarefa = (e) => {
  e.currentTarget.parentElement.remove();
};
