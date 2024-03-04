import UserInfo from "./UserInfo";

export type TApi = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: number;
};
type Props = {
    item: TApi;
};

export default function User({ item }: Props) {
    return (
        <div className="group  w-1/6 p-5 shadow-lg cursor-pointer flex flex-col justify-center items-center gap-3 rounded-md hover:bg-slate-400 transition-bg ease duration-300 hover:-translate-y-5  ">
            <div className="group-hover:text-white">{item.id}</div>
            <UserInfo title='User Name' value={item.username}/>
            <UserInfo title='User Phone'  value={item.phone}/>
            <UserInfo title='User Email' value={item.email}/>
        </div>
    );
}
