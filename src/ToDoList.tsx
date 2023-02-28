import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState} from "recoil";
import { toDoState } from "./atoms";
import CreateToDo from "./CreateToDo";

// interface Idata {
//     toDo : string;
// }

function ToDoList(){
    const toDos = useRecoilValue(toDoState)
    // const setToDos = useSetRecoilState(toDoState)
    // const {register, handleSubmit, setValue} = useForm<Idata>();
    // const handleValid = (data:Idata)=>{
    //     setValue("toDo", "")
    //     setToDos(oldToDos => [...oldToDos, {text:data.toDo, id : Date.now(), category:"TO_DO"}])
    // }
    return (
        <div>
            <h1>To Dos</h1>
            <hr/>
                {/* <form onSubmit={handleSubmit(handleValid)}>
                    <input {...register("toDo",{
                        required : "please write ToDo..."
                    })} placeholder="Write..."/>
                    <button>Add</button>
                </form> */}
                <CreateToDo/>
            <hr/>
            <ul>
                {toDos.map(toDo => <li key={toDo.id}>{toDo.text}</li>)}
            </ul>
        </div>
    );
}

export default ToDoList;