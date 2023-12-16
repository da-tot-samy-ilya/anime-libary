import {MainMenu} from "../Menu";
import {useEffect} from "react";
import {getCategories} from "./api/getCategories.ts";

export const Categories = () => {
    useEffect(() => {
        const getData = async () => {
            const data = await getCategories();
            console.log(data);
        };
        getData();
    }, []);

    return (
        <>
            <MainMenu/>
        </>
    );
};
