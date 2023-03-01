import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoState } from "./atoms";


interface Idata {
    toDo : string;
}

function CreateToDo() {
    const category = useRecoilValue(categoryState);
    const [originToDos, setToDos] = useRecoilState(toDoState)
    const {register, handleSubmit, setValue} = useForm<Idata>();
    const handleValid = (data:Idata)=>{
        setValue("toDo", "")
        setToDos(oldToDos => [...oldToDos, {text:data.toDo, id : Date.now(), category}])
    }
    useEffect(()=>{
        localStorage.setItem("TODOS", JSON.stringify(originToDos));
    },[originToDos])
    return (
        <form onSubmit={handleSubmit(handleValid)}>
                <input {...register("toDo",{
                    required : "please write ToDo..."
                })} placeholder="Write ToDo..."/>
                <button>Add</button>
        </form>
    );
}

export default CreateToDo;