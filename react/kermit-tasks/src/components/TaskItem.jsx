export function TaskItem({ task, onConcluirTarefa, onDeletarTarefa }) {
  const iconTarefaCompleta = task.completed
    ? "bi-check-circle-fill"
    : "bi-circle";

  return (
    <div className="tarefa bg-white border rounded-6 d-flex justify-content-between p-6">
      <div className="d-flex gap-4">
        <i
          className={`finish-button bi ${iconTarefaCompleta} clicavel`}
          onClick={onConcluirTarefa}
        ></i>
        <span>{task.name}</span>
      </div>

      <i
        className="delete-button bi bi-trash clicavel fs-lg"
        onClick={onDeletarTarefa}
      ></i>
    </div>
  );
}
