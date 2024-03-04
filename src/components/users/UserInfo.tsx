type Props = {
    key: string;
    value: string | number;
};

export default function UserInfo({ key, value }: Props) {
    return (
        <div className="flex justify-center items-center gap-2">
            <span className="font-bold">{key}: </span>
            <p className="text-gray-500">{value}</p>
        </div>
    );
}
