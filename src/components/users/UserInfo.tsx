type Props = {
    title: string;
    value: string | number;
};

export default function UserInfo({ title, value }: Props) {
    return (
        <div className="flex justify-center items-center gap-2">
            <span className="font-bold  group-hover:text-white">{title}: </span>
            <p className="text-gray-500  group-hover:text-white">{value}</p>
        </div>
    );
}
