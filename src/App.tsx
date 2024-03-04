import User from "./components/users/User";
import "./index.css";
import axios from "axios";
import { TApi } from "./components/users/User";
import { useEffect, useState } from "react";

export default function App() {
    const [user, setUser] = useState<TApi[]>([]);

    useEffect(() => {
        async function GetUsers() {
            try {
                const request = axios.get(
                    "https://jsonplaceholder.typicode.com/users"
                );
                setUser((await request).data);
            } catch (err) {
                console.log(err);
            }
        }
        GetUsers();
    }, []);

    return (
        <div className="App ">
            <div className="w-full h-full flex flex-wrap justify-between items-center gap-8 p-5">
                {user.map((item) => (
                    <User item={item} key={item.id} />
                ))}
            </div>
        </div>
    );
}
