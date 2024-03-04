type TApi = {
    id: 1;
    name: "alli9eblk";
};
type Props = {
    api: TApi;
};

export default function User({ api }: Props) {
    return (
        <div className="bg-red-800">
            <div className="name"></div>
        </div>
    );
}
