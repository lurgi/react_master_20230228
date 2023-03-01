import { useRecoilValue, useSetRecoilState } from "recoil";
import { CategoryList, IToDo, toDoState } from "./atoms";

function ToDo({text, category, id}:IToDo){
    const setToDos = useSetRecoilState(toDoState);
    const nowCategoryList = useRecoilValue(CategoryList);
    const onMoveCategory = (event : React.MouseEvent<HTMLButtonElement>) => {
        const {currentTarget : {name} } = event
        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex(toDo => toDo.id === id)
            const newToDo = {text, id, category : name as any};
            const oldFront = oldToDos.slice(0,targetIndex);
            const oldBack = oldToDos.slice(targetIndex+1)
            return [...oldFront,newToDo,...oldBack]
        })
    }
    const onDelete = () => {
        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex(toDo => toDo.id === id)
            const oldFront = oldToDos.slice(0,targetIndex);
            const oldBack = oldToDos.slice(targetIndex+1)
            return [...oldFront,...oldBack]
        })
    }
    return <li>
            <span>{text}</span>
            {nowCategoryList.map((notcategory)=>{
                return category !== notcategory && <button name={notcategory} onClick={onMoveCategory}>{notcategory}</button>
            })}
            {/* {category !== "TO_DO" && <button name="TO_DO" onClick={onMoveCategory}>To Do</button>}
            {category !== "DOING" && <button name="DOING" onClick={onMoveCategory}>Doing</button>}
            {category !== "DONE" && <button name="DONE" onClick={onMoveCategory}>Done</button>} */}
            <button onClick={onDelete}>Delete</button>
        </li>;
}

export default ToDo;