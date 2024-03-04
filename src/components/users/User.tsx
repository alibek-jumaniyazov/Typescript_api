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
        <div className="w-1/6 p-5 shadow-lg cursor-pointer flex flex-col justify-center items-center gap-3 rounded-md">
            <div className="">{item.id}</div>
            <UserInfo key='User Name' value={item.username}/>
            <UserInfo key='User Phone'  value={item.phone}/>
            <UserInfo key='User Email' value={item.email}/>
        </div>
    );
}
