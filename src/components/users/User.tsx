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
            <div className="flex justify-center items-center gap-2">
                <span className="font-bold">User Name: </span>
                <p className="text-gray-500">{item.username}</p>
            </div>
            <div className="flex">
                <span className="font-bold">User Phone: </span>
                <p className="text-gray-500">{item.phone}</p>
            </div>
            <div className="flex">
                <span className="font-bold">User Email: </span>
                <p className="text-gray-500">{item.email}</p>
            </div>
        </div>
    );
}
