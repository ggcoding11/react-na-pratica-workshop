import { useState } from "react";
import { TaskItem } from "./components/TaskItem";

function App() {
  const [tasks, setTasks] = useState([]);

  const [taskName, setTaskName] = useState("");

  const adicionarTarefa = (e) => {
    e.preventDefault();

    setTasks((tasks) => [
      ...tasks,
      { id: crypto.randomUUID(), name: taskName, completed: false },
    ]);

    setTaskName("");
  };

  const concluirTarefa = (idConcluido) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === idConcluido
          ? { ...task, completed: !task.completed }
          : task,
      ),
    );
  };

  const deletarTarefa = (idDeletado) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== idDeletado));
  };

  return (
    <>
      <div className="bg-white rounded-8 p-8 w-100" id="main">
        <div className="d-flex flex-column align-items-center gap-4 w-100 mb-4">
          <div className="d-flex justify-content-center align-items-center gap-2">
            <img
              className="img-fluid w-3"
              src="https://img.icons8.com/?size=100&id=rn0oscjrJY2d&format=png&color=000000"
              alt="icon"
            />

            <h1>Kermit Tasks</h1>
          </div>

          <p className="fs-lg fw-semibold">Gerencie as suas tarefas diárias</p>

          <button
            data-bs-toggle="dialog"
            data-bs-target="#dialog-add-task"
            type="button"
            className="btn-solid theme-primary w-100 py-4"
          >
            <i className="bi bi-plus-square"></i>
            Adicione uma tarefa
          </button>
        </div>

        <div className="d-flex flex-column gap-4" id="lista-tarefas">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onConcluirTarefa={() => concluirTarefa(task.id)}
              onDeletarTarefa={() => deletarTarefa(task.id)}
            />
          ))}
        </div>
      </div>

      <dialog className="dialog" id="dialog-add-task">
        <form onSubmit={adicionarTarefa}>
          <div className="dialog-header">
            <h1 className="dialog-title">Adicione uma tarefa</h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="dialog"
              aria-label="Close"
            ></button>
          </div>
          <div className="dialog-body">
            <div className="form-field">
              <label htmlFor="input-nome-tarefa" className="form-label">
                Nome da tarefa:
              </label>
              <input
                type="text"
                className="form-control"
                id="input-nome-tarefa"
                placeholder="Estudar Java"
                required
                value={taskName}
                onChange={(event) => setTaskName(event.target.value)}
              />
            </div>
          </div>
          <div className="dialog-footer">
            <button
              type="button"
              className="btn-solid theme-secondary"
              data-bs-dismiss="dialog"
            >
              Fechar
            </button>
            <button type="submit" className="btn-solid theme-primary">
              Salvar
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}

export default App;
