import { useRecoilState, useRecoilValue} from "recoil";
import {CategoryList, categoryState, toDoSelector } from "./atoms";
import CreateCategory from "./CreateCategory";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList(){
    const toDos = useRecoilValue(toDoSelector)
    const categories = useRecoilValue(CategoryList)
    const [category, setCategory] = useRecoilState(categoryState);
    const onInput = (event : React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value as any)
    }
    return (
        <div>
            <h1>To Dos</h1>
            <CreateToDo/>
            <hr/>
            <select value={category} onInput={onInput}>
                {categories.map((category)=><option key={categories.indexOf(category)} value={category}>{category}</option>)}
                {/* <option value={"TO_DO"}>To Do</option>
                <option value={"DOING"}>Doing</option>
                <option value={"DONE"}>Done</option> */}
            </select>
            <CreateCategory/>
            <hr/>
            {toDos?.map(toDo=> <ToDo key={toDo.id} {...toDo}></ToDo>)}
        </div>
    );
}

export default ToDoList;