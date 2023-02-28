import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "./atoms";


interface Idata {
    toDo : string;
}

function CreateToDo():JSX.Element {
    const setToDos = useSetRecoilState(toDoState)
    const {register, handleSubmit, setValue} = useForm<Idata>();
    const handleValid = (data:Idata)=>{
        setValue("toDo", "")
        setToDos(oldToDos => [...oldToDos, {text:data.toDo, id : Date.now(), category:"TO_DO"}])
    }
    return (
        <form onSubmit={handleSubmit(handleValid)}>
                <input {...register("toDo",{
                    required : "please write ToDo..."
                })} placeholder="Write..."/>
                <button>Add</button>
        </form>
    );
}

export default CreateToDo();