export default function TodoItem({ item, index, setTodo }) {

  const onChange = () => {
    todo[index].completed = e.target.checked;
    setTodo(() => {
      const nextTodo = [...prevTodo];
      nextTodo[index] = { ...nextTodo[index] };
      nextTodo[index].completed = e.target.check;
      return '';
    });
  }
  return (
    <div><input type="checkbox" checked={item.completed} onChange={onChange}/>
    {item.title}
    </div>
  )
}