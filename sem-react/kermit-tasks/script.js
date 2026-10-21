const listaTarefas = [];

const adicionarTarefa = (e) => {
  e.preventDefault();

  const inputNomeTarefa = document.querySelector("#input-nome-tarefa");

  //Adição da tarefa no array -> MAS AINDA NÃO ESTÁ NO VISUAL

  const novaTarefa = {
    id: crypto.randomUUID(),
    name: inputNomeTarefa.value,
    completed: false,
  };

  listaTarefas.push(novaTarefa);

  console.log(listaTarefas);

  //A partir daqui, adicionamos a tarefa no VISUAL também!!!

  const componenteNovaTarefa = document.createElement("div");

  componenteNovaTarefa.className =
    "tarefa bg-white border rounded-6 d-flex justify-content-between p-6";

  componenteNovaTarefa.innerHTML = `
          <div class="d-flex gap-4">
            <i class="finish-button bi bi-circle clicavel"></i>
            <span>${inputNomeTarefa.value}</span>
          </div>

          <i class="delete-button bi bi-trash clicavel fs-lg"></i>
  `;

  componenteNovaTarefa
    .querySelector(".finish-button")
    .addEventListener("click", concluirTarefa);

  componenteNovaTarefa
    .querySelector(".delete-button")
    .addEventListener("click", deletarTarefa);

  document.getElementById("lista-tarefas").appendChild(componenteNovaTarefa);

  alert("Tarefa adicionada!");

  inputNomeTarefa.value = "";
};

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

const formAddTask = document.querySelector("#form-add-tarefa");

formAddTask.addEventListener("submit", adicionarTarefa);
