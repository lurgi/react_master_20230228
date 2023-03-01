import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import { CategoryList } from "./atoms";

interface Idata {
    category : string;
}

function CreateCategroy () {
    const setCategories = useSetRecoilState(CategoryList);
    const [nowCategoryList, setNowCategoryList] = useRecoilState(CategoryList)
    const {register, handleSubmit, setValue} = useForm<Idata>();
    const onValid = ({category}:Idata) => {
        setValue("category", "");
        setCategories((oldCategories)=>[...oldCategories, category])
    }
    const onDelete = (event:React.MouseEvent<HTMLButtonElement>) => {
        const {currentTarget : {value}} = event
        console.log(value);
        setNowCategoryList((oldList) => {
            const targetIndex = oldList.findIndex(category => category === value)
            const oldFront = oldList.slice(0,targetIndex);
            const oldBack = oldList.slice(targetIndex+1)
            return [...oldFront,...oldBack]
        })
    }
    const newCategoryList = nowCategoryList.slice(3)
    return (
        <>
            <form onSubmit={handleSubmit(onValid)}>
                <input {...register("category")} placeholder="Write Custom Category..."/>
                <button>Add</button>
            </form>
            {newCategoryList.map(category => <button onClick={onDelete} value={category}>Category {category} Delete</button>)}
        </>    
    );
}

export default CreateCategroy