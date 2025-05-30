import { title } from "@/components/primitives";
import TodoList from "@/components/Todolist";

export default function AboutMePage() {
  return (
    <div>
      <TodoList />
      <br />
      <div className="border border-purple-500 border-dotted">
        <p className="text-white m-9 border border-purple-200">hello</p>
        <p className="bg-blue-900 p-9">test</p>
      </div>
      <div className="flex p-5 justify-center border-black border-dotted">
        <div className="border-red-500 border-2 m-4">hello sir</div>
        <div className="border-purple-500 border-2 m-4">hello sir</div>
      </div>
    </div>
  );
}
