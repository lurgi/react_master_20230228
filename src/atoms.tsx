import { atom, selector} from "recoil";


// export enum Categories {
//     "TO_DO" = "TO_DO",
//     "DOING" = "DOING",
//     "DONE" = "DONE",
// }

export interface IToDo{
    text : string,
    id : number,
    category : string;
}

export const CategoryList = atom({
    key : "categoryList",
    default : ["TO_DO", "DOING", "DONE"]
})

export const categoryState = atom({
    key : "category",
    default : "TO_DO"
})

export const toDoState = atom<IToDo[]>({
    key : "toDo",
    default : JSON.parse(localStorage.getItem("TODOS") as any),
})

export const toDoSelector = selector({
    key : "toDoSelector",
    get : ({get}) => {
        const toDos = get(toDoState)
        const nowCategoryState = get(categoryState)
        return toDos.filter(toDo => toDo.category === nowCategoryState);
        // if(category === "TO_DO"){
        //     return toDos.filter(toDo => toDo.category === "TO_DO")};
        // if(category === "DOING"){
        //     return toDos.filter(toDo => toDo.category === "DOING")};
        // if(category === "DONE"){
        //     return toDos.filter(toDo => toDo.category === "DONE")};
    }
})

